class ProjectDetailsPage extends Project {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, meta, shareable, projectsService) {
        super(user, router, shareable, projectsService);
        this.meta = meta;
        this.name = 'project-details';
        this.title = 'Project Page';

        this.query = {
        };
    }

    /**
     * {@inheritdoc}
     */
    onProjectLoad() {
        this.participants = this.project.members.map(member => member.member);
        this.supervisors = this.participants;

        if (this.project.image) {
            this.meta.setImage(this.project.image);
        }

        if (this.project.about) {
            this.meta.setDescription(this.project.about);
        }

        projectDeadline(this.project);

        // if (this.project.isMember && ! this.activitiesLoaded) {
        //     this.activitiesLoaded =  true;
        //     this.lastProjectActivities = this.project.id;
        //     this.projectsService.latestActivities(this.project.id).then(response => {
        //         this.activities = response.records;
        //     });
        // }
    }
}