class ProjectRemindersPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectRemindersService) {
        super(projectRemindersService);
        this.name = 'project-details-reminders';
        this.prependName = 'Reminders';
        this.itemKey = 'reminders';
        this.query = {
            reminders: true,
        };
    }
}