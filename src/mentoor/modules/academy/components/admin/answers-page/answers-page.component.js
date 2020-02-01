class AnswersPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(pendingAnswersService) {
        super(pendingAnswersService);
        this.name = 'answers';
        // this.pendingAnswersService = pendingAnswersService;
        this.crudOptions = {
            columns: ['ID', 'Track name',  'Topic', 'Submitted', 'User', 'View'],
            heading: 'View answer'
        }
        this.answerStatus = ['pending', 'approved', 'rejected'];
        this.tableHeading = 'Pending Answers';
        
        this.recordable = true;
        this.recordName = 'recordNote';

        this.title = 'Pending answers';
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}