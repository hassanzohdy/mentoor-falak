class ProjectModulesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/modules');
    }

    updateModuleApi(id, api) {
        return this.endpoint.post(this.path(`/${id}/update-api`), { api });
    }
}

DI.register({
    class: ProjectModulesService,
    alias: 'projectModulesService',
});