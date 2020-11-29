class TaskModal {
    // @macro(loadModules,loadComponents)
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, usersService, tasksService) {
        this.user = user;
        this.router = router;
        this.usersService = usersService;
        this.tasksService = tasksService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.errors = {};
        this.recordData = null;
        this.isSending = false;
        this.modal = null;

        this.taskLevels = [
            { text: "High", value: "high" },
            { text: "Medium", value: "medium" },
            { text: "Low", value: "low" },
        ]

        this.participants = this.prop('participants');
        this.project = this.prop('project');
        this.supervisors = this.prop('supervisors', this.project && this.project.is.higherAuthority && this.project.members.map(member => member.member));
        this.displayStatusList = this.prop('displayStatusList');

        if (Is.empty(this.participants) && ! Is.empty(this.project)) {
            this.participants = this.project.members.map(member => member.member);
        }

        if (this.displayStatusList) {
            this.statuses = TASK_STATUSES;
        }

        this.data = this.prop('task');

        if (Is.empty(this.data)) {
            this.data = {
                penaltyRatio: 2,
                reward: 10000,
                duration: '00:00',
                status: 'notStarted',
                participant: {
                    // id: this.user.get('id'),
                },
            }
        }

        this.close = this.event('close');
        // this.save = this.event('save', e => {
        //     this.router.refresh();
        // });
        this.save = this.event('save');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    getHeading() {
        return this.data.id ? 'Edit task' : 'Add new task';
    }

    async submit(form) {
        this.isSending = true;

        if (this.recordAudio.recordData) {
            let formData = new FormData(form);
            formData.append('descriptionRecord', this.recordAudio.recordData);
            form = formData;
        }

        let taskInfo;

        if (this.data.id) {
            let { record } = await this.tasksService.update(this.data.id, form);

            taskInfo = record;
            userSocket.trigger('task.update', taskInfo);  
        } else {
            let { record } = await this.tasksService.create(form);

            taskInfo = record;

            userSocket.trigger('task.create', taskInfo);  
        }

        this.modal.close();
        
        this.save(taskInfo);
    }
}