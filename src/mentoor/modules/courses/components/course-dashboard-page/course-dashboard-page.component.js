class CourseDashboardPage {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(
    db,
    user,
    router,
    coursesService,
    courseVideosService,
    courseCouponsService,
    courseSectionsService
  ) {
    this.db = db;
    this.user = user;
    this.router = router;
    this.coursesService = coursesService;
    this.courseSectionsService = courseSectionsService;
    this.courseCouponsService = courseCouponsService;
    this.courseVideosService = courseVideosService;
    this.name = "course-sections";
    this.title = trans("course-sections");

    this.controllable = true;
  }

  async deleteVideo(id, section) {
    let video = section.videos.find(video => {
      return video.id === id;
    });
    let videoIndex = section.videos.indexOf(video);

    try {
      let response = await this.courseVideosService.delete(id);
      if (response.body.success) {
        section.videos.splice(videoIndex, 1);
      }
    } catch (error) {
      console.log(error);
    }
    
    this.recache();
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  async init() {
    this.isLoading = true;
    this.db.get(`course-${this.router.params.id}`, e => {
      return this.coursesService.get(
        this.router.params.id
      );
    }, this.db.recache).then(response => {
      this.setCourse(response.record);
    });
  }


  setCourse(course) {
    this.course = course;
    this.course.isAuthor = this.course.createdBy.id == this.user.id;

    if (! this.course.completedVideos) {
      this.course.completedVideos = [];
    }

    if (!this.course.coupons) {
      this.course.coupons = [];
    }

    if (this.course.createdBy.id != this.user.id) {
      return this.router.navigateTo("/404");
    }

    if (this.course.sections) {
      this.course.sections = collect(this.course.sections).sortBy('order').toArray();
    }

    this.isLoading = false;

    if (!this.activeTab) {
      this.activeTab = "sections";
    }

    this.recache();
  }

  recache() {
    this.db.set(`course-${this.course.id}`, {
      record: this.course,
    });    
  }

  removeCourse() {
    this.coursesService.delete(this.router.params.id);
    this.router.navigateTo("/courses");

    this.db.remove(`course-${this.course.id}`);
  }

  removeSection() {
    this.courseSectionsService.delete(this.currentSection.id);

    this.course.sections.splice(this.index, 1);

    this.recache();
  }

  removeCoupon(id) {
    this.courseCouponsService.delete(id);

    this.course.coupons.splice(this.couponIndex, 1);
    this.recache();
  }


  draggableSections(sectionsContainer) {
    if (sectionsContainer.draggable) return;

    sectionsContainer.draggable = true;

    Sortable.create(sectionsContainer, {
      sort: true,
      onEnd: e => {
        let [currentSection] = this.course.sections.splice(e.oldIndex, 1);

        this.course.sections.splice(e.newIndex, 0, currentSection);

        let ordering = [];

        this.course.sections.map((section, index) => {
          ordering.push({
            id: section.id,
            order: index + 1,
          });
        });

        this.coursesService.orderSections(this.course.id, ordering).then(response => {
          this.setCourse(response.course);
        });
      },
    });
  }
}
