class ProjectUserStoryDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-meeting-details';
        this.prependName = 'Meetings Details';        
    }

    init() {
        this.query = {
            userStory: this.router.params.userStoryId,
        };

        this.forceLoad = true;
        
        super.init();
    }

    onProjectLoad() {
        this.userStory = this.project.userStory;

        // children user stories
        this.userStories = this.userStory.userStories;
    }
}