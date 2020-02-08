class ArenaService extends Endpoint.Service {
    getChallenges() {
        return this.endpoint.get('/arena/challenges')
    }

    getSingleChallenge(id) {
        // return this.endpoint.get(`/challenges/${id}`)
    }

    create(form) {
        return this.endpoint.post('/arena/challenges/new', form);
    }
}

DI.register({
    class: ArenaService,
    alias: 'arenaService',
});