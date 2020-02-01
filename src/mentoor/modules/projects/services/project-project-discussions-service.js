class ProjectProjectDiscussionsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/discussions');
    }
}

DI.register({
    class: ProjectProjectDiscussionsService,
    alias: 'projectProjectDiscussionsService',
});