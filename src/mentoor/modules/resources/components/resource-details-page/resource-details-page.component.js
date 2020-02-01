class ResourceDetailsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(meta, router, user, resourcesService) {
        this.meta = meta;
        this.user = user;
        this.router = router;
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
            let {record: resource} = await this.resourcesService.get(this.router.params.id);            

            this.resource = resource;

            this.meta.setTitle(this.resource.title);

            this.isLoading = false;
        } catch (error) {
            if (error && error.status) {
                this.router.navigateTo('/404');
            }
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}