class AdminTrainingGroundService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/training-ground');
    }
}

DI.register({
    class: AdminTrainingGroundService,
    alias: 'adminTrainingGroundService',
});