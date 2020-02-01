class ProjectSprintDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-sprint-details';
        this.prependName = 'Sprint Details';
    }

    init() {
        this.query = {
            sprint: this.router.params.sprintId,
        };

        super.init();
    }

    onProjectLoad() {
        this.sprint = this.project.sprint;
    }
}