class CourseCouponsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/courses/coupons');
    }
}

DI.register({
    class: CourseCouponsService,
    alias: 'courseCouponsService',
});