class TasksBoard {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, cache, router, tasksService, usersService) {
        this.user = user;
        this.cache = cache;
        this.router = router;
        this.tasksService = tasksService;
        this.usersService = usersService;
        this.statuses = TASK_STATUSES;

        this.displayModeCacheKey = 'tbdm'; // tasks board display mode

        this.openQuickForm = {};

        for (let status of this.statuses) {
            this.openQuickForm[status] = false;
        }
    }

    ready() {
        this.selectDefaultParticipant();

        this.defaultParticipant = null;
    }

    async quickAdd(form) {
        this.isSubmitting = true;
        let formHandler = form.formHandler;

        this.participantId = true;

        let { record } = await this.tasksService.create(form);

        this.tasks.push(record);

        this.prepareTasks();

        this.openQuickForm[formHandler.value('status')] = false;

        this.participantId = null;

        this.isSubmitting = false;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        this.displayMode = this.cache.get(this.displayModeCacheKey, 'list');

        this.isInProjectPage = this.router.route().includes('/projects');

        this.isViewingArchivedTasks = false;

        this.project = this.inputs.getProp('project');
        this.supervisors = this.inputs.getProp('supervisors');
        this.participants = this.inputs.getProp('participants');

        this.now = Math.floor(Date.now() / 1000);

        let tasks = this.inputs.getProp('tasks');

        if (!tasks) {
            let { records } = await this.tasksService.list({
                me: true,
                project: this.project ? this.project.id : null,
            });

            tasks = records;
        }

        this.tasks = tasks;

        // to get reference to the original tasks
        this.originalTasks = tasks;

        this.prepareTasks();

        this.isLoading = false;
    }

    sortTasksBy(key) {
        // check the sort status for first time
        if (!this.sortOrder) {
            this.sortOrder = 'DESC';
        }

        let sortMethod;

        if (this.sortOrder == 'DESC') {
            sortMethod = 'sortBy';
            this.sortOrder = 'ASC';
        } else {
            sortMethod = 'sortByDesc';
            this.sortOrder = 'DESC';
        }

        this.tasksList = collect(this.tasksList)[sortMethod](key).toArray();
    }

    sortTasksCustom(orderArray, key) {
        this.tasksList.map(task => {
            for (let item of orderArray) {
                if (task[key] == item) {
                    task.order = orderArray.indexOf(item);
                }
            }
        });

        this.sortTasksBy('order');
    }

    selectDefaultParticipant() {
        let { id } = this.user.info;

        this.filterOptions.participants.map(member => {
            if (member.id == id) {
                this.defaultParticipant = member;
            }
        });

        this.filterBy('participants', this.defaultParticipant);

    }

    updateTasksList(tasks) {
        this.tasks = tasks;

        this.prepareTasks();
    }

    switchTo(displayMode) {
        this.displayMode = displayMode;
        this.cache.set(this.displayModeCacheKey, this.displayMode);
    }

    filterBy(key, selectedValue) {
        if (Is.array(selectedValue)) {
            selectedValue = collect(selectedValue).pluck('value').toArray();
            this.filteredData[key] = selectedValue;
            return this.filter();
        }
    }

    filter() {
        this.tasksList = this.tasks.filter(task => {
            let filtered = true;

            if (!Is.empty(this.filteredData.statuses)) {
                filtered &= this.filteredData.statuses.includes(task.status);
            }

            if (!Is.empty(this.filteredData.participants)) {
                filtered &= this.filteredData.participants.includes(String(task.participant.id));
            }

            if (!Is.empty(this.filteredData.projects)) {
                filtered &= task.project && this.filteredData.projects.includes(String(task.project.id));
            }

            if (!Is.empty(this.filteredData.modules)) {
                filtered &= task.module && this.filteredData.modules.includes(String(task.module.id));
            }

            if (!Is.empty(this.filteredData.userStories)) {
                filtered &= task.userStory && this.filteredData.userStories.includes(String(task.userStory.id));
            }

            if (!Is.empty(this.filteredData.supervisors)) {
                let found = false;
                for (let supervisor of task.supervisors) {
                    if (this.filteredData.supervisors.includes(String(supervisor.id))) {
                        found = true;
                        break;
                    }
                }

                filtered &= found;
            }

            if (!Is.empty(this.filteredData.priorities)) {
                filtered &= this.filteredData.priorities.includes(task.priority);
            }

            return filtered;
        }).map(this.prepareSingleTask.bind(this));
    }

    prepareSingleTask(task) {
        task.dropdown = false;

        task.isSupervisor = Boolean(
            Array.get(task.supervisors, supervisor => supervisor.id == this.user.id)
        );

        task.isParticipant = task.participant.id == this.user.id;

        task.openStatusChanger = false;

        task.canUserControl = (
            this.user.id == 1 ||
            task.isSupervisor ||
            (this.project && (this.project.isHigherAuthority)) ||
            (task.isParticipant && ['notStarted', 'inProgress'].includes(task.status))
        );

        task.progress = {
            total: 1,
            completed: task.status == 'completed' ? 1 : 0,
            percentage: (task.status == 'completed' ? 1 : 0) * 100,
        };

        if (!Is.empty(task.checklists)) {
            let totalChecklistItems = 0,
                totalCompletedChecklistItems = 0;

            for (let checklist of task.checklists) {
                totalChecklistItems += checklist.items.length;
                totalCompletedChecklistItems += checklist.items.filter(item => item.done).length;
            }

            task.progress = {
                total: totalChecklistItems,
                completed: totalCompletedChecklistItems,
                percentage: totalCompletedChecklistItems * 100 / totalChecklistItems,
            };
        }

        return task;
    }

    prepareTasks() {
        this.archivedTasks = [];

        this.filterOptions = {
            statuses: [],
            participants: [],
            supervisors: [],
            projects: [],
            modules: [],
            userStories: [],
            priorities: []
        };

        this.filteredData = Object.clone(this.filterOptions);

        let currentUserId = this.user.id;

        let currentUserIsParticipant = false;

        let currentUserIsParticipantAndHasInProgressTasks = false;

        this.tasksList = collect(this.tasks).filter(task => {
            if (task.archived) {
                this.archivedTasks.push(task);
            }

            if (task.participant.id == currentUserId) {
                currentUserIsParticipant = true;
            }


            if (task.participant.id == currentUserId && task.status == 'inProgress') {
                currentUserIsParticipantAndHasInProgressTasks = true;
            }

            // add status to filter
            Array.pushOnce(this.filterOptions.statuses, task.status);

            // add projects to filter
            if (task.project && task.project.id) {
                Array.pushOnce(this.filterOptions.projects, task.project, 'id');
            }

            // add modules to filter
            if (task.module && task.module.id) {
                Array.pushOnce(this.filterOptions.modules, task.module, 'id');
            }

            // add modules to filter
            if (task.userStory && task.userStory.id) {
                Array.pushOnce(this.filterOptions.userStories, task.userStory, 'id');
            }

            // add participants to filter
            if (task.participant.id) {
                Array.pushOnce(this.filterOptions.participants, task.participant, 'id');
            }

            // add priorities to filter
            if (task.priority) {
                Array.pushOnce(this.filterOptions.priorities, task.priority);
            }

            // add supervisors
            for (let supervisor of task.supervisors) {
                Array.pushOnce(this.filterOptions.supervisors, supervisor, 'id');
            }

            return true

            return !task.archived;
        }).map(this.prepareSingleTask.bind(this)).sortBy('sortOrder');

        if (currentUserIsParticipantAndHasInProgressTasks) {
            this.filteredData.statuses.push('inProgress');
            this.filteredData.participants.push(String(this.user.id));
        }

        // if (this.filterOptions.statuses.includes('inProgress')) {
        //     this.filteredData.statuses.push('inProgress');
        // }

        // display by default current user tasks 
        // if (currentUserIsParticipant) {
        //     this.filteredData.participants.push(String(this.user.id));
        // }

        this.tasksBoardView = this.tasksList.groupBy('status').all();

        this.tasksList = this.tasksList.toArray();

        this.filter();
    }

    statusIcon(status) {
        return {
            notStarted: 'watch_later',
            inProgress: 'directions_bike',
            inReview: 'directions_walk',
            completed: 'done_all',
            failed: 'mood_bad',
            autoFailed: 'sentiment_dissatisfied',
        }[status];
    }

    statusIconTitle(status) {
        return {
            notStarted: 'In Queue',
            inReview: 'Waiting for approval',
            inProgress: 'Work In Progress',
            completed: 'Completed Tasks',
            failed: 'Failed to deliver :(',
            autoFailed: 'Marked as failed when deadline is passed.',
        }[status];
    }

    remove() {
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (task.id != this.record.id) continue;

            delete this.tasks[i];

            this.tasks = Array.reset(this.tasks);

            break;
        }

        this.inputs.getEvent('change')(this.tasks);

        this.tasksService.delete(this.record.id);

        this.index = null;
        this.record = null;

        this.prepareTasks();
    }

    adjustTaskResponse(task) {
        if (this.currentType == 'add') {
            this.tasks.push(task);
        } else {
            for (let i = 0; i < this.tasks.length; i++) {
                let oldTask = this.tasks[i];
                if (oldTask.id != task.id) continue;

                this.tasks[i] = task;
                break;
            }
        }

        this.filter();
    }

    confirmArchiving(task) {
        this.currentTask = task;

        this.confirmingArchiving = true;
    }

    archive() {
        this.tasksService.archive(this.currentTask.id);

        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];

            if (this.currentTask.id != task.id) continue;

            task.archived = true;

            // this.originalTasks = Array.reset(this.originalTasks);

            break;
        }

        this.currentTask = null;

        this.inputs.getEvent('change')(this.tasks);

        this.prepareTasks();
    }

    openModal(type, record = {}, index) {
        this.modalIsOpened = true;

        this.currentType = type;

        let singleName = 'Task';

        this.modalHeading = type == 'add' ? 'Add New ' + singleName : 'Edit ' + singleName;

        this.record = Object.clone(record);

        this.index = index;
    }

    confirmRemoving(record, index) {
        this.record = record;

        this.index = index;

        this.confirmDelete = true;
    }

    draggable(tasksContainer) {
        if (tasksContainer.draggable) return;

        tasksContainer.draggable = true;

        Sortable.create(tasksContainer, {
            // filter: '.disabled',
            sort: true,
            group: {
                name: 'tasks',
                clone: false,
                pull: true,
                put: true,
            },
            onMove: e => {
                let newList = e.to;
                let item = e.dragged;
                let newStatus = newList.getAttribute('data-status');

                if (newStatus == 'autoFailed') return false;

                if (item.classList.contains('undraggable')) return false;

                let taskId = Number(item.getAttribute('data-id'));

                let task = Array.get(this.tasks, task => task.id == taskId);

                if (task.isParticipant && !task.isSupervisor && ['failed', 'completed', 'autoFailed'].includes(task.status)) return false;

                return task.canUserControl;
            },
            onEnd: e => {
                let taskElement = e.item;
                let newList = e.to;

                let newStatus = newList.getAttribute('data-status');

                let taskId = Number(taskElement.getAttribute('data-id'));

                let task = Array.get(this.tasks, task => task.id == taskId);

                if (task.status == newStatus) {
                    // sort tasks...later
                    let tasks = Array.from(newList.querySelectorAll('.task')).map((task, index) => {
                        return {
                            index: index,
                            id: Number(task.getAttribute('data-id')),
                        }
                    });

                    this.tasksService.sort(tasks);
                    return true;
                }

                if (newStatus == 'autoFailed') {
                    return false;
                }

                task.status = newStatus;
                this.prepareTasks();
                this.tasksService.updateTaskStatus(taskId, newStatus);
            }
        });
    }

    async updateTaskStatus(task, newStatus) {
        if (confirm(`Are you sure you want to change task status to ${newStatus}`) === false) return;

        task.status = newStatus;

        task.openStatusChanger = false;
        this.tasksService.updateTaskStatus(task.id, newStatus);

        this.filter();
    }
}