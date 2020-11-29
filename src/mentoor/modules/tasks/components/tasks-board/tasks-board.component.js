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

        this.tasks = [];
        this.project = {};

        this.tasksBoardView = {};

        this.ratings = [];

        for (let i = 1; i <= 5; i++) {
            this.ratings.push({
                value: i,
                text: i * 20 + '%',
            });
        }

        this.displayModeCacheKey = 'tbdm'; // tasks board display mode

        this.openQuickForm = {};

        for (let status of this.statuses) {
            this.openQuickForm[status] = false;
        }

        this.defaultFilterOptions = {
            // statuses: ['inProgress', 'notStarted', 'hold'],
            statuses: [],
            participants: [],
            supervisors: [],
            projects: [],
            modules: [],
            userStories: [],
            priorities: []
        };

        userSocket.on('task.update', newTask => {
            if (this.samePage) {
                this.samePage = null;
                return;
            }

            if (!Is.empty(this.project) && Object.get(newTask, 'project.id') != this.project.id) return;

            let oldTask = Array.get(this.tasks || [], task => task.id == newTask.id);

            let index = (this.tasks || []).indexOf(oldTask);

            if (index === -1) return;

            this.tasks[index] = newTask;

            this.prepareTasks();
        }).on('task.create', newTask => {
            if (this.samePage) {
                this.samePage = null;
                return;
            }

            if (!Is.empty(this.project) && Object.get(newTask, 'project.id') != this.project.id) return;

            if ((this.tasks || []).find(task => task.id == newTask.id)) return;

            const task = this.prepareSingleTask(newTask);

            if (!task.canUserControl) return;

            this.tasks.unshift(task);

            this.prepareTasks();
        }).on('task.delete', deletingTask => {
            if (this.samePage) {
                this.samePage = null;
                return;
            }

            if (!Is.empty(this.project) && Object.get(deletingTask, 'project.id') != this.project.id) return;

            for (let i = 0; i < (this.tasks || []).length; i++) {
                let task = this.tasks[i];
                if (task.id != deletingTask.id) continue;

                delete this.tasks[i];

                this.tasks = Array.reset(this.tasks);

                this.prepareTasks();

                break;
            }
        });
    }

    async quickAdd(form) {
        this.isSubmitting = true;
        let formHandler = form.formHandler;

        this.participantId = true;

        let { record } = await this.tasksService.create(form);

        // for socketing
        this.samePage = true;

        userSocket.trigger('task.create', record);

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

        this.displayMode = this.cache.get(this.displayModeCacheKey, 'board');

        this.isInProjectPage = this.router.route().includes('/projects');

        this.isViewingArchivedTasks = false;

        this.addable = this.prop('addable', true);
        this.project = this.prop('project');
        this.supervisors = this.prop('supervisors');
        this.participants = this.prop('participants');

        this.now = Math.floor(Date.now() / 1000);

        this.tasksFilterCacheKey = `tasks-filter${this.project ? '-' + this.project.id : ''}`;

        this.filterOptions = cache.get(this.tasksFilterCacheKey, Object.clone(this.defaultFilterOptions));

        // this.filterOptions = {
        //     statuses: ['inProgress', 'notStarted', 'hold'],
        //     participants: [],
        //     supervisors: [],
        //     projects: [],
        //     modules: [],
        //     userStories: [],
        //     priorities: []
        // };

        // if (this.project) {
        //     if (!this.project.isHigherAuthority) {
        //         // this.filterOptions.participants.push(this.user.id);
        //     } else {
        //         // this.filterOptions.statuses.push('inReview');
        //     }
        // }

        let tasks = this.prop('tasks');

        this.currentPage = 1;

        this.mandatoryData = {
            me: true,
            project: this.project ? this.project.id : null,
        };

        if (userCanJoinAnyProjectIn(currentUserCompany())) {
            delete this.mandatoryData.me;
        }

        this.filters = {};

        this.isPaginating = false;

        this.tasks = [];

        if (!tasks) {
            const [tasksResponse, tasksFilter] = await Promise.all([await this.filter(), this.tasksService.getFilters(this.mandatoryData)]);
            this.filters = tasksFilter.filters;
        } else {
            this.tasks = tasks;

            // to get reference to the original tasks
            this.originalTasks = tasks;

            this.prepareTasks();

            this.isLoading = false;
        }

        this.isStatusSortOpened = false;
        this.isPartSortOpened = false;
        this.isSuperSortOpened = false;
        this.isModuleSortOpened = false;
        this.isPrioritySortOpened = false;
    }

    mapModules() {
        return this.filters.modules.map(moduleData => {
            const projectName = this.project ? '' : moduleData.project.name + ' > ';
            const moduleParent = !Is.empty(moduleData.parent) ? moduleData.parent.name + ' > ' : '';

            return {
                value: moduleData.id,
                text: projectName + moduleParent + moduleData.name,
            }
        });
    }

    sortObjects(key, subKey, val) {
        let sortedItems = [];
        this.tasksList.map((task, index) => {
            // if the property is an object ==> get the sub key and compare with the value
            if (typeof task[key] == 'object' && !Is.array(task[key])) {
                if (task[key][subKey] == val) {
                    sortedItems.push(task);

                    this.tasksList.splice(index, 1);
                }
                // if the property is an array ==> loop through the array and compare each item's id with the value
            } else if (Is.array(task[key])) {
                task[key].map(item => {
                    if (item.id == val) {
                        sortedItems.push(task);

                        this.tasksList.splice(index, 1);
                    }
                })
                // if the property is a normal value ==> compare
            } else if (task[key] == val) {
                sortedItems.push(task);

                this.tasksList.splice(index, 1);
            }
        });

        if (sortedItems.length > 0) {
            this.tasksList.unshift(...sortedItems);
        }
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

        let tasksList = collect(this.tasksList);

        if (key == 'status') {
            tasksList = tasksList.sort((taskA, taskB) => {
                let statuses = ['notStarted', 'inProgress', 'inReview', 'completed', 'failed', 'autoFailed'];
                for (let status of statuses) {
                    if (taskA.status == status && taskB.status != status) {
                        return -1;
                    } else if (taskA.status != status && taskB.status == status) {
                        return 1;
                    }
                }

                return 0;
            });
        } else if (key == 'remainingTime') {
            tasksList = tasksList.sort((taskA, taskB) => {
                let timeA = moment(taskA.endsAt, 'DD-MM-YYYY LT').unix() -
                    moment().unix();

                let timeB = moment(taskB.endsAt, 'DD-MM-YYYY LT').unix() -
                    moment().unix();

                if (timeA < 0 && timeB < 0) return 0;

                if (timeA > timeB) {
                    return -1;
                } else if (timeA < timeB) {
                    return 1;
                }

                return 0;
            });
        } else {
            tasksList = tasksList.sortBy(key);
        }

        if (this.sortOrder == 'DESC') {
            tasksList = tasksList.reverse();
        }

        this.tasksList = tasksList.toArray();
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
            this.filterOptions[key] = selectedValue;
            this.cache.set(this.tasksFilterCacheKey, this.filterOptions);
            this.currentPage = 1; // reset pagination
            return this.filter();
        }
    }

    resetFilter() {
        this.filterOptions = Object.clone(this.defaultFilterOptions);

        this.currentPage = 1;
        this.cache.set(this.tasksFilterCacheKey, this.filterOptions);

        this.filter();
    }

    async filter(appendData) {
        // this.isLoading = true;
        const filterBy = {
            page: this.currentPage,
            ...this.mandatoryData,
            ...this.filterOptions,
        }

        this.tasksService.list(filterBy).then(response => {
            if (appendData) {
                this.tasks = this.tasks.concat(response.records);
            } else {
                this.tasks = response.records;
            }

            this.paginationInfo = response.paginationInfo;

            this.isLoading = false;

            this.prepareTasks();

            this.isPaginating = false;

            this.paginate();
        });
    }

    paginate() {
        window.addEventListener('scroll', async () => {
            if (this.isPaginating || this.paginationInfo.numberOfPages === this.currentPage) return;

            this.lazyLoadingWhenReachingThisElement = $('.task-row').eq(-20);

            if (!this.lazyLoadingWhenReachingThisElement || !this.lazyLoadingWhenReachingThisElement.offset()) return;

            let topOfElement = this.lazyLoadingWhenReachingThisElement.offset().top;
            let bottomOfElement = this.lazyLoadingWhenReachingThisElement.offset().top + this.lazyLoadingWhenReachingThisElement.outerHeight();
            let bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
            let topOfScreen = $(window).scrollTop();

            if ((bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement)) {
                // the element is visible, do something
                this.loadMoreTasks();
            }
        });
    }

    loadMoreTasks() {
        this.isPaginating = true;

        this.currentPage++;

        this.filter(true);
    }

    prepareSingleTask(task) {
        task = prepareTask(task);

        if (this.filterOptions.participants.length == 0 || this.filterOptions.participants.find(participantId => Number(participantId) == currentUser.id)) {
            task.currentUserIsInvolvedIn = task.participant && task.participant.id === currentUser.id;
        }

        return task;
    }

    prepareTasks() {
        this.archivedTasks = [];

        this.tasksList = collect(this.tasks).map(this.prepareSingleTask.bind(this)).sortBy('sortOrder');

        this.tasksBoardView = this.tasksList.groupBy('status').all();

        this.tasksList = this.tasksList.toArray();
    }

    niceScroll(wrapper) {
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

        // for socketing
        this.samePage = true;

        userSocket.trigger('task.delete', this.record);

        this.tasksService.delete(this.record.id);

        this.index = null;
        this.record = null;

        this.prepareTasks();
    }

    adjustTaskResponse(task) {
        if (this.currentType == 'add') {
            this.tasks.unshift(task);
        } else {
            for (let i = 0; i < this.tasks.length; i++) {
                let oldTask = this.tasks[i];
                if (oldTask.id != task.id) continue;

                this.tasks[i] = task;
                break;
            }
        }

        this.currentType = null;

        this.prepareTasks();
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

    displayActualTime(task) {
        if (task.timeTakenText) return task.timeTakenText;
        let time = '';

        let actualTime = task.totalTimeTaken.actual;

        for (let dateType in actualTime) {
            if (dateType == 'total') continue;
            if (actualTime[dateType] == 0) continue;
            time += `${actualTime[dateType]}${dateType[0]} `;
        }

        return task.timeTakenText = `Time Taken: ${time}`;
    }

    draggable(tasksContainer) {
        if (tasksContainer.draggable) return;

        tasksContainer.draggable = true;

        Sortable.create(tasksContainer, {
            // filter: '.disabled',
            sort: true,
            forceFallback: true,
            setData: function (dataTransfer, el) {
                el.classList.add('flyingTask');
            },
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

                let task = Array.get(this.tasks || [], task => task.id == taskId);

                // if (task.isParticipant && !task.isSupervisor && ['failed', 'completed', 'autoFailed'].includes(task.status)) return false;

                return task.canUserControl;
            },
            onEnd: e => {
                let taskElement = e.item;

                let newList = e.to;

                let newStatus = newList.getAttribute('data-status');

                let reason = '';

                if (newStatus === 'hold') {
                    reason = prompt('Please Write down the reason of holding the task');

                    if (!reason.trim()) return false;
                }

                let taskId = Number(taskElement.getAttribute('data-id'));

                let task = Array.get(this.tasks || [], task => task.id == taskId);

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
                this.tasksService.updateTaskStatus(taskId, newStatus, {
                    reason
                });

                // for socketing
                this.samePage = true;

                userSocket.trigger('task.update', task);
            }
        });
    }

    async updateTaskStatus(task, newStatus) {
        if (confirm(`Are you sure you want to change task status to ${newStatus}`) === false) return;

        task.status = newStatus;

        task.openStatusChanger = false;
        this.tasksService.updateTaskStatus(task.id, newStatus);

        this.detectChanges();

        // this.filter();
    }
}