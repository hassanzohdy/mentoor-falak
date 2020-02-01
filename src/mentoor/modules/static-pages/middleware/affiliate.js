class AffiliateMiddleware {
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
        return 'affiliate';
    }

    /**
     * {@inheritDoc}
     */
    handle() {
        if (! this.user.invitationCode) {
            return this.router.navigateTo('/');
        }
        //
        return Middleware.NEXT;
    }
}

DI.register({
    class: AffiliateMiddleware,
    alias: 'affiliateMiddleware',
});