class HomePage {
    /**
     * Constructor
     */
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.name = 'home';
        this.title = this.siteName = trans('site-name');
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        if (this.user.isLoggedIn() && this.user.homePage && this.user.homePage != '/timeline') {
            return this.router.navigateTo(this.user.homePage);
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }
}