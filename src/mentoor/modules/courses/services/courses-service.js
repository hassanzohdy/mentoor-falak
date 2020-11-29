class CoursesService extends Endpoint.Service {
  // @macro(increaseViews)
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

  orderSections(id, sectionsWithOrder) {
    return this.endpoint.post(this.path(`/${id}/reorder-sections`), {sections: sectionsWithOrder});
  }
}

DI.register({
  class: CoursesService,
  alias: "coursesService"
});