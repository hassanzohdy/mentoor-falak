class ProjectTasksBoardPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(user, tasksService, projectTasksBoardService) {
        super(projectTasksBoardService);
        this.user = user;
        this.tasksService = tasksService;
        this.name = 'project-details-tasks';
        this.prependName = 'Tasks';
        this.itemKey = 'tasks';
        this.query = {
            // tasks: true,
        };

        this.statuses = TASK_STATUSES;

        this.defaultSchema = {
            reward: 10000,
            penaltyRatio: 3,
        };
    }

    onProjectLoad() {
        this.participants = this.project.members.map(member => member.member);
        this.supervisors = this.participants;
        if (this.tasksBoard) {
            this.tasksBoard.updateTasksList(this.project.tasks);
        }

        this.updateTasksList(this.project.tasks);
    }

    updateTasksList(tasks) {
        return;
        this.project.tasks = tasks;
        // this.totalTasks = this.project.tasks.filter(task => ! task.archived).length;

        this.totalTasks = this.project.tasks.length;

        // this.totalArchivedTasks = this.project.tasks.filter(task => task.status).length;
    }

    adjustTaskResponse(task) {
        // if (this.currentType == 'add') {
        //     Object.get(this.project, this.itemKey).push(task);
        // } else {
        //     Object.set(this.project, this.itemKey + '.' + this.index, task);
        // }

        // this.tasksBoard.updateTasksList(this.project.tasks);

        // this.onProjectLoad();
    }
}