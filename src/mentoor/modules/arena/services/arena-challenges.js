class ArenaChallengesService extends Endpoint.Service {
    boot() {
        this.setRoute('/arena/challenges');
    }

}

DI.register({
    class: ArenaChallengesService,
    alias: 'arenaChallengesService',
});