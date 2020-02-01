class TestCasePage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectTestCasesService) {
        super(projectTestCasesService);
        this.name = 'project-test-case-details';
        this.prependName = 'Test Case';
    }


    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.query = {
            testCase: this.router.params.testCaseId,
        };

        this.isValidForm = true;

        super.init();
    }


    onProjectLoad() {
        this.testCase = this.project.testCase;

        this.checkIfTestCaseStatusCanBeChanged();
    }

    checkIfTestCaseStatusCanBeChanged() {  
        this.testCaseStatusCanBeChanged = (this.testCase.createdBy.id == this.user.id && 
                                          this.testCase.status != 'dead') || 
                                          this.project.isHigherAuthority || 
                                          this.userIsTeamLeaderOf('softwareTesting');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }

    openStatusChangeConfirm(status) {
        this.newStatus = status;

        this.confirmStatusChange = true;

        this.reasonIsRequired = status == 'blocked';
    }

    getConfirmingMessage() {
        switch (this.newStatus) {
            case 'passed':
                return 'Are you sure you want to change the test case status to passed?';
            case 'failed':
                return 'Are you sure you want to change the test case status to failed? This will create a new bug automatically for the test case.';
            case 'blocked':
                return 'Please provide blocking reason for the test case';
            case 'dead':
                return 'Once you change it to dead, it WILL NOT BE EDITABLE ANYMORE!';    
        }
    }

    updateStatus(blockedReason) {
        this.testCase.status = this.newStatus;

        this.service.changeStatus(this.testCase.id, this.newStatus, {
            reason: blockedReason,
        }).then(({testCase, bug}) => {
            this.testCase = testCase;

            this.testCaseStatusCanBeChanged();
            this.bug = bug;
        });
    }
}