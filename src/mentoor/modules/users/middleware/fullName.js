class FullNameMiddleware {
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
        return 'fullName';
    }

    /**
     * {@inheritDoc}
     */
    handle() {
    if (this.user.isLoggedIn() && ! this.user.name.includes(' ') && this.router.route() != '/me') {
            window.requireNameChange = true;
            return this.router.navigateTo('/me');
        }
        //
        return Middleware.NEXT;
    }
}

DI.register({
    class: FullNameMiddleware,
    alias: 'fullNameMiddleware',
});