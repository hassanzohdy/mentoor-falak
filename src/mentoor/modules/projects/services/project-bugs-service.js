class ProjectBugsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/bugs');
    }

    updateStatus(data) {
        return this.endpoint.patch(this.path(`/status`), data);
    }
}

DI.register({
    class: ProjectBugsService,
    alias: 'projectBugsService',
});