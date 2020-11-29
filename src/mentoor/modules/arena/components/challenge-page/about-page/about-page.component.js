class AboutPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(arenaChallengesService, router) {
        this.name = 'about';
        this.title = trans('about');

        this.router = router;

        this.challengesService = arenaChallengesService;

    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isLoading = true;
        // Get a single challenge according the url parameter
        let id = this.router.params.id;
    
        this.challengesService.get(id).then(res => {
            this.challenge = res.record;
            this.isLoading = false;
        })
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}