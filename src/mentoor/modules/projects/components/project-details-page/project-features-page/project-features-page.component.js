class ProjectFeaturesPage extends Project {
    // @macro(loadModules, loadFeatures)
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectFeaturesService) {
        super(projectFeaturesService);
        this.name = 'project-details-features';
        this.prependName = 'features';
        this.itemKey = 'features';
        this.query = {
            features: true,
        };

        this.defaultSchema = {
            status: 'notDone',
            date: {
                format: moment().format('DD-MM-YYYY'),
            },
            module: {
                id: null,
            },
        };

        this.statuses = [
            'notDone',
            'inProgress',
            'deferred',
            'completed',
        ];
    }
}