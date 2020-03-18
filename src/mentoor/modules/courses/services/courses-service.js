class CoursesService extends Endpoint.Service {
  /**
   * {@inheritDoc}
   */
  boot() {
    this.setRoute("/courses");
  }

  applyToCourse(courseID) {
    return this.endpoint.patch(this.path("/" + courseID + "/subscribe"));
  }
}

DI.register({
  class: CoursesService,
  alias: "coursesService"
});
