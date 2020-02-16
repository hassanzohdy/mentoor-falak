class EinsteinChamberPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, einsteinChamberService, router) {
        this.user = user;
        this.router = router;
        this.einsteinChamberService = einsteinChamberService;
        this.name = 'einstein-chamber';
        this.title = 'Einstein Chamber';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;
        let response = await this.einsteinChamberService.getCurrentPuzzle();
        this.user.update(response.user);
        this.puzzle = response.puzzle;

        this.isLoading = false
    }
}