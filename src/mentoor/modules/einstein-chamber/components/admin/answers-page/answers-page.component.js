class EinsteinAnswers extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(einsteinAnswersService) {
        super(einsteinAnswersService);
        this.name = 'einstein-answers';
        this.crudOptions = {
            columns: ['ID', 'Category', 'Puzzle', 'User', 'View'],
            heading: 'View answer'
        }
        this.answerStatus = ['pending', 'approved', 'rejected'];
        this.tableHeading = 'Einstein Answers';

        this.recordable = true;
        this.recordName = 'recordNote';
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}