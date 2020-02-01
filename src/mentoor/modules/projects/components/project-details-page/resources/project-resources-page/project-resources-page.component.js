class ProjectResourcesPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(resourcesService) {
        super(resourcesService);
        this.name = 'project-details-resources';
        this.prependName = 'Resources';
        this.itemKey = 'resources';
        this.query = {
            resources: true,
        };
    }
}