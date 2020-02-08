class ArenaService extends Endpoint.Service {
    boot() {
        this.setRoute('/arena/challenges');
    }

    getSingleChallenge(id) {
        // return this.endpoint.get(`/challenges/${id}`)
    }

}

DI.register({
    class: ArenaService,
    alias: 'arenaService',
});