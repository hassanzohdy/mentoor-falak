class ArenaService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/arina');
    }
}

DI.register({
    class: ArenaService,
    alias: 'arenaService',
});