class ProjectPollsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectPollsService) {
        super(projectPollsService);
        this.name = 'project-details-polls';
        this.prependName = 'Polls';
        this.itemKey = 'polls';
        this.query = {
            polls: true,
        };
    }
}