class PostsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/posts');
    }

    /**
     * Add new comment to the given post id
     * 
     * @param   {number} postId
     * @param   {any} data
     * @returns Promise 
     */
    postComment(postId, data) {
        return this.endpoint.post(this.path(`/${postId}/comments`), data);
    }
}

DI.register({
    class: PostsService,
    alias: 'postsService',
});