class ProjectPollsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/polls');
    }
}

DI.register({
    class: ProjectPollsService,
    alias: 'projectPollsService',
});