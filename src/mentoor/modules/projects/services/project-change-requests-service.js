class ProjectChangeRequestsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/change-requests');
    }
}

DI.register({
    class: ProjectChangeRequestsService,
    alias: 'projectChangeRequestsService',
});