class CourseDetailsPage {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(coursesService, router, user, meta, db, courseCouponsService) {
    this.name = "course-details";
    this.title = trans("course-details");

    this.db = db;
    this.meta = meta;
    this.user = user;
    this.router = router;
    this.coursesService = coursesService;
    this.courseCouponsService = courseCouponsService;
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.isLoading = true;

    this.couponError = false;

    let id = this.router.params.id;

    this.couponCode = this.router.queryString.get('coupon');

    this.coursesService.increaseViews(id);

    this.db.get(`course-${id}`, e => {
      return this.coursesService.get(id);
    }, this.db.recache).then(response => {
      this.isLoading = false;

      this.setCourse(response.record);
    });
  }

  setCourse(course) {
    this.course = course;
    if (!this.course.completedVideos) {
      this.course.completedVideos = [];
    }

    this.coursePrice = this.course.price;

    this.currentOpenedSection = this.course.isSubscribed !== true ? this.course.sections[0].id : null;

    // the completed videos by section
    this.updateCompletedVideosInSections();

    this.course.sections = collect(this.course.sections).sortBy('order').toArray();

    this.course.isAuthor = this.course.createdBy.id == this.user.id;

    this.course.isAccessible = this.course.isSubscribed || this.course.createdBy.id == this.user.id;

    this.meta.setTitle(this.course.title)
      .setDescription(this.course.shortDescription || '')
      .setImage(this.course.image);
  }

  updateCompletedVideosInSections() {
    this.currentOpenedSection = null;
    let completedSections = 0;
    let totalWatchedTime = 0;

    let courseCompletedVideos = {
      all: [],
      completed: [],
      completedPercentage: 0,
    };

    for (let section of this.course.sections) {
      let sectionVideos = (section.videos || []);
      let sectionVideosIds = [];

      for (let video of sectionVideos) {
        sectionVideosIds.push(video.id);

        if (video.duration) {
          totalWatchedTime += video.duration.length;
        }
      }

      courseCompletedVideos.all = courseCompletedVideos.all.concat(sectionVideosIds);

      const completedVideos = this.course.completedVideos.filter(videoId => sectionVideosIds.includes(videoId));

      courseCompletedVideos.completed = courseCompletedVideos.completed.concat(completedVideos);

      section.completedVideos = {
        all: sectionVideos.length,
        completed: completedVideos.length,
        completedPercentage: sectionVideos.length == 0 ? 0 :  
                            Math.ceil(completedVideos.length * 100 / sectionVideos.length),
      };

      if (section.completedVideos.completedPercentage == 100) {
        completedSections++;
      }

      if (!this.currentOpenedSection && section.completedVideos.completedPercentage < 100 && section.videos.length > 0) {
        this.currentOpenedSection = section.id;
      }
    }

    courseCompletedVideos.completedPercentage = Math.ceil(courseCompletedVideos.completed.length * 100 / courseCompletedVideos.all.length);

    this.course.completedVideosProgress = courseCompletedVideos;

    this.course.completedSections = completedSections;
    this.course.totalWatchedTime = secondsToHms(totalWatchedTime);

    this.db.set(`course-${this.course.id}`, { record: this.course });
  }

  completedVideoProgressColor(completedProgress) {
    if (completedProgress.completedPercentage <= 25) {
      return 'pink';
    }

    if (completedProgress.completedPercentage <= 50) {
      return 'orange';
    }

    if (completedProgress.completedPercentage < 100) {
      return 'blue';
    }

    return 'green'; // 100%
  }

  async applyCoupon(code) {
    this.isApplying = true;

    try {
      this.removeCouponError();
      let { record } = await this.courseCouponsService.apply(
        this.course.id,
        code
      );

      this.discount = record.discount;
      this.amountOfDiscount = Math.floor(this.course.price * this.discount) / 100;
      this.priceAfterDiscount = this.course.price - this.amountOfDiscount;
      this.isApplying = false;
      // this.couponCode = "";
      this.coursePrice = this.priceAfterDiscount;
      this.couponId = record.id;
    } catch (err) {
      this.couponError = err.error;

      this.isApplying = false;
    }
  }

  removeCouponError() {
    this.couponError = null;
  }

  subscribeToCourse() {
    if (!this.user.isLoggedIn()) {
      this.router.navigateTo("/login");
      return;
    }

    if (this.user.gold < Number(this.coursePrice)) {
      playAudio(Sounds.NOT_ENOUGH_GOLD_RANDOM());
      alert("You don't have enough gold");
      return;
    }

    this.isSubscribing = true;
    this.removeCouponError();
    this.coursesService
      .applyToCourse(this.course.id, this.couponId)
      .then(response => {
        playAudio(Sounds.PAY_COINS);
        this.user.update("gold", response.user.gold);
        this.isSubscribing = false;
        this.setCourse(response.record);
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
    if (section.duration)
      return `${section.title}  (${section.duration.hours} hours ${
        section.duration.minutes
        } minutes) ${this.getRightSectionVideosCountPrefix(section)}`;
    else return `${section.title}`;
  }

  getRightSectionVideosCountPrefix(section) {
    if (!this.course.isAccessible) {
      return section.videos.length == 1 ? '1 Video' : section.videos.length + ' Videos';
    }

    return `(${section.completedVideos.completed}/${section.completedVideos.all})`;
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
  ready() { }
}
