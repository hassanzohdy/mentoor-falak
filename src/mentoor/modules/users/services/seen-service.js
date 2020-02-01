class SeenService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/me/seen');
    }

    markAsSeen(item) {
        return this.endpoint.patch(this.path(''), {item});
    }
}

DI.register({
    class: SeenService,
    alias: 'seenService',
});