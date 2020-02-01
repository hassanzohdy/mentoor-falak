class TasksList {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(cache, user, tasksService) {
        this.cache = cache;
        this.user = user;
        this.tasksService = tasksService;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.tasks = this.inputs.getProp('tasks');

        // this.tasks.forEach(task => {
        //     this.cache.set(`task.${task.id}`, task);
        // });
    }

    /**
     * Check if the given task can be edited
     * 
     * @param   {object} task
     * @returns boolean
     */
    taskCanBeEdited(task) {
        return this.user.id == 1 || task.supervisors.filter(supervisor => supervisor.id == this.user.id).length > 0;
    }

    deleteTask(task, index) {
        if (confirm('Are you sure?') === false) return;

        delete this.tasks[index];

        this.tasks = Array.reset(this.tasks);

        this.tasksService.delete(task.id);

        this.detectChanges();
    }
}