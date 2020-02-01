class ProjectProjectDiscussionsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectProjectDiscussionsService) {
        super(projectProjectDiscussionsService);
        this.name = 'project-details-projectDiscussions';
        this.prependName = 'ProjectDiscussions';
        this.itemKey = 'projectDiscussions';
        this.query = {
            projectDiscussions: true,
        };
    }
}