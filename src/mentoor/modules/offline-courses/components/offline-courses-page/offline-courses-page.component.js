class OfflineCoursesPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(offlineCoursesService, shareable) {
        this.name = 'offline-courses';
        this.title = trans('Offline courses');
        this.shareable = shareable;
        this.coursesService = offlineCoursesService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;
        this.courses = [];
        let response = await this.coursesService.list();

        this.courses = response.records;

        this.shareCourses();

        this.isLoading = false;
    }

    /**
     * Share courses using the shareable package so we won't make the user wait to get response from back end
     */
    shareCourses() {
        for (let course of this.courses) {
            this.shareable.share('offline-course-' + course.id, course);
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}