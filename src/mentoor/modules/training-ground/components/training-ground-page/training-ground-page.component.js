class TrainingGroundPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, trainingGroundService, meService) {
        this.user = user;
        this.router = router;
        this.meService = meService;
        this.trainingGroundService = trainingGroundService;
        this.name = 'training-ground';
        this.title = 'Training ground';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.cocktails = [];
        this.isLoading = true;
        this.autoOpenCocktailsModal = false;
        this.isEmptyCocktails = this.user.trainingGround && Is.empty(this.user.trainingGround.cocktailsIds);

        if (this.isEmptyCocktails) {
            this.autoOpenCocktailsModal = true;
        } else {
            this.loadTrainingGrounds();
        }
    }

    unlockedCocktail(cocktail) {
        this.loadTrainingGrounds();
    }

    async loadTrainingGrounds() {
        let response = await this.meService.trainingGroundsList();

        this.trainingGrounds = response.trainingGrounds;

        this.isLoading = false;

        this.isEmptyCocktails = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}