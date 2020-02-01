class ProjectSrsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-details-srs';
        this.prependName = 'SRS';
    }

    onProjectLoad() {
        this.projectSrs = this.project.srs;
        let hash = this.router.hash();

        // if the url contains hash, scroll to it
        if (hash) {
            setTimeout(() => {
                let element = document.getElementById(hash);
                if (element) {
                    scrollTo(element, this.router.scrollTopOffset, 1000);
                }
            }, 100);
        }
    }

    submit(form) {
        this.projectsService.updatePartial(this.project.id, form);

        this.project.srs = this.projectSrs;

        this.inEditMode = false;
    }
}