class ProjectSprintsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectSprintsService) {
        super(projectSprintsService);
        this.name = 'project-details-sprints';
        this.prependName = 'Sprints';
        this.itemKey = 'sprints';
        this.query = {
            sprints: true,
        };
    }

    onProjectLoad() {
        this.handler.observe('currentSprintIsRunning');
        this.currentSprintIsRunning = this.project.currentSprint && this.project.currentSprint.status == 'running';
    }
}