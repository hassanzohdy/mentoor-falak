class EinsteinCategoriesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/einstein-chamber/categories');
    }
}

DI.register({
    class: EinsteinCategoriesService,
    alias: 'einsteinCategoriesService',
});