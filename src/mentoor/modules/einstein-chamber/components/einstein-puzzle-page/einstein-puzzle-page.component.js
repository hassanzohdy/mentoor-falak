class EinsteinPuzzlePage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(meta, user, cache, router, einsteinChamberService, tagsService) {
        this.meta = meta;
        this.user = user;
        this.cache = cache;
        this.router = router;
        this.einsteinChamberService = einsteinChamberService;
        this.name = 'einstein-puzzle';
        this.title = 'Einstein puzzle';

        this.tagsService = tagsService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.puzzleId = this.router.params.puzzleId;

        this.isLoading = true;
        this.startQuest = false;
        this.isValidForm = true;
        this.hideForm = false;

        this.answerData = this.cache.get(this.answerCacheKey) || '';

        this.errors = {
            answer: null,
        };

        this.puzzle = this.user.einsteinChamber ? this.user.einsteinChamber.currentPuzzle : null;

        if (this.puzzle && this.puzzle.id == this.puzzleId) {
            this.isLoading = false;
            this.answerCacheKey = `e-puzzle.${this.puzzle.id}`; // e >> einstein
            if (this.user.einsteinChamber.currentPuzzleCategory) {
                this.puzzle.category = this.user.einsteinChamber.currentPuzzleCategory;
            }
        }
        try {
            let response = await this.einsteinChamberService.getPuzzle(this.puzzleId);
            this.isLoading = false;
            this.puzzle = response.puzzle;
            if (this.puzzle.answer) {
                this.answerData = this.puzzle.answer;
            }
            this.meta.setTitle(`[${this.puzzle.category.name}] ${this.puzzle.title} - Einstein Chamber`)
                .setDescription(this.puzzle.quest.split("\n")[0] + ', Can you solve it?')
                .setImage(this.puzzle.category.image);
        } catch (e) {
            echo(e);
            if (e.error) {
                return this.router.navigateTo('/einstein-chamber');
            }
            throw new Error(e);
        }
    }

    getProperBadge(status) {
        return {
            'badge-warning': status == 'pending',
            'badge-success': status == 'approved',
            'badge-danger': status == 'rejected',
        };
    }

    /**
     * Submit the answer of the puzzle
     * 
     * @param   {HTMLFormElement} form
     * @returns void
     */
    async submitAnswer(form) {
        if (confirm('Are you sure you want to submit your answer?') === false) return;

        this.isSending = true;

        this.puzzle.status = 'pending';

        this.hideForm = true;

        try {
            this.cache.remove(this.answerCacheKey);
            this.answerData = '';
            let response = await this.einsteinChamberService.answerPuzzle(this.puzzle.id, form);
            this.startQuest = false;

            this.user.update(response.user);
            this.puzzle = response.puzzle;
            this.isSending = false;
        } catch (response) {
            echo(response);
            this.isSending = false;
        }
    }

    /**
     * Store the user's answer while writing so he/she can get back to it later on    
     *    
     * @param  string answer
     * @returns void   
     */
    storeAnswer(answer) {
        this.cache.set(this.answerCacheKey, answer);
    }
}