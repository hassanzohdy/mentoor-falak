class TrainingGroundService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/training-ground');
    }

    submitRepositoryUrl(trainingGroundId, data) {
        return this.endpoint.post(this.path(`${trainingGroundId}/repository-url`), data);
    }
}   

DI.register({
    class: TrainingGroundService,
    alias: 'trainingGroundService',
});