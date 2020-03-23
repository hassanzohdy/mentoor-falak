class TaskDetailsPage {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(user, cache, router, shareable, tasksService) {
    this.user = user;
    this.cache = cache;
    this.router = router;
    this.shareable = shareable;
    this.tasksService = tasksService;
    this.name = "task-details";
    this.title = "Task";
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

    let { record } = await this.tasksService.get(this.taskId);

    this.setTask(record);

    // this.cache.set(this.cacheKey, this.task);
  }

  participantCanChangeTaskStatus() {
    return ["notStarted", "inReview", "inProgress"].includes(this.task.status);
  }

  getAllowedTaskStatuses() {
    if (
      this.isSupervisor() ||
      (this.task.project && this.task.project.is.higherAuthority)
    ) {
      // get all task statuses except the auto failed
      let statusesList = [];

      for (let status of TASK_STATUSES) {
        if (status == "autoFailed") continue;

        statusesList.push(status);
      }

      return statusesList;
    }

    if (this.isParticipant()) {
      if (this.task.status == "notStarted") {
        return ["inProgress"];
      } else if (this.task.status == "inProgress") {
        return ["inReview"];
      } else if (this.task.status == "inReview") {
        return ["inProgress"];
      }
    }
  }

  setTask(task) {
    this.disableAutoDetection();
    this.task = task;

    this.title = this.task.title;

    if (
      !this.isParticipant() &&
      !this.isSupervisor() &&
      !this.isProjectMember()
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
    if (
      confirm(`Are you sure you want to change task status to ${newStatus}`) ===
      false
    )
      return;

    this.task.status = newStatus;

    this.changeable = false;

    let response = await this.tasksService.updateTaskStatus(
      this.task.id,
      newStatus
    );
    this.task = response.task;

    this.changeable = true;
    // this.cache.set(this.cacheKey, this.task);
    // this.detectChanges();
  }

  taskStatusCanBeChanged() {
    return (
      (this.isSupervisor() ||
        (this.isParticipant() && this.participantCanChangeTaskStatus()) ||
        (this.task.project && this.task.project.is.higherAuthority)) &&
      this.changeable
    );
  }

  getTaskStatus() {
    return taskStatus(this.task);
  }

  isParticipant(user = this.user) {
    return this.task.participant.id == user.id;
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
