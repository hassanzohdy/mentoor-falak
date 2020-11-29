class ProjectSettingsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(tagsService) {
        super();
        this.tagsService = tagsService;
        this.name = 'project-details-settings';
        this.prependName = 'Settings';
    }

    onProjectLoad() {
        this.data = this.project;
    }

    async updateSettings(form) {
        this.isSaving = true;
        let { record } = await this.projectsService.update(this.project.id, form);

        this.isSaving = false;

        this.boot(record);

        this.successUpdate = true;
    }

    terminateProject() {
        this.projectsService.delete(this.project.id);

        this.router.navigateTo('/projects');
    }
}