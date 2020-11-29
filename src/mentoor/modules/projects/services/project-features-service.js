class ProjectFeaturesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/features');
    }
}

DI.register({
    class: ProjectFeaturesService,
    alias: 'projectFeaturesService',
});