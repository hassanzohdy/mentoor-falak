class ProjectUserStoriesPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectUserStoriesService, projectSprintsService, session) {
        super(projectUserStoriesService);
        this.projectSprintsService = projectSprintsService;
        this.session = session;
        this.name = 'project-details-user-stories';
        this.prependName = 'User Stories';
        this.itemKey = 'userStories';
        this.userStories = [];
        this.query = {
            userStories: true,
        };
    }

    onProjectLoad() {
        this.prepareUserStories();
    }

    prepareUserStories() {
        if (this.session.has('userStories')) {
            this.userStories = this.session.get('userStories')
        }
        this.userStories = collect(this.project.userStories).filter(userStory => !userStory.parent).sortBy('sortOrder').toArray();

        if (this.userStories.length > 0) {
            this.session.set('userStories', this.userStories);
        }
    }
}