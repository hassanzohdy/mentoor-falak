class ProjectDocumentationDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-documentation-details';
        this.prependName = 'DOcumentation Details';        
    }

    init() {
        this.query = {
            documentation: this.router.params.documentationId,
        };

        super.init();
    }

    onProjectLoad() {
        this.documentation = this.project.documentation;
    }
}