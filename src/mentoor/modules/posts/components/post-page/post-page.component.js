class PostPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(meta, user, router, shareable, postsService) {
        this.meta = meta;
        this.user = user;
        this.router = router;
        this.shareable = shareable;
        this.postsService = postsService;
        this.name = 'post';
        this.title = trans('site-name');
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.postId = this.router.params.id;

        this.postSharedKey = 'posts.' + this.postId;

        if (this.shareable.isSharing(this.postSharedKey)) {
            this.setPost(this.shareable.getShared(this.postSharedKey))
        } else {
            this.isLoading = true;
        }

        let { record } = await this.postsService.get(this.postId);

        this.setPost(record);
    }

    setPost(record) {
        this.post = record;

        this.meta.setTitle(`${this.post.title}`)
            .setDescription(this.post.content.split('\n').slice(0, 20).join('\n'));

        if (this.post.image) {
            this.meta.setImage(this.post.image);
        }

        this.isLoading = false;

        this.shareable.share(this.postSharedKey, this.post);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}