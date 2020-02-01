class UnlockedChamberMiddleware {
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
        return 'unlocked-chamber';
    }

    /**
     * {@inheritDoc}
     */
    handle() {
        if (! this.user.einsteinChamber) {
            return this.router.navigateTo('/einstein-chamber/unlock');
        }

        return Middleware.NEXT;
    }
}

DI.register({
    class: UnlockedChamberMiddleware,
    alias: 'unlockedChamberMiddleware',
});