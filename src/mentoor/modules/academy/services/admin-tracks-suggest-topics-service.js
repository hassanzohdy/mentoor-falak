class AdminTracksSuggestTopicsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/academy/tracks/suggest-topics');
    }
}

DI.register({
    class: AdminTracksSuggestTopicsService,
    alias: 'adminTracksSuggestTopicsService',
});