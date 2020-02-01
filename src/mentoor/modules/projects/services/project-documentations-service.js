class ProjectDocumentationsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/documentation');
    }
}

DI.register({
    class: ProjectDocumentationsService,
    alias: 'projectDocumentationsService',
});