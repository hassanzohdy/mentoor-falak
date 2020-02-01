class ProjectClientPage extends Project {
    // @macro(mapUser)
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(usersService, projectClientsService, projectClientRepresentativesService) {
        super(projectClientRepresentativesService);
        this.name = 'project-details-client';
        this.prependName = 'Client';
        this.itemKey = 'client';
        this.usersService = usersService;
        this.projectClientsService = projectClientsService;

        this.itemKey = 'client.representatives';
    }

    onProjectLoad() {
        this.isValidForm = true;
        this.isSending = false;
    }

    async updateClientInfo(form) {
        this.isSending = true;
        await this.projectClientsService.update(this.project.client.id, form);

        this.isSending = false;
    }
}
