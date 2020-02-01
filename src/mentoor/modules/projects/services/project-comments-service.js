class ProjectCommentsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/comments');
    }
}

DI.register({
    class: ProjectCommentsService,
    alias: 'projectCommentsService',
});