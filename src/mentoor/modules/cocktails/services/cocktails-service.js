class CocktailsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/cocktails');
    }
}

DI.register({
    class: CocktailsService,
    alias: 'cocktailsService',
});