class PollsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/polls');
    }

    vote(pollId, data) {
        return this.endpoint.post(this.path(`/${pollId}/vote`), data);
    }

    close(pollId) {
        return this.endpoint.patch(this.path(`/${pollId}/close`));
    }
}

DI.register({
    class: PollsService,
    alias: 'pollsService',
});