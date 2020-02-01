class OfflineCourseDetailsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(meta, router, offlineCoursesService, user, shareable) {
        this.meta = meta;
        this.user = user;
        this.router = router;
        this.shareable = shareable;
        this.coursesService = offlineCoursesService;

        this.name = 'offline-course';
        this.title = 'Offline course';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.errors = {};
        this.isValidForm = true;
        this.isSubmittingTopicSuggestion = false;
        this.topicSuggestionHasBeenSent = false;
        this.totalAnsweredTopics = 0;
        this.suggestTopic = false;
        this.disableBtn = false;
        this.myTopicsList = {}; // to get topic answer from it for current user
        this.course = {};
        let courseId = this.router.params.id;

        if (this.shareable.isSharing('offline-course-' + courseId)) {
            this.setCourse(this.shareable.getShared('offline-course-' + courseId));
        }

        this.isSubscribing = false;
        let { record: course } = await this.coursesService.get(courseId);

        this.setCourse(course);
    }

    /**
     * Set the given course 
     * 
     * @param {object} course 
     */
    setCourse(course) {
        this.course = course;
        this.shareable.share('offline-course-' + course.id, course);

        this.meta.setTitle(this.course.name)
            .setDescription(this.course.description)
            .setImage(this.course.image);
    }

    subscribeToCourse() {
        if (!this.user.isLoggedIn()) {
            this.router.navigateTo('/login');
            return;
        }

        if (confirm(trans('subscribe-to-course', this.course.name))) {
            let mobile = this.user.mobile;
            if (!this.user.mobile) {
                mobile = prompt('Please write your mobile number.');

                if (!Is.mobileNumber.eg(mobile)) {
                    return alert('Invalid mobile number');
                }

                this.user.update('mobile', mobile);
            }

            this.isSubscribing = true;

            this.coursesService.subscribeTo(this.course.id, mobile).then(response => {
                this.isSubscribing = false;
                this.setCourse(response.record);
            }).catch(e => {
                this.isSubscribing = false;
            });
        }
    }
}