class CourseSectionForm {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(courseSectionsService) {
        this.courseSectionsService = courseSectionsService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.course = this.prop('course');
        this.section = this.prop('section', {});

        this.heading = this.section.id ? 'Edit ' + this.section.title : 'Add New Section';
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    async submit(form) {
        this.isSending = true;

        let section;

        if (this.section.id) {
            let { record } = await this.courseSectionsService.update(this.section.id, form);

            section = record;
        } else {
            let { record } = await this.courseSectionsService.create(form);

            section = record;
        }

        this.event('save')(section);

        this.modal.close();
    }
}