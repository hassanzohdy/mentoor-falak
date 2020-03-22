class CourseDashboardPage {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(
    user,
    router,
    coursesService,
    courseVideosService,
    courseCouponsService,
    courseSectionsService
  ) {
    this.user = user;
    this.router = router;
    this.coursesService = coursesService;
    this.courseSectionsService = courseSectionsService;
    this.courseCouponsService = courseCouponsService;
    this.courseVideosService = courseVideosService;
    this.name = "course-sections";
    this.title = trans("course-sections");
  }

  async deleteVideo(id, section) {
    let video = section.videos.find(video => {
      return video.id === id;
    });
    let videoIndex = section.videos.indexOf(video);

    try {
      let response = await this.courseVideosService.delete(id);
      console.log(videoIndex);
      if (response.body.success) {
        section.videos.splice(videoIndex, 1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  async init() {
    this.isLoading = true;
    try {
      let { record: course } = await this.coursesService.get(
        this.router.params.id
      );
      this.course = course;
      if (this.course.createdBy.id != this.user.id) {
        return this.router.navigateTo("/404");
      }

      this.isLoading = false;
    } catch (error) {
      console.log(error);

      this.router.navigateTo("/404");
    }
  }

  async removeCourse() {
    try {
      let response = await this.coursesService.delete(this.router.params.id);

      if (response.body.success) {
        this.router.navigateTo("/courses");
      }
    } catch (error) {
      console.log(error);
      this.router.navigateTo("/404");
    }
  }

  removeSection() {
    this.courseSectionsService.delete(this.currentSection.id);

    this.course.sections.splice(this.index, 1);
  }

  removeCoupon(id) {
    this.courseCouponsService.delete(id);

    this.course.coupons.splice(this.index, 1);
  }
}
