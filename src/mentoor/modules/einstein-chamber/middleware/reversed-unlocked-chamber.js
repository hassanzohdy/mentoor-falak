class ReversedUnlockedChamberMiddleware {
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
        return 'reversed-unlocked-chamber';
    }

    /**
     * {@inheritDoc}
     */
    handle() {
        if (this.user.isLoggedIn() && this.user.einsteinChamber) {
            return this.router.navigateTo('/einstein-chamber');
        }
        
        return Middleware.NEXT;
    }
}

DI.register({
    class: ReversedUnlockedChamberMiddleware,
    alias: 'reversedUnlockedChamberMiddleware',
});