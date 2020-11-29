class ProjectComponentsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/components');
    }
}

DI.register({
    class: ProjectComponentsService,
    alias: 'projectComponentsService',
});