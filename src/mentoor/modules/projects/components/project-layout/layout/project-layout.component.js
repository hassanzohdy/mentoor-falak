class ProjectLayout {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(cache, shareable) {
        this.cache = cache;
        this.shareable = shareable;

        this.cacheKey = 'pst'; // project sidebar toggle
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.sidebarIsVisible = this.cache.has(this.cacheKey) ? this.cache.get(this.cacheKey) : Is.desktop();
        this.isLoading = this.inputs.getProp('isLoading');
        this.project = this.inputs.getProp('project');
        this.shareable.observe('project', project => {
            this.project = project;
        });
    }

    toggleSidebar() {
        this.sidebarIsVisible = !!! this.sidebarIsVisible;

        this.cache.set(this.cacheKey, this.sidebarIsVisible);

        this.shareable.share('project-sidebar-toggle', this.sidebarIsVisible);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}


DI.register({
    class: ProjectLayout,
    alias: 'projectLayout',
});