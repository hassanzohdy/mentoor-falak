class CoursesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/courses');
    }
}

DI.register({
    class: CoursesService,
    alias: 'coursesService',
});