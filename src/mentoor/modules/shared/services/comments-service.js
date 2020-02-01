class CommentsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/comments');
    }
}

DI.register({
    class: CommentsService,
    alias: 'commentsService',
});