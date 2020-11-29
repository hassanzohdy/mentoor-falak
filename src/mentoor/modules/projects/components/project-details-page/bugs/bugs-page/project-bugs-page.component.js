class ProjectBugsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectBugsService) {
        super(projectBugsService);
        this.name = 'project-details-bugs';
        this.prependName = 'Bugs';
        this.itemKey = 'bugs';
        this.audioInputName = 'record';
        this.query = {
            // bugs: true,
        };

        this.filterOptions = {
            assignees: [],
            testers: [],
            priorities: [],
            modules: [],
            sprints: [],
            priorities: [],
        };
    }

    onProjectLoad() {
        this.filteredData = Object.clone(this.filterOptions);

        // this.cacheMany('bug', this.project.bugs);
    }
    onRemove() {
        this.onProjectLoad();
    }

    onSubmit(record) {
        if (this.currentType == 'add') {
            (Object.get(this.project, this.itemKey) || []).unshift(record);
        } else {
            Object.set(this.project, this.itemKey + '.' + this.index, record);
        }

        this.bugsList.addBug(record);

        this.onProjectLoad();
    }
}