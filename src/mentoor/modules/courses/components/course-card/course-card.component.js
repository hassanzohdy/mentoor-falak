class CourseCard {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor() {}

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.course = this.prop("course");
  }

  getTotalNumberOfCourseVideos() {
    let videosNumber = 0;

    for (let section of this.course.sections) {
      videosNumber += this.getTotalNumberOfSectionVideos(section);
    }

    return videosNumber;
  }

  getTotalNumberOfSectionVideos(section) {
    return section.videos.length;
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {}
}
