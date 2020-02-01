class UserStoriesBoard extends Project {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, projectUserStoriesService, projectSprintsService, shareable) {
        super(projectUserStoriesService);
        this.user = user;
        this.projectSprintsService = projectSprintsService;
        this.shareable = shareable;

        this.itemKey = 'userStories';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.handler.observe('projectSidebarIsVisible');

        this.userStories = this.inputs.getProp('userStories');
        this.project = this.inputs.getProp('project');
        this.projectSidebarIsVisible = this.shareable.getShared('project-sidebar-toggle');

        this.shareable.observe('project-sidebar-toggle', projectSidebarIsVisible => this.projectSidebarIsVisible = projectSidebarIsVisible);
    }

    share(userStory) {
        this.shareable.share('userStory', userStory);
    }

    getResponsiveClasses() {
        return {
            'col-sm-3': ! this.projectSidebarIsVisible,
            'col-sm-4': this.projectSidebarIsVisible,
        };
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    draggable(notesContainer) {
        if (notesContainer.dragged) return;

        notesContainer.dragged = true;

        Sortable.create(notesContainer, {
            easing: "cubic-bezier(1, 0, 0, 1)",
            scroll: true,
            bubbleScroll: true,
            onEnd: e => {
                let userStories = Array.from(notesContainer.querySelectorAll('.note')).map((userStory, index) => {
                    return {
                        id: userStory.id.replace('user-story-', ''),
                        sortOrder: index + 1,
                    };
                });

                this.service.sort(userStories);
            }
        });
    }

    onRemove(record) {
        this.userStories = this.userStories.filter(userStory => userStory.id != record.id);

        this.inputs.getEvent('change')(this.userStories);
    }
}