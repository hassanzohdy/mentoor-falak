class MiscService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/misc');
    }
}

DI.register({
    class: MiscService,
    alias: 'miscService',
});