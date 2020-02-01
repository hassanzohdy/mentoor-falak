class AdminTracksService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/academy/tracks');
    }

}

DI.register({
    class: AdminTracksService,
    alias: 'adminTracksService',
});