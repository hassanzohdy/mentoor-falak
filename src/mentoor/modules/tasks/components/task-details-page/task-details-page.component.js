class TaskDetailsPage {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(user, cache, router, shareable, meta, tasksService) {
    this.user = user;
    this.cache = cache;
    this.router = router;
    this.meta = meta;
    this.shareable = shareable;
    this.tasksService = tasksService;
    this.name = "task-details";
    this.title = "Task";

    userSocket.on('task.update', task => {
      if (task.id !== this.task.id) return;

      this.task = task;
      this.detectChanges();
    });
  }

  rate(rateValue) {
    let { id } = this.task;
    this.tasksService.rateTask(id, { rating: rateValue });
  }

  isTaskRateable() {
    return (
      this.isSupervisor() &&
      ["failed", "autoFailed", "completed"].includes(this.task.status)
    );
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  async init() {
    this.isValidForm = true;
    this.task = null;

    this.changeable = true;

    this.taskId = this.router.params.taskId;

    this.cacheKey = `task.${this.taskId}`;

    // if (this.cache.has(this.cacheKey)) {
    //     this.setTask(this.cache.get(this.cacheKey))
    // }

    try {

      let { record } = await this.tasksService.get(this.taskId);

      if (record.project) {
        this.shareable.share('project', record.project);
      }

      this.setTask(record);
    } catch (error) {
      echo(error)
      this.router.navigateTo('/404');
    }


    // this.cache.set(this.cacheKey, this.task);
  }

  participantCanChangeTaskStatus() {
    return ["notStarted", "inReview", 'failed', 'hold', "inProgress"].includes(this.task.status);
  }

  taskStatusCanBeChanged() {
    return canUserControl(this.task);
    return (
      (this.isSupervisor() ||
        (this.isParticipant() && this.participantCanChangeTaskStatus()) ||
        (this.task.project && this.task.project.is.higherAuthority)) &&

      this.changeable
    );
  }

  getAllowedTaskStatuses() {
    if (this.isParticipant()) {
      if (this.task.status == "notStarted") {
        return ["inProgress"];
      } else if (this.task.status == "inProgress") {
        return ["inReview", 'hold'];
      } else if (["failed", 'hold', 'inReview'].includes(this.task.status)) {
        return ["inProgress"];
      }
    }

    if (
      canUserControl(this.task)
      // this.isSupervisor() ||
      // (this.task.project && this.task.project.is.higherAuthority)
    ) {
      // get all task statuses except the auto failed
      let statusesList = [];

      for (let status of TASK_STATUSES) {
        if (status == "autoFailed") continue;

        statusesList.push(status);
      }

      return statusesList;
    }
  }

  setTask(task) {
    this.disableAutoDetection();
    this.task = prepareTask(task);

    this.title = this.task.title;

    if (this.task.description) {
      this.meta.setDescription(this.task.description);
    }

    if (!Is.empty(this.task.attachments) && isImage(this.task.attachments[0])) {
      this.meta.setImage(this.task.attachments[0]);
    }
    if (
      !isBot() &&
      // !this.isParticipant() &&
      // !this.isSupervisor() &&
      !this.isProjectMember()
      && ! userCanJoinAnyProjectIn(currentUserCompany())
    ) {
      return this.router.navigateTo("/tasks");
    }

    this.task.canBeModified =
      this.isParticipant() ||
      this.isSupervisor() ||
      this.isProjectHigherAuthorityMember();

    // share the project globally, this is useful for quick project switching
    if (this.task.project && this.task.project.id) {
      this.shareable.share("project", this.task.project);
    }

    this.detectChanges();
  }

  isProjectMember() {
    return this.task.project && this.task.project.is.member;
  }

  isProjectHigherAuthorityMember() {
    return this.task.project && this.task.project.is.higherAuthority;
  }

  async updateTaskStatus(newStatus) {
    let reason;
    if (newStatus === 'hold') {
      reason = prompt('Please Write down the reason of holding the task');

      if (!reason) {
        this.taskStatusDropdown.updateCurrentValue(this.task.status);
        return;
      }
    } else if (
      confirm(`Are you sure you want to change task status to ${newStatus}`) ===
      false
    ) {
      this.taskStatusDropdown.updateCurrentValue(this.task.status);
      return;
    }

    this.task.status = newStatus;

    this.changeable = false;

    let response = await this.tasksService.updateTaskStatus(
      this.task.id,
      newStatus,
      { reason },
    );

    this.task = response.task;

    userSocket.trigger('task.update', this.task);

    this.changeable = true;
    // this.cache.set(this.cacheKey, this.task);
    // this.detectChanges();
  }

  getTaskStatus() {
    return taskStatus(this.task);
  }

  isParticipant(user = this.user) {
    return this.task.participant && this.task.participant.id == user.id;
  }

  isSupervisor(user = this.user) {
    return (
      Array.get(
        this.task.supervisors,
        supervisor => supervisor.id == user.id
      ) !== null
    );
  }

  async submit(form) {
    if (confirm("Are you sure? you can not undo this action") === false) return;

    this.isSending = true;

    if (this.recordData) {
      let formData = new FormData(form);
      formData.append("record", this.recordData);
      form = formData;
    }

    let response = await this.tasksService.submitTask(this.task.id, form);

    this.task = response.task;
    // this.cache.set(this.cacheKey, this.task);
    this.detectChanges();
  }

  async submitComment(form) {
    this.isSending = true;

    if (this.recordData) {
      let formData = new FormData(form);
      formData.append("record", this.recordData);
      form = formData;
    }

    let response = await this.tasksService.addNewComment(this.task.id, form);

    this.isSent = true;

    this.isSending = false;

    this.recordSrc = null;

    this.recordData = false;

    this.task = response.task;

    setTimeout(() => {
      this.isSent = false;
    }, 100);
  }

  /**
   * Capture the given record object
   *
   * @param {object} record
   */
  captureRecord(record) {
    this.recordSrc = record.url;
    this.recordData = record.blob;
  }

  /**
   * Clear record info
   */
  clearRecord(withConfirm = false) {
    if (withConfirm && confirm("Are you sure?") === false) return;

    this.recordSrc = null;
    this.recordData = null;
  }
}
