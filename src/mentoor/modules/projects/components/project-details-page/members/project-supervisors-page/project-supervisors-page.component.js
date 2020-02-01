class ProjectSupervisorsPage extends Project {
    // @macro(mapUser)
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(usersService) {
        super();
        this.name = 'project-details-supervisors';
        this.prependName = 'Supervisors';
        this.usersService = usersService;
    }

    onProjectLoad() {
        this.isValidForm = true;
        this.isSending = false;
        this.totalSupervisors = 0;
        this.newSupervisorCost = FLAGS.projects.pricing.extra.supervisor;
        this.membersIds = this.project.members.map(member => member.member.id);

        this.supervisors = this.project.members.filter(member => member.role == 'supervisor');

        this.totalSupervisors = this.supervisors.length;
    }
    
    async submit(form, ) {
        this.isSending = true;
        let { record } = await this.projectsService.addSupervisor(this.project.id, form);

        this.modal.close();
        this.isSending = false;
        this.boot(record);
    }
}