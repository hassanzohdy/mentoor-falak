class CourseDetailsPage {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(coursesService, router, user, courseCouponsService) {
    this.name = "course-details";
    this.title = trans("course-details");

    this.coursesService = coursesService;
    this.courseCouponsService = courseCouponsService;

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

  async applyCoupon(code) {
    this.isApplying = true;

    try {
      let { record } = await this.courseCouponsService.apply(
        this.course.id,
        code
      );
      this.course.price = (this.course.price * record.discount) / 100;
      this.isApplying = false;
      this.couponCode = '';
      this.couponId = record.id;
    } catch (err) {
      this.couponError = err.error

      this.isApplying = false;

      setTimeout(() => {
        this.couponError = null;
      }, 5000)
    }
  }

  subscribeToCourse() {
    if (!this.user.isLoggedIn()) {
      this.router.navigateTo("/login");
      return;
    }
    if (this.user.gold < Number(this.course.price)) {
      playAudio(Sounds.NOT_ENOUGH_GOLD_RANDOM());
      alert("You don't have enough gold");
      return;
    }

    this.isSubscribing = true;
    this.coursesService
      .applyToCourse(this.course.id, this.couponId)
      .then(response => {
        playAudio(Sounds.PAY_COINS);
        this.user.update("gold", response.user.gold);
        this.course = response.record;
        this.isSubscribing = false;
      })
      .catch(response => {
        this.errorMessage = response.error;
        this.isSubscribing = false;
      });
  }

  getTotalNumberOfCourseVideos() {
    let videosNumber = 0;

    for (let section of this.course.sections) {
      videosNumber += this.getTotalNumberOfSectionVideos(section);
    }

    return videosNumber !== 1
      ? videosNumber + " videos"
      : videosNumber + " video";
  }

  getTotalNumberOfSectionVideos(section) {
    return section.videos.length;
  }

  renderSectionTitle(section) {
    return `${section.title}  (${section.duration.hours} hours ${
      section.duration.minutes
    } minutes) - ${this.getRightSectionVideosCountPrefix(section)}`;
  }

  getRightSectionVideosCountPrefix(section) {
    return this.getTotalNumberOfSectionVideos(section) != 1
      ? " videos"
      : " video";
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
