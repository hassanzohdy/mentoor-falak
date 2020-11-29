class ProjectComponentsPage extends Project {
    // @macro(loadModules)
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectComponentsService) {
        super(projectComponentsService);
        this.name = 'project-details-components';
        this.prependName = 'Layouts & Components';
        this.itemKey = 'components';
        this.query = {
            components: true,
        };
    }

    setApplication(module) {
        if (module.application) {
            this.record.application = module.application;
            this.detectChanges();
        }
    } 
}