class ShoppingMallService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/shopping-mall');
    }

    /**
     * Purchase the given item for user
     * 
     * @param   string item
     * @returns Promise
     */
    purchase(item) {
        return this.endpoint.patch(this.path(`/purchase/${item}`));
    }
}

DI.register({
    class: ShoppingMallService,
    alias: 'shoppingMallService',
});