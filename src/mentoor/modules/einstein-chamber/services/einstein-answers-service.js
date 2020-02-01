class EinsteinAnswersService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/einstein-chamber/answers');
    }
}

DI.register({
    class: EinsteinAnswersService,
    alias: 'einsteinAnswersService',
});