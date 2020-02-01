class TaskModal {
    // @macro(loadModules)
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, usersService, tasksService) {
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

        this.participants = this.inputs.getProp('participants');
        this.supervisors = this.inputs.getProp('supervisors');
        this.project = this.inputs.getProp('project');
        this.displayStatusList = this.inputs.getProp('displayStatusList');

        if (this.displayStatusList) {
            this.statuses = TASK_STATUSES;
        }

        this.data = this.inputs.getProp('task', {
            penaltyRatio: 2,
            reward: 10000,
        });
        
        this.close = this.inputs.getEvent('close');
        this.save = this.inputs.getEvent('save', e => {
            this.router.refresh();
        });
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
        } else {
            let { record } = await this.tasksService.create(form);

            taskInfo = record;
        }

        this.modal.close();
        this.save(taskInfo);
    }
}