class AdminOfflineCoursesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/offline-courses');
    }
}

DI.register({
    class: AdminOfflineCoursesService,
    alias: 'adminOfflineCoursesService',
});