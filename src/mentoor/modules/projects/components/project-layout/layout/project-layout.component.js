class ProjectLayout {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, cache, shareable, projectsService) {
        this.cache = cache;
        this.router = router;
        this.shareable = shareable;
        this.projectsService = projectsService;

        this.cacheKey = 'pst'; // project sidebar toggler
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.projectWizardIsOpened = false;
        this.handler.observe('projectId').onChange('projectId', projectId => {
            if (! projectId) return;
            this.projectId = projectId;            
            this.projectsService.get(this.projectId).then(response => {
                this.project = response.record;
            });
        });
        this.sidebarIsVisible = this.cache.has(this.cacheKey) ? this.cache.get(this.cacheKey) : Is.desktop();
        this.shareable.share('project-sidebar-toggle', this.sidebarIsVisible);

        if (Is.mobile.any()) {
            this.sidebarIsVisible = false;
        }

        this.isLoading = this.inputs.getProp('isLoading');
        this.project = this.prop('project');
        this.projectId = this.prop('projectId');        
        if (this.projectId) {
            this.projectsService.get(this.projectId).then(response => {
                this.project = response.record;
            });
        }
        // this.shareable.observe('project', project => {
        //     this.project = project;
        // });
    }

    toggleSidebar() {
        this.setSidebarStatus(! this.sidebarIsVisible);
    }

    setSidebarStatus(status) {
        this.sidebarIsVisible = status;

        this.cache.set(this.cacheKey, this.sidebarIsVisible);

        this.shareable.share('project-sidebar-toggle', this.sidebarIsVisible);
    }

    closeSidebar() {
        this.setSidebarStatus(false);
    }

    closeOnMobile() {
        if (Is.mobile.any()) {
            this.closeSidebar();
        }
    }

    openSidebar() {
        this.setSidebarStatus(true);
    }

    destroy() {
        this.shareable.share('project', {});
        this.shareable.share('project-sidebar-toggle', false);
    }
}

DI.register({
    class: ProjectLayout,
    alias: 'projectLayout',
});