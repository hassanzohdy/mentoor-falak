class CourseVideoForm {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(courseVideosService, router) {
    this.videoTypes = ["video", "youtubeUrl", "file"];
    this.courseVideosService = courseVideosService;

    this.router = router;
  }

  calculateYoutubeDuration(youtubeUrl) {
    let videoId = youtubeId(youtubeUrl);
    if ( ! videoId) {
      return this.form.formHandler.addError('url', null, 'Invalid Url');
    }

    this.form.formHandler.removeError('url');

    let player = new YT.Player('youtube-player', {
      height: '390',
      width: '640',
      videoId: videoId,
      events: {
        'onReady': this.onPlayerReady.bind(this),
      }
    });
  }

  onPlayerReady(event) {
    if (! event.target) return;
    this.video.duration = secondsToHms(event.target.getDuration());
  }


  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.course = this.prop("course");
    this.section = this.prop("section");
    this.video = this.prop("video", {
      type: "youtubeUrl",
      published: true,
      duration: {
        minutes: 0,
        seconds: 0
      }
    });

    this.heading = this.video.id ? "Edit " + this.video.title : "Add New Video";
  }

  calculateVideoLength() {
    this.video.duration.length =
      Number(this.video.duration.hours) * 3600 +
      Number(this.video.duration.minutes) * 60 +
      Number(this.video.duration.seconds);
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  async submit(form) {
    // this.isSending = true;

    let video;

    if (this.video.id) {
      let { record } = await this.courseVideosService.update(
        this.video.id,
        form
      );

      video = record;
    } else {
      let { record } = await this.courseVideosService.create(form);

      video = record;
    }

    this.event("save")(video);
    this.event("close")();
  }
}
