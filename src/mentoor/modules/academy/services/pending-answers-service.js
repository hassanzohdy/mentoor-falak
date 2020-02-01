class PendingAnswersService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/academy/tracks/answers/pending');
    }
}

DI.register({
    class: PendingAnswersService,
    alias: 'pendingAnswersService',
});