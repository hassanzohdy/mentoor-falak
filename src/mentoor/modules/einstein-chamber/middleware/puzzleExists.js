class PuzzleExistsMiddleware {
    /**
     * Constructor
     * Define your required dependencies in the constructor params 
     */
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    
    /**
     * {@inheritDoc}
     */
    name() {
        return 'puzzleExists';
    }

    /**
     * {@inheritDoc}
     */
    handle() {
        let puzzle = this.user.einsteinChamber ? this.user.einsteinChamber.currentPuzzle : null;

        if (puzzle) {
            return this.router.navigateTo(`/einstein-chamber/puzzles/${puzzle.id}`);
        }

        return Middleware.NEXT;
    }
}

DI.register({
    class: PuzzleExistsMiddleware,
    alias: 'puzzleExistsMiddleware',
});