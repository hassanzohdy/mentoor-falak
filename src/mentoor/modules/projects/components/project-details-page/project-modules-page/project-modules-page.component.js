class ProjectModulesPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectModulesService) {
        super(projectModulesService);
        this.name = 'project-details-modules';
        this.prependName = 'Modules';
        this.itemKey = 'modules';
        this.query = {
            modules: true,
        };
    }
}