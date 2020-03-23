class CourseCouponForm {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(courseCouponsService, router, usersService) {
    this.videoTypes = ["video", "youtubeUrl", "file"];
    this.courseCouponsService = courseCouponsService;
    this.usersService = usersService;

    this.router = router;
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.course = this.prop("course");
    this.coupon = this.prop("coupon", {});

    this.heading =
      this.coupon && this.coupon.id ? "Edit coupon" : "Add New coupon";
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  async submit(form) {
    // this.isSending = true;

    let coupon;

    if (this.coupon.id) {
      let { record } = await this.courseCouponsService.update(
        this.coupon.id,
        form
      );
      // this.isSending = false;

      coupon = record;

      this.couponId = coupon.id;
    } else {
      try {
        let { record } = await this.courseCouponsService.create(form);
        // this.isSending = false;

        coupon = record;

        this.couponId = coupon.id;
      } catch (err) {
        console.log(err);
        this.error = err;
      }
    }

    this.event("save")(coupon);
    this.event("close")();
  }
}
