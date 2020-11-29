class PostPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(db, meta, user, router, shareable, postsService) {
        this.db = db;
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

        this.postsService.increaseViews(this.postId);

        if (this.shareable.isSharing(this.postSharedKey)) {
            this.setPost(this.shareable.getShared(this.postSharedKey))
        } else {
            this.isLoading = true;
        }

        this.db.get(`post.${this.postId}`, e => {
            return this.postsService.get(this.postId);
        }, this.db.recache).then(response => {
            let { record } = response;

            this.setPost(record);
        });
    }

    setPost(record) {
        this.post = record;

        this.db.set(`post.${this.postId}`, {record});

        let series = '';

        if (this.post.series && this.post.series.name) {
            series = `[${this.post.series.name}]`;
        }

        this.meta.setTitle(`${series}${this.post.title}`)
            .setDescription(this.post.content.readMoreChars(255, ''));

        if (this.post.image) {
            this.meta.setImage(this.post.image);
        }

        this.postSeries = [];

        if (this.post.seriesList) {
            let seriesList = Array.clone(this.post.seriesList)

            seriesList.push(this.post);

            this.postSeries = seriesList.sort((postA, postB) => {
                let sortA = Number(postA.series.sort),
                    sortB = Number(postB.series.sort),
                    idA = Number(postA.id),
                    idB = Number(postB.id),
                    returnAFirst = -1,
                    returnBFirst = 1,
                    returnSame = 0;

                if (sortA < sortB) {
                    return returnAFirst;
                } else if (sortA > sortB) {
                    return returnBFirst;
                } else {
                    if (idA < idB) {
                        return returnAFirst;
                    } else if (idA > idB) {
                        return returnBFirst;
                    } else {
                        return returnSame;
                    }
                }
            });

            this.post.seriesList.map(post => {
                this.db.set(`post-${post.id}`, post);
            });
        }

        this.isLoading = false;

        this.shareable.share(this.postSharedKey, this.post);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}