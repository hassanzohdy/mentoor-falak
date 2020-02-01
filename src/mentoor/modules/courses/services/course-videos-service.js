class CourseVideosService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/courses/videos');
    }
}

DI.register({
    class: CourseVideosService,
    alias: 'courseVideosService',
});