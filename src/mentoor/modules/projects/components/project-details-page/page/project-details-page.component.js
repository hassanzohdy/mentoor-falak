class ProjectDetailsPage extends Project {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, shareable, projectsService) {
        super(user, router, shareable, projectsService);
        this.name = 'project-details';
        this.title = 'Project Page';

        this.query = {
            tasks: true,
        };
    }

    /**
     * {@inheritdoc}
     */
    onProjectLoad() {
        // if (!this.project.isUserMember) {
        //     return this.router.navigateTo('/projects');
        // }
        
        this.participants = this.project.members.map(member => member.member);
        this.supervisors = this.participants;
    }
}