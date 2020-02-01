class AdminTagsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/tags');
    }
}

DI.register({
    class: AdminTagsService,
    alias: 'adminTagsService',
});