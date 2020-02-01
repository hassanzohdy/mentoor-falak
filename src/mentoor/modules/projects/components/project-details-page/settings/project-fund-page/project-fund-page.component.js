class ProjectFundPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(usersService) {
        super();
        this.name = 'project-details-fund';
        this.prependName = 'Fund';
        this.usersService = usersService;
        this.itemKey = 'fund';
        this.query = {
            fund: true,
        };
    }

    onProjectLoad() {
        this.isValidForm = true;
        this.isSending = false;
    }

    async submit(form,) {
        this.isSending = true;
        let { record } = await this.projectsService.donate(this.project.id, form);

        this.modal.close();
        this.isSending = false;
        this.boot(record);
    }

    getTeamLeaderName(team) {
        return Object.get(Array.get(team.members, member => member.role == 'teamLeader'), 'name', 'N/a');
    }
}