class ProjectDiscussionsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/discussions');
    }

    changeStatus(discussionId, status) {
        return this.endpoint.patch(this.path(`/${discussionId}/${status}`));
    }
}

DI.register({
    class: ProjectDiscussionsService,
    alias: 'projectDiscussionsService',
});