class EinsteinPuzzleAnswersPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, meta, router, einsteinChamberService) {
        this.user = user;
        this.meta = meta;
        this.router = router;
        this.einsteinChamberService = einsteinChamberService;
        this.name = 'einstein-puzzle-answers';
        this.title = 'Einstein puzzle answers';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.hasSomethingWentWrong = false;
        this.isLoading = true;

        this.puzzleId = this.router.params.puzzleId;

        let response = await this.einsteinChamberService.getPuzzleAnswers(this.puzzleId);

        this.isLoading = false;

        this.puzzle = response.puzzle;

        if (! this.puzzle) {
            this.hasSomethingWentWrong = 'Not found puzzle';
            return;
        }

        this.meta.setTitle(`[${this.puzzle.category.name}] ${this.puzzle.title} - Einstein Chamber`)
            .setDescription(this.puzzle.quest.split("\n")[0] + ', Can you solve it?')
            .setImage(this.puzzle.category.image);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}