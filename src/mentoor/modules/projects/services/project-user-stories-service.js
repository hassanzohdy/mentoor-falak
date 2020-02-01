class ProjectUserStoriesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/user-stories');
    }

    /**
     * Sort order the given user stories
     */
    sort(userStories) {
        return this.endpoint.patch(this.path('/sort'), {userStories});
    }
}

DI.register({
    class: ProjectUserStoriesService,
    alias: 'projectUserStoriesService',
});