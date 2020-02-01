class ArenaService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('arena');
    }
}

DI.register({
    class: ArenaService,
    alias: 'arenaService',
});