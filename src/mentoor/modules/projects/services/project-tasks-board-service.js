class ProjectTasksBoardService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/tasks-board');
    }
}

DI.register({
    class: ProjectTasksBoardService,
    alias: 'projectTasksBoardService',
});