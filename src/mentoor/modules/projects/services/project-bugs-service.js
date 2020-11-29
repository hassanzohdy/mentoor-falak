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

    getFilters(data) {
        return this.endpoint.get(this.path('/filters'), { data });
    }

    total(data) {
        return this.endpoint.get(this.path('/total'), { data });
    }
}

DI.register({
    class: ProjectBugsService,
    alias: 'projectBugsService',
});