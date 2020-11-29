class MyProjectsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router) {
        this.router = router;
        // this.user = user;
        // this.shareable = shareable;
        // this.projectsService = projectsService;
        this.name = 'my-projects';
        // this.title = 'My Projects';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.router.navigateTo('/projects');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}