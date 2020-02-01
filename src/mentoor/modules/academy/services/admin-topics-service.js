class AdminTopicsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/academy/topics');
    }
}

DI.register({
    class: AdminTopicsService,
    alias: 'adminTopicsService',
});