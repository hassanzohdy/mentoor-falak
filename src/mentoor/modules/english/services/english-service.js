class EnglishService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/english');
    }

    /**
     * Unlock the given category id for user
     * 
     * @param  int categoryId
     * @return Promise
     */
    purchase(categoryId) {
        return this.endpoint.patch(this.path(`/purchase/${categoryId}`));
    }

    /**
     * Get top participants
     * 
     * @returns Promise
     */
    topParticipants() {
        return this.endpoint.get(this.path('/top-participants'));
    }
}

DI.register({
    class: EnglishService,
    alias: 'englishService',
});