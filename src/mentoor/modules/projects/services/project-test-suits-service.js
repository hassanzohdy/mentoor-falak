class ProjectTestSuitsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/test-suits');
    }
}

DI.register({
    class: ProjectTestSuitsService,
    alias: 'projectTestSuitsService',
});