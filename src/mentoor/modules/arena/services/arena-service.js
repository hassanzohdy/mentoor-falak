class ArenaService extends Endpoint.Service {
    boot() {
        this.setRoute('/arena');
    }

}

DI.register({
    class: ArenaService,
    alias: 'arenaService',
});