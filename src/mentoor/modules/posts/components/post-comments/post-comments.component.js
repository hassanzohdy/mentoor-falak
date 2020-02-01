class PostComments {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, postsService) {
        this.user = user;
        this.postsService = postsService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.post = this.inputs.getProp('post');
        this.maxComments = this.inputs.getProp('max');
        this.setCommentsList(this.post.comments);

        this.comment = '';
        this.isPostingComment = false;
        this.isLoadingComments = false;
    }

    setCommentsList(comments) {
        this.originalComments = comments;

        this.comments = this.maxComments ? this.originalComments.slice(0, this.maxComments) : this.originalComments;
    }

    loadMoreComments() {
        this.comments = this.comments.concat(this.originalComments.slice(this.comments.length, this.comments.length + this.maxComments));
    }

    async setComment(input, e) {
        // if (e.keyCode != 13) return;

        // let totalLines = input.value.trim() ? input.value.trim().split('\n').length : 0;
        let totalLines = input.value ? input.value.split('\n').length : 0;
        if (!input.originalHeight) {
            input.originalHeight = input.offsetHeight;
        }

        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
            this.isPostingComment = true;
            input.style.height = input.originalHeight + 'px';
            let comment = this.comment;
            this.comment = '';
            let response = await this.postsService.postComment(this.post.id, {
                comment: comment,
            });

            let newComment = Array.end(response.post.comments);

            this.post = response.post;
            this.isPostingComment = false;
            this.originalComments.push(newComment);
            this.comments.push(newComment);
            // this.setCommentsList(this.post.comments);
            return;
        }

        let height = totalLines > 1 ? totalLines * 20 : 0;

        // if the user presses the shift key with the enter, then go one more line
        // if (e.shiftKey) {
        // }
        let originalHeight = input.originalHeight;
        input.style.height = (originalHeight + height) + 'px';
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}