class ProjectSidebar {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(shareable, user, router) {
        this.user = user;
        this.router = router;
        this.shareable = shareable;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.project = this.inputs.getProp('project');
        this.shareable.observe('project', project => {
            this.project = project;
        });
    }

    isActiveLink(segment) {
        segment = segment ? '/' + segment : '';
        return {
            // active: this.router.route() == `/projects/${this.router.params.id}${segment}`,
            active: segment == '' ? this.router.route() == `/projects/${this.router.params.id}` : this.router.route().startsWith(`/projects/${this.router.params.id}${segment}`),
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}
