class ProjectDiscussionDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectDiscussionsService) {
        super(projectDiscussionsService);
        this.name = 'project-discussion-details';
        this.prependName = 'Discussions Details';
    }

    init() {
        this.query = {
            discussion: this.router.params.discussionId,
        };

        this.isValidForm = true;

        this.comment = '';

        super.init();
    }

    confirmStatusChange() {
        this.confirmStatusChanging = true;
    }

    changeStatus() {
        this.discussion.status = this.discussion.status == 'opened' ? 'closed' : 'opened';

        this.service.changeStatus(this.discussion.id, this.discussion.status);
    }

    onProjectLoad() {
        this.discussion = this.project.discussion;

        this.discussion.canBeModified = this.project.isHigherAuthority || this.discussion.createdBy.id == this.user.id;
    }

    recache() {
        this.project.discussion = this.discussion;

        this.cache();
    }
}