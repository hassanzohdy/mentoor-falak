function loadUserStories (withNoTaskAttached = false, except = null) {    
    return new Promise(resolve => {
        const adjustResponse = response => {
            if (withNoTaskAttached) {
                response.records = response.records.filter(userStory => {
                    return ! userStory.task || ! userStory.task.id || (except && userStory.id == except)
                });
            }
            resolve(response);
        };
    
        if (this.userStories) {
            adjustResponse(this.userStories);
        }

        if (! this.projectUserStoriesService) {
            this.projectUserStoriesService = DI.resolve('projectUserStoriesService');
        }

        this.projectUserStoriesService.list({
            project: this.project.id,
        }).then(response => {
            this.userStories = response;

            adjustResponse(response);
        });
    });
}

Macros.create('loadUserStories', loadUserStories);