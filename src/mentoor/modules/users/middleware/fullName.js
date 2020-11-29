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
        // if (this.user.isLoggedIn() && this.isImagePlaceholder(this.user.image) && this.router.route() != '/me') {
        //     window.requireImageChange = true;
        //     return this.router.navigateTo('/me');
        // }
        //
        return Middleware.NEXT;
    }

    isImagePlaceholder(image) {
        return image.split("/").includes("avatar.png");
    }
}

DI.register({
    class: FullNameMiddleware,
    alias: 'fullNameMiddleware',
});