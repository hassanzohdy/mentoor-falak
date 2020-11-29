class Header {
    /**
     * {@inheritDoc}
     */
    constructor(user, authService, projectsService, projectBugsService, cache, router, events, sidebar, projectLayout, shareable) {
        this.user = user;
        this.router = router;
        this.cache = cache;
        this.events = events;
        this.authService = authService;
        this.projectsService = projectsService;
        this.sidebar = sidebar;
        this.shareable = shareable;
        this.projectLayout = projectLayout;
        this.projectBugsService = projectBugsService;
        this.sidebarToggled = false;
        this.shrinkHeader = false;

        this.totalBugs = null;

        this.darkMode = this.cache.get('dark', true);

        this.shareable.observe('sidebarToggled', value => {
            this.sidebarToggled = value;
        });

        this.shareable.observe('project-sidebar-toggle', e => {
            if (screen.width < 1024) return;
            this.shrinkHeader = e;
        });

        userSocket.on('total.notifications', ({ data: notifications }) => {
            this.user.update('notifications', notifications);
            this.detectChanges();
        });

        this.projectsList = this.user.get('projects', []);

        let higherAuthority = userCanJoinAnyProjectIn(currentUserCompany());

        let options = {
            statuses: this.user.get('projectSettings.bugs.totalInHeader', ['active', 'reopened'])
        };

        let userProjectsInCurrentCompany = getCurrentProjectsCompany();

        if (userProjectsInCurrentCompany) {
            this.projectsList = userProjectsInCurrentCompany;
        }        

        if (!higherAuthority) {
            options.me = this.user.get('projectSettings.bugs.totalInHeaderOnlyMe');
        } else if (userCompanies().length === 1) {
            this.projectsService.list().then(response => {
                this.projectsList = response.records;
                setCurrentCompanyProjects(response.records);
            });
        }

        if (this.user.isLoggedIn()) {
            this.projectBugsService.total(options).then(response => {
                this.totalBugs = response.total;
            });
        }
    }

    switchDarkMode() {
        this.darkMode = !this.cache.get('dark', false);
        this.cache.set('dark', this.darkMode);

        document.documentElement.classList.toggle('dark');
    }

    /**
     * {@inheritdoc}
     */
    init() {
        this.showNotifications = false;
        this.currentProject = null;
        this.currentProjectId = null;

        if (Is.empty(this.projectsList) && this.user.get('projects')) {
            this.projectsList = this.user.get('projects');
        }

        this.events.on('notifications.totalChange', this.detectChanges.bind(this));

        this.currentRoute = this.router.route();

        this.currentProject = this.shareable.getShared('project');

        if (this.currentProject) {
            this.currentProjectId = this.currentProject.id;
        }

        this.shareable.observe('project', project => {
            this.currentProject = project;
            this.currentProjectId = project.id;

            this.detectChanges();
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

    inProjectLayout() {
        return this.router.current.route.startsWith('/projects/{:id}') || (this.currentProject || {}).id;
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