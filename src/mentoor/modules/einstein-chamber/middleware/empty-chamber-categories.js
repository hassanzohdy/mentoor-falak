class EmptyChamberCategoriesMiddleware {
    /**
     * Constructor
     * Define your required dependencies in the constructor params 
     */
    constructor(user, router) {        
        this.user = user;
        this.router = router;
    }
    
    /**
     * {@inheritDoc}
     */
    name() {
        return 'empty-chamber-categories';
    }

    /**
     * {@inheritDoc}
     */
    handle() {
        if (Is.empty(this.user.einsteinChamber.categoriesIds)) {
            return this.router.navigateTo('/einstein-chamber/shop');
        }
        
        return Middleware.NEXT;
    }
}

DI.register({
    class: EmptyChamberCategoriesMiddleware,
    alias: 'emptyChamberCategoriesMiddleware',
});