class PostPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(meta, user, router, postsService) {
        this.meta = meta;
        this.user = user;
        this.router = router;
        this.postsService = postsService;
        this.name = 'post';
        this.title = trans('site-name');
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        this.postId = this.router.params.id;

        let { record } = await this.postsService.get(this.postId);

        this.post = record;

        this.meta.setTitle(`${this.post.title}`)
            .setDescription(this.post.content.split('\n').slice(0, 20).join('\n'));

        if (this.post.image) {
            this.meta.setImage(this.post.image);
        }

        this.isLoading = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}