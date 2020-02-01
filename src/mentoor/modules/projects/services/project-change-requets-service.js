class ProjectChangeRequetsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/change-requets');
    }
}

DI.register({
    class: ProjectChangeRequetsService,
    alias: 'projectChangeRequetsService',
});