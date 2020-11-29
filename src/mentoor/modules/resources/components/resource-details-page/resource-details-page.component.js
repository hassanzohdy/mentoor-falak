class ResourceDetailsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(db, meta, router, user, shareable, resourcesService) {
        this.db = db;
        this.meta = meta;
        this.user = user;
        this.router = router;
        this.shareable = shareable;
        this.resourcesService = resourcesService;
        this.name = 'resource-details';
        this.title = trans('resource-details');
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        this.resource = null;

        try {
            // this.db.get(`resource-${this.router.params.id}`, e => {
            //     return this.resourcesService.get(this.router.params.id);
            // }, this.db.recache).then(response => {
            this.resourcesService.get(this.router.params.id).then(response => {
                let { record: resource } = response;

                this.resource = resource;

                // if (resource.project) {
                //     this.shareable.share('project', resource.project);
                // }

                this.meta.setTitle(`[Resource] ${this.resource.title} | ${this.resource.project.name}`);

                if (this.resource.project.image) {
                    this.meta.setImage(this.resource.project.image);
                }

                this.isLoading = false;
            });
        } catch (error) {
            if (error && error.status) {
                this.router.navigateTo('/404');
            }
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}