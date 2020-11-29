class ProjectUserStoryFormPage extends Project {
    // @macro(loadSprints, loadModules)    
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(projectSprintsService, projectUserStoriesService, shareable, session) {
        super(projectUserStoriesService);
        this.projectSprintsService = projectSprintsService;
        this.shareable = shareable;
        this.session = session;
        this.itemKey = 'userStories';
        this.name = 'project-user-story-form';
        this.types = [{
            text: 'User Story',
            value: 'userStory',
        }, {
            text: 'Epic',
            value: 'epic',
        }, {
            text: 'Initiative',
            value: 'initiative',
        }];

        this.playersList = [
            'owner',
            'stakeholder',
            'developer',
            'projectManager',
            'teamLeader',
            'member',
            'user',
            'customer',
            'visitor',
            'administrator',
            'supervisor',
            'moderator',
            'operator',
        ];

        this.priorities = [{
            text: 'Must Have',
            value: 'mustHave'
        }, {
            text: 'Should Have',
            value: 'shouldHave',
        }, {
            text: 'Could Have',
            value: 'couldHave',
        }, {
            text: 'Won\'t Have',
            value: 'wontHave',
        }];

        this.colors = [
            'skyblue',
            'yellow',
            'pistage',
            'purple',
            'orangered',
            'lime',
            'tan',
            'dark',
            'gray',
        ];
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.userStoryId = this.router.params.userStoryId;

        this.currentType = this.userStoryId ? 'edit' : 'add';

        if (this.shareable.isSharing('userStory')) {
            this.userStory = this.shareable.getShared('userStory');
        }

        if (this.shareable.isSharing('project')) {
            this.project = this.shareable.getShared('project');
        } else if (this.session.has('project')) {
            let project = this.session.get('project');

            if (project.id == this.router.params.id) {
                this.project = project;
            }
        }

        this.query = {
            userStories: true,
        };

        if (this.userStoryId) {
            this.query.userStory = this.userStoryId;
        }

        this.defaultSchema = {
            priority: 'mustHave',
            color: Array.random(this.colors),
            parent: {
                id: null,
            },
            module: {
                id: null,
            },
            task: {},
        };

        this.record = this.defaultSchema;

        this.hasParent = false;
        
        if (this.userStory && this.currentType == 'edit') {
            this.record = this.userStory;
        }
        
        // this.forceLoad = this.userStoryId != null;

        super.init();
    }

    onProjectLoad() {
        if (this.userStoryId && !this.userStory) {
            this.userStory = this.project.userStory;

            this.record = this.userStory;
        }
    }


    onUserStoryTypeChange(type) {
        switch (type.value) {
            case 'userStory':
                this.hasParent = true;
                this.parentType = 'epic';
                break;
            case 'epic':
                this.hasParent = true;
                this.parentType = 'initiative';
                break;

            default:
                this.hasParent = false;
                break;
        }
    }

    loadParents() {
        return this.service.list({
            type: this.parentType,
            project: this.project.id,
        });
    }

    onSubmit(record) {
        this.router.navigateTo(URLS.project(this.project, 'user-stories', record));
        // this.goBack();
    }

    goBack() {
        if (this.router.prev() != '/') return this.router.navigateBack();

        this.router.navigateTo(URLS.project(this.project, 'user-stories'));
        // this.router.navigateTo(URLS.project(this.project, 'user-stories', this.userStory || null));
    }
}