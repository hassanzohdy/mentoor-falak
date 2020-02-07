class AboutPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(arenaService, router) {
        this.name = 'about';
        this.title = trans('about');

        this.router = router;

        this.challengesService = arenaService;

    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isLoading = true;
        // Get a single challenge according the url parameter
        let id = this.router.params.id;
    
        this.challengesService.getSingleChallenge(id).then(res => {
            this.challenge = res.body;
            this.isLoading = false;
        })
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}