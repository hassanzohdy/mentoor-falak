class UserTracksPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(meService) {
        this.name = 'my-track';
        this.title = trans('my-tracks');
        this.tracks = [];
        this.meService = meService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.tracks = [];
        this.isLoading = true;
        let response = await this.meService.tracks();

        this.tracks = response.records;
        this.isLoading = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}