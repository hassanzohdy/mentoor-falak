class TopicService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/academy/tracks');
    }

    getTopic(trackSlug,topicSlug) {
        return this.endpoint.get(this.path(`/${trackSlug}/topics/${topicSlug}`))
    }

    applyAnswer(topicId, answer) {
        return this.endpoint.post(this.path(`/topics/${topicId}/answer`), answer)
    }

    editAnswer(answerId, answer) {
        return this.endpoint.put(this.path(`/answers/${answerId}`), answer)
    }
}

DI.register({
    class: TopicService,
    alias: 'topicService',
});