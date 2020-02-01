class ProjectTestSuitsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectTestCasesService, projectTestSuitsService) {
        super(projectTestSuitsService);
        this.testCasesService = projectTestCasesService;
        this.name = 'project-details-testSuits';
        this.prependName = 'TestSuits';
        this.itemKey = 'testSuits';
        this.query = {
            testSuits: true,
        };
    }

    onProjectLoad() {
        this.project.testSuits = this.project.testSuits.map(testSuit => {

            testSuit.viewTestCases = false;
            testSuit.canBeModified = this.project.isHigherAuthority || 
                                     testSuit.createdBy.id == this.user.id || 
                                     this.userIsTeamLeaderOf('softwareTesting');

                testSuit.testCases = testSuit.testCases.map(testCase => {
                testCase.canBeModified = this.project.isHigherAuthority ||
                                        (testCase.createdBy.id == this.user.id && testCase.status != 'dead') ||
                                        this.userIsTeamLeaderOf('softwareTesting');

                    return testCase;
            });

            testSuit.testCasesList = collect(testSuit.testCases).groupBy('type').all();

            for (let key in testSuit.testCasesList) {
                testSuit.testCasesList[key] = testSuit.testCasesList[key].toArray();
            }

            return testSuit;
        });
    }

    openTestCase(type, testSuit, testCase = {}, testCaseIndex = null, testSuitIndex) {
        this.testCaseIsOpened = true;
        this.testCaseType = type;
        this.testSuit = testSuit;
        this.testCase = testCase;
        this.testCaseIndex = testCaseIndex;
        this.testSuitIndex = testSuitIndex;
        this.preConditionsTestCasesIds = testCase.id ? collect(testCase.preConditionsTestCases).pluck('id').toArray() : [];
        this.testCaseHeading = testCase.id ? 'Edit Test Case' : 'New Test Case';
    }

    async submitTestCase(form) {
        this.isSending = true;

        if (this.testCase.id) {
            let { record } = await this.testCasesService.update(this.testCase.id, form);

            this.project.testSuits[this.testSuitIndex].testCases[this.testCaseIndex] = record;
        } else {
            let { record } = await this.testCasesService.create(form);

            this.project.testSuits[this.testSuitIndex].testCases.push(record);
        }

        this.onProjectLoad();
        // remain the current opened test suit opened
        this.project.testSuits[this.testSuitIndex].viewTestCases = true;
        this.isSending = false;

        this.testCaseIsOpened = false;
    }

    requestTestCases() {
        return this.testCasesService.list({
            project: this.project.id,
        });
    }

    confirmRemovingTestCase(testCase, testCaseIndex, testSuitIndex) {
        this.testCase = testCase;

        this.testCaseIndex = testCaseIndex;
        this.testSuitIndex = testSuitIndex;

        this.confirmDeletingTestCase = true;
    }

    
    onSubmit(record) { 
        this.onProjectLoad();
    }

    removeTestCase() {
        this.testCasesService.delete(this.testCase.id);

        delete this.project.testSuits[this.testSuitIndex].testCases[this.testCaseIndex];

        this.project.testSuits[this.testSuitIndex].testCases = Array.reset(this.project.testSuits[this.testSuitIndex].testCases);

        this.onProjectLoad();
        // remain the current opened test suit opened
        this.project.testSuits[this.testSuitIndex].viewTestCases = true;
    }
}