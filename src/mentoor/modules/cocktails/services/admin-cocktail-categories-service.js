class AdminCocktailsCategoriesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/cocktails/categories');
    }
}

DI.register({
    class: AdminCocktailsCategoriesService,
    alias: 'adminCocktailsCategoriesService',
});