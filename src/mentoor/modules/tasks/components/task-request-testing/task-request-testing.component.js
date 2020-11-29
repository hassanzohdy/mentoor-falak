class TaskRequestTesting {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, tasksService) {
        this.user = user;            
        this.tasksService = tasksService;            
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.handler.onChange('task', this.handleTask.bind(this));

        this.handleTask(this.prop('task'));
    }

    handleTask(task) {
        this.task = task;

        this.task.canUserControl = canUserControl(this.task);

        // this.taskCanBeTested = ! this.task.testingStatus && this.task.canUserControl && this.task.status !== 'testing';
        this.taskCanBeTested = ! this.task.testingStatus && this.task.canUserControl && this.task.status === 'inReview';
    }

    requestTesting() {
        if (confirm('Are you sure you want to send testing request?') === false) return;

        this.task.testingStatus = 'requesting';
        
        this.taskCanBeTested = false;

        this.tasksService.requestTesting(this.task.id);

        userSocket.trigger('task.update', this.task);
    }

    canBeSetAsTesting() {
        return this.task.testStatus === 'requesting' && 
        (this.task.project.is.higherAuthority || this.task.project.members.find(member => member.role == 'softwareTester' && member.member.id == this.user.id));
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}