class CocktailCategoriesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/cocktails/categories');
    }
}

DI.register({
    class: CocktailCategoriesService,
    alias: 'cocktailCategoriesService',
});