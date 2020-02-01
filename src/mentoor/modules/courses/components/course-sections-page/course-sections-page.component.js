class CourseSectionsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, coursesService, courseSectionsService) {
        this.user = user;
        this.router = router;
        this.coursesService = coursesService;
        this.courseSectionsService = courseSectionsService;
        this.name = 'course-sections';
        this.title = trans('course-sections');
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;
        try {
            let { record: course } = await this.coursesService.get(this.router.params.id);
            this.course = course;
            if (this.course.createdBy.id != this.user.id) {
                return this.router.navigateTo('/404');
            }

            this.isLoading = false;
        } catch (error) {
            console.log(error);
            
            this.router.navigateTo('/404');
        }
    }

    removeSection() {
        this.courseSectionsService.delete(this.currentSection.id);

        this.course.sections.splice(this.index, 1);
    }
}