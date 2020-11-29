class ProjectTestEnvironmentsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/test-environments');
    }
}

DI.register({
    class: ProjectTestEnvironmentsService,
    alias: 'projectTestEnvironmentsService',
});