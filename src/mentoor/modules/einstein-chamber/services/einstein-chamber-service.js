class EinsteinChamberService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/einstein-chamber');
    }

    /**
     * Unlock the chamber for current user
     * 
     * @returns Promise
     */
    unlock() {
        return this.endpoint.get(this.path('/unlock'));
    }

    /**
     * Get einstein chamber shop 
     * 
     * @returns Promise
     */
    shop() {
        return this.endpoint.get(this.path('/shop'));
    }

    /**
     * Unlock the given category id
     * 
     * @param {int} categoryId 
     * @returns Promise
     */
    purchase(categoryId) {
        return this.endpoint.post(this.path('/purchase'), {
            categoryId
        });
    }

    /**
     * Answer the given puzzle id 
     * 
     * @param   int puzzleId
     * @param   mixed form
     * @returns Promise
     */
    answerPuzzle(puzzleId, form) {
        return this.endpoint.post(this.path('/puzzle/' + puzzleId + '/answer'), form);
    }

    /**
     * Get current puzzle
     * 
     * @returns Promise 
     */
    getCurrentPuzzle() {
        return this.endpoint.get(this.path('/puzzle'));
    }

    /**
     * Get puzzle by id
     * 
     * @param   int puzzleId 
     * @returns Promise 
     */
    getPuzzle(puzzleId) {
        return this.endpoint.get(this.path('/puzzles/' + puzzleId));
    }

    /**
     * Get puzzle answers
     * 
     * @param   int puzzleId 
     * @returns Promise 
     */
    getPuzzleAnswers(puzzleId) {
        return this.endpoint.get(this.path('/puzzles/' + puzzleId + '/answers'));
    }
}

DI.register({
    class: EinsteinChamberService,
    alias: 'einsteinChamberService',
});