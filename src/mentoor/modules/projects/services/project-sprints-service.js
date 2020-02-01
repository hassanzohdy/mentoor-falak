class ProjectSprintsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/sprints');
    }
}

DI.register({
    class: ProjectSprintsService,
    alias: 'projectSprintsService',
});