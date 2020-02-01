class ProjectsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, shareable, projectsService) {
        this.user = user;
        this.shareable = shareable;
        this.projectsService = projectsService;
        this.name = 'projects';
        this.title = 'Projects';
    }

    /**     
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        this.shareable.unshare('project', null);

        let { records } = await this.projectsService.list();

        this.projects = records;

        this.isLoading = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}