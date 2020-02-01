class OfflineCoursesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/offline-courses');
    }

    /**
     * Subscribe to the given course id
     * Also provide the mobile number of the user
     * 
     * @param   int courseId
     * @param   mixed mobile
     * @returns Promise
     */
    subscribeTo(courseId, mobile) {
        return this.endpoint.put(this.path(courseId + '/subscribe'), {mobile});
    } 
}

DI.register({
    class: OfflineCoursesService,
    alias: 'offlineCoursesService',
});