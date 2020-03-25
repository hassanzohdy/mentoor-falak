class TimelinePage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, shareable, postsService) {
        this.user = user;
        this.shareable = shareable;
        this.postsService = postsService;
        this.name = 'timeline';
        this.title = this.siteName = trans('site-name');
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {        
        this.isLoading = Is.empty(this.posts);

        let { records: posts } = await this.postsService.list();

        this.posts = collect(posts).sortByDesc('id').toArray();

        this.shareable.shareMany('posts', this.posts);

        this.isLoading = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}