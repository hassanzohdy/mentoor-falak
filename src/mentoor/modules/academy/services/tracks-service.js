class TracksService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/academy/tracks');
    }

    getUserTracks() {
        return this.endpoint.get('/me/academy/tracks');
    }

    getTrack(trackSlug) {
        return this.endpoint.get(this.path('/' + trackSlug));
    }

    applyToTrack(trackID) {
        return this.endpoint.get(this.path('/' + trackID + '/subscribe'));
    }

    /**
     * Suggest new topic to track
     * 
     * @param   {int} trackId
     * @param   {any} data
     * @returns Promise 
     */
    suggestTopic(trackId, data) {
        return this.endpoint.post(this.path('/' + trackId + '/suggest-topic'), data);
    }
}

DI.register({
    class: TracksService,
    alias: 'tracksService',
});