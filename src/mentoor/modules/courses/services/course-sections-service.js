class CourseSectionsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/courses/sections');
    }
}

DI.register({
    class: CourseSectionsService,
    alias: 'courseSectionsService',
});