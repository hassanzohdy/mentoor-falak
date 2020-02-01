class ProjectClientsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/clients');
    }
}

DI.register({
    class: ProjectClientsService,
    alias: 'projectClientsService',
});