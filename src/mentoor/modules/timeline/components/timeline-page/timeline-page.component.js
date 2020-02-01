class TimelinePage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, postsService) {
        this.user = user;
        this.name = 'timeline';
        
        this.postsService = postsService;
        this.title = this.siteName = trans('site-name');
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {        
        this.isLoading = true;

        let { records: posts } = await this.postsService.list();

        this.posts = collect(posts).sortByDesc('id').toArray();

        this.isLoading = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}