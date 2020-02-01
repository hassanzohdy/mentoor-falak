class ProjectChangeRequestsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectChangeRequestsService) {
        super(projectChangeRequestsService);
        this.name = 'project-details-changeRequests';
        this.prependName = 'ChangeRequests';
        this.itemKey = 'changeRequests';
        this.query = {
            changeRequests: true,
        };

        this.changeRequestTypes = CHANGE_REQUEST_TYPES;
    }
}