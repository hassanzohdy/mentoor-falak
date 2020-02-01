class ProjectDiscussionsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectDiscussionsService) {
        super(projectDiscussionsService);
        this.name = 'project-details-discussions';
        this.prependName = 'Discussions';
        this.itemKey = 'discussions';
        this.query = {
            discussions: true,
        };
    }
}