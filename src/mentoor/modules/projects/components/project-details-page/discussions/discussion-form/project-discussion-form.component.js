class ProjectDiscussionForm {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, projectDiscussionsService) {
        this.router = router;
        this.service = projectDiscussionsService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.record = this.inputs.getProp('discussion', {});

        this.project = this.inputs.getProp('project');

        this.close = this.inputs.getEvent('close');
        this.save = this.inputs.getEvent('save');
    }

    getTeamsList() {
        return this.project.teams.map(team => {
            return {
                text: team.type,
                value: team.id,
            };
        });
    }

    async submit(form) {
        this.isSending = true;
        let discussion;
        if (! this.record.id) {
            let { record } = await this.service.create(form);

            discussion = record;
        } else {
            let { record } = await this.service.update(this.record.id, form);

            discussion = record;
        }

        this.isSending = false;

        this.save(discussion);

        this.close();
        this.router.navigateTo(URLS.project(this.project, 'discussions', discussion));
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}