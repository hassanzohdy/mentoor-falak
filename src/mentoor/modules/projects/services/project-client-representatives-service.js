class ProjectClientRepresentativesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/clients/representatives');
    }
}

DI.register({
    class: ProjectClientRepresentativesService,
    alias: 'projectClientRepresentativesService',
});