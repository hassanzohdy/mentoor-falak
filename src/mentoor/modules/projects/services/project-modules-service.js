class ProjectModulesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/modules');
    }
}

DI.register({
    class: ProjectModulesService,
    alias: 'projectModulesService',
});