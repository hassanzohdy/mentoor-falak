class ChangeRequestDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-change-request-details';
        this.prependName = 'Change Request Details';
    }

    init() {
        this.query = {
            changeRequest: this.router.params.changeRequestId,
        };

        super.init();
    }

    onProjectLoad() {
        this.changeRequest = this.project.changeRequest;
    }
}