class ArenaChallengesService extends Endpoint.Service {
    boot() {
        this.setRoute('/arena/challenges');
    }

    
    getSingleChallenge(id) {
        return this.endpoint.get(`/arena/challenges/${id}`)
    }

}

DI.register({
    class: ArenaChallengesService,
    alias: 'arenaChallengesService',
});