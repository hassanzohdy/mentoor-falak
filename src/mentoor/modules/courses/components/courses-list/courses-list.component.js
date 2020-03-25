class CoursesList {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(coursesService, db) {
    this.coursesService = coursesService;
    this.db = db;
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    // this.coursesList = this.prop("courses");
    // this.isLoading = this.prop("loading");

    this.isLoading = true;

    this.coursesService.list().then(response => {
      this.coursesList = response.records;
      this.isLoading = false;
    });
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {}
}
