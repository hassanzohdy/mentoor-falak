class ProjectSettingsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-details-settings';
        this.prependName = 'Settings';
    }

    onProjectLoad() {
        this.data = this.project;
    }

    async updateSettings(form) {
        let { record } = await this.projectsService.update(this.project.id, form);

        this.boot(record);
    }
}