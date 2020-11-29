class NewCoursePage {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(user, router, coursesService) {
    this.user = user;
    this.router = router;
    this.coursesService = coursesService;
    this.name = "new-course";
    this.title = "Add new course";
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  async init() {
    this.isValidForm = true;

    this.data = {
      description: '',
    };

    this.errors = {};
    this.isLoadingCourse = false;

    this.phase = 1;

    if (this.router.params.id) {
      this.isLoadingCourse = true;
      let { record } = await this.coursesService.get(this.router.params.id);
      if (record.createdBy.id != this.user.id) {
        return this.router.navigateTo('/404');
      }

      
      this.isLoadingCourse = false;

      this.data = record;
    }
  }

  async submit(form) {
    this.isLoading = true;
    let { record: course } = this.data.id
                            ? await this.coursesService.update(this.data.id, form)
                            : await this.coursesService.create(form);
    
    this.isLoading = false;
    this.router.navigateTo(URLS.course(course, "dashboard"));
  }

  next() {
    this.formHandler.validate();

    if (!this.formHandler.hasErrors()) {
      this.phase++;
    }
  }

  back() {
    this.formHandler.validate();

    if (!this.formHandler.hasErrors()) {
      this.phase--;
    }
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() { }
}
