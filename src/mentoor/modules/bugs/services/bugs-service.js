class BugsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/bugs');
    }
}

DI.register({
    class: BugsService,
    alias: 'bugsService',
});