class CourseCouponsService extends Endpoint.Service {
  /**
   * {@inheritDoc}
   */
  boot() {
    this.setRoute("/courses/coupons");
  }

  apply(courseId, code) {
    return this.endpoint.patch(`/courses/coupons/${courseId}/${code}/apply`);
  }
}

DI.register({
  class: CourseCouponsService,
  alias: "courseCouponsService"
});
