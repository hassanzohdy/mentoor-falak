class CoursesService extends Endpoint.Service {
  /**
   * {@inheritDoc}
   */
  boot() {
    this.setRoute("/courses");
  }

  applyToCourse(courseID, couponId) {
    return this.endpoint.post(this.path("/" + courseID + "/subscribe"), {
      couponId
    });
  }
}

DI.register({
  class: CoursesService,
  alias: "coursesService"
});
