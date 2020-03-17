class Header {
    /**
     * {@inheritDoc}
     */
    constructor(user, authService, router, sidebar, projectLayout, shareable) {
        this.user = user;
        this.router = router;
        this.authService = authService;
        this.sidebar = sidebar;
        this.shareable = shareable;
        this.projectLayout = projectLayout;
    }

    /**
     * {@inheritdoc}
     */
    init() {
        this.showNotifications = false;

        this.currentRoute = this.router.route();

        this.currentProject = this.shareable.getShared('project');

        if (this.currentProject) {
            this.currentProjectId = this.currentProject.id;
        }

        this.shareable.observe('project', project => {
            this.currentProject = project;
            this.currentProjectId = project.id;
        });
    }

    navigateToProject(projectId) {
        this.disableAutoDetection();
        this.projectId = projectId;
        this.currentProjectId = projectId;
        this.shareable.share('project', {
            id: projectId,
        });

        setTimeout(() => {
            this.router.navigateTo(URLS.project({ id: projectId }));
        }, 100);
    }

    /**
     * Get total unseen notifications
     * 
     * @returns int
     */
    totalUnseenNotifications() {
        return collect(this.user.notifications || []).where('seen', false).count();
    }

    /**
     * Log the user out
     */
    logOut() {
        this.authService.logout();
        this.user.logout();
        this.router.refresh();
    }

    isProjectRoute() {
        return this.router.current.route.startsWith('/projects/{:id}');
        return this.currentRoute.startsWith('/projects') && !['/projects/me', '/projects', '/projects/new'].includes(this.currentRoute);
    }

    /**
     * Check if user has seen the given item name
     * 
     * @param   string item
     * @returns boolean 
     */
    hasSeen(item) {
        return this.user.isLoggedIn() && Object.get(this.user, `seen.${item}`);
    }

    userHasNotSeenLastVersion() {
        return this.user.isLoggedIn() && this.user.version != Config.get('version');
    }
}

DI.register({
    class: Header,
    alias: 'header',
});