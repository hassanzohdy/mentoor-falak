class AdminCocktailService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/cocktails');
    }
}

DI.register({
    class: AdminCocktailService,
    alias: 'adminCocktailService',
});