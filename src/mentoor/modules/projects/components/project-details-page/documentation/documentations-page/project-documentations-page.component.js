class ProjectDocumentationsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectDocumentationsService) {
        super(projectDocumentationsService);
        this.name = 'project-details-documentations';
        this.prependName = 'Documentations';
        this.itemKey = 'documentations';
        this.query = {
            documentations: true,
        };
    }
}