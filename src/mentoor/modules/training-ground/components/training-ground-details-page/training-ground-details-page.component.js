class TrainingGroundDetailsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, trainingGroundService, cache) {
        this.router = router;
        this.cache = cache;
        this.trainingGroundService = trainingGroundService;
        this.name = 'training-ground-details';
        this.title = 'Training ground details';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        this.trainingGroundId = this.router.params.trainingGroundId;

        if (this.cache.get('training-ground-' + this.trainingGroundId)) {
            this.trainingGround = this.cache.get('training-ground-' + this.trainingGroundId);
            this.isLoading = false;
        }

        let { record } = await this.trainingGroundService.get(this.trainingGroundId);

        this.trainingGround = record;

        // this.cache.set('training-ground-' + this.trainingGround.id, this.trainingGround);

        this.isLoading = false;
    }

    async setGithubRepositoryUrl(url) {
        if (!Is.url(url) || !url.toLowerCase().includes('github.com')) {
            return alert('Invalid url');
        }

        this.trainingGround.repositoryUrl = url;
        this.trainingGround.status = 'pending';

        let response = await this.trainingGroundService.submitRepositoryUrl(this.trainingGround.id, { url });

        this.trainingGround = response.trainingGround;
        // this.cache.set('training-ground-' + this.trainingGround.id, this.trainingGround);
    }
}