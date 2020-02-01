class ResourcesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/resources');
    }
}

DI.register({
    class: ResourcesService,
    alias: 'resourcesService',
});