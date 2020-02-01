class AdminPostsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/posts');
    }
}

DI.register({
    class: AdminPostsService,
    alias: 'adminPostsService',
});