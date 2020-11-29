class ProjectSidebar {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(shareable, user, router) {
        this.user = user;
        this.router = router;
        this.shareable = shareable;
        this.linksList = [{
            subRoute: '',
            text: 'Overview',
            icon: 'tachometer-alt',
            order: 1,
        }, {
            text: 'Resources',
            subRoute: 'resources',
            icon: 'bezier-curve',
            order: 2,
            featureName: 'resources',
        }, {
            text: 'Members',
            subRoute: 'members',
            icon: 'users',
            order: 3,
        }, {
            text: 'User Stories',
            subRoute: 'user-stories',
            icon: 'book-reader',
            order: 4,
            featureName: 'userStories',
        }, {
            text: 'Tasks Board',
            subRoute: 'tasks-board',
            icon: 'sticky-note',
            className: 'pink-text bold',
            featureName: 'taskBoard',
            order: 5,
        }, {
            text: 'Test Suits',
            subRoute: 'test-suits',
            icon: 'toolbox',
            order: 6,
            featureName: 'testSuits',
        }, {
            text: 'Test Environments',
            subRoute: 'test-environments',
            icon: 'tags',
            order: 6,
            featureName: 'testEnvironment',
        }, {
            tooltip: 'Bugs',
            subRoute: 'bugs',
            order: 7,
            featureName: 'bugs',
        }, {
            text: 'Layouts & Components',
            subRoute: 'components',
            icon: 'puzzle-piece',
            order: 8,
            featureName: 'components',
        }, {
            text: 'Modules',
            subRoute: 'modules',
            icon: 'cogs',
            order: 8,
            featureName: 'modules',
        }, {
            text: 'Sprints',
            subRoute: 'sprints',
            icon: 'running',
            order: 8,
            featureName: 'sprints',
        }, {
            text: 'Features',
            subRoute: 'features',
            icon: 'book',
            order: 8,
            featureName: 'features',
        }, {
            text: 'Meetings',
            subRoute: 'meetings',
            icon: 'handshake',
            order: 9,
            featureName: 'meetings',
        }, {
            text: 'Teams',
            subRoute: 'teams',
            icon: 'people-carry',
            order: 10,
            featureName: 'teams',
        }, {
            text: 'Change Requests (CR)',
            subRoute: 'change-requests',
            icon: 'exchange-alt',
            order: 11,
            featureName: 'changeRequests',
        }, {
            text: 'SRS',
            subRoute: 'srs',
            icon: 'book',
            tooltip: 'Software Requirements Specifications',
            order: 12,
            featureName: 'srs',
        }, {
            text: 'Documentation',
            subRoute: 'documentations',
            icon: 'book-dead',
            order: 13,
            featureName: 'documentation',
        }, {
            text: 'Discussions',
            subRoute: 'discussions',
            fab: 'rocketchat',
            order: 14,
            featureName: 'discussions',
        }, {
            text: 'Settings',
            subRoute: 'settings',
            icon: 'cogs',
            order: 15,
            isAuthorized: () => this.projectDetails.isHigherAuthority || (this.projectDetails.is || {}).higherAuthority,
        }, {
            //     text: 'Supervisors',
            //     subRoute: 'supervisors',
            //     icon: 'user-secret',
            //     order: 16,            
            //     isAuthorized: () => this.projectDetails.isHigherAuthority, 
            // }, {
            text: 'Client',
            subRoute: 'client',
            icon: 'user-secret',
            order: 17,
            featureName: 'client',
        }];

        // Todo Links later
        // Calendar
        // Reminders
        // Milestones
        // Todo List
        // Top Participants
        // Teams Dashboard
        // Activities
        // Project Backlog
        // Poll
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.links = [];
        this.projectDetails = this.prop('project', {});

        this.handler.observe('project').onChange('project', project => {
            this.projectDetails = project;
            this.filter(this.currentSearch);
            // this.detectChanges();
        });

        this.filter('');
    }

    filter(text) {
        this.currentSearch = text;
        this.links = collect(this.linksList);

        let projectFeatures = Object.get(this.projectDetails, 'settings.features', []);

        this.links = this.links.filter(link => {
            if (link.featureName && !Is.empty(projectFeatures) && !projectFeatures.includes(link.featureName)) return false;

            if (!text) return true;

            let linkText = link.text || link.tooltip;
            return linkText.match(new RegExp(text, 'i'));
        });

        this.links = this.links.map(link => {
            if (!link.isAuthorized) {
                link.isAuthorized = e => {
                    return this.projectDetails.isMember || (this.projectDetails.is || {}).member;
                };
            }

            return link;
        }).sortBy('order');
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
    ready() { }
}
