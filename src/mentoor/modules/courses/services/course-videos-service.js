class CourseVideosService extends Endpoint.Service {
    // @macro(increaseViews)
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/courses/videos');
    }

    markAsWatched(courseId, courseVideoId) {
        return this.endpoint.patch(this.path(`/${courseId}/${courseVideoId}/mark-as-watched`));
    }

    order(videosList) {
        return this.endpoint.patch(this.path(`/order`), {
            videos: videosList
        });
    }
}

DI.register({
    class: CourseVideosService,
    alias: 'courseVideosService',
});