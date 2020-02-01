class FlkFacebookShare {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router) {
        this.router = router;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        // @see https://stackoverflow.com/a/20842788/3380387
        _global('FB', null);

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }
}