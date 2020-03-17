class CourseDetailsPage {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(coursesService, router, user) {
    this.name = "course-details";
    this.title = trans("course-details");

    this.coursesService = coursesService;

    this.router = router;
    this.user = user;
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.isLoading = true;

    let id = this.router.params.id;
    this.coursesService.get(id).then(response => {
      this.course = response.record;
      this.isLoading = false;
    });
  }

  formatDuration(duration) {
    let hoursDur;
    if (duration.minutes > 60) {
      hoursDur = `${Math.floor(duration.minutes / 60)}`;

      return `${hoursDur} hours ${duration.minutes % 60} minutes`;
    }

    return `${duration.minutes} minutes`;
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {}
}
