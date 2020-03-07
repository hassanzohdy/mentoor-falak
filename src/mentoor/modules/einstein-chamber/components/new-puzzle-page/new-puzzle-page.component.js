class NewPuzzlePage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, adminEinsteinPuzzlesService, einsteinCategoriesService) {
        this.name = 'new-puzzle';
        this.title = trans('new-puzzle');

        this.router = router;

        this.adminEinsteinPuzzlesService = adminEinsteinPuzzlesService;

        this.einsteinCategoriesService = einsteinCategoriesService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.levelItems = [
            { text: "Beginner", value: "beginner" },
            { text: "Intermediate", value: "intermediate" },
            { text: "Advanced", value: "advanced" }
        ];

        this.isSending = false;
    }

    createChallenge(form) {
        this.isSending = true;

        this.adminEinsteinPuzzlesService.create(form).then(() => {
            this.router.navigateTo('/einstein-chamber/shop');
        }).catch(() => {
            this.error = 'Sorry, an error occured, please try again';

            setTimeout(() => {
                this.error = null;
            }, 3000);
        }).finally(() => {
            this.isSending = false;
        })

    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}