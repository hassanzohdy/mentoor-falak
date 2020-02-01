class TasksPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, meService, tasksService) {
        this.user = user;
        this.meService = meService;
        this.tasksService = tasksService;
        this.name = 'tasks';
        this.title = 'Tasks: Manage your mind and time!';

        this.taskSchema = {
            title: null,
            description: '',
            reward: 10000,
            penaltyRatio: 2,
            participantsIds: [],
            descriptionRecord: '',
            supervisorsIds: [],   
            startsAt: '',
            endsAt: '',
        };
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        
    }

    /**
     * OPen task model for given type
     * add|edit
     * @param   {string} type
     */
    openTaskModal(type) {
        this.modalType = type;
     }

     getTaskObject() {
         return this.modalType == 'add' ? Object.clone(this.taskSchema) : this.currentTask;
     }

     closeModal() {
         this.modalType = null;
     }
}