class TimelineService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/timeline');
    }
}

DI.register({
    class: TimelineService,
    alias: 'timelineService',
});