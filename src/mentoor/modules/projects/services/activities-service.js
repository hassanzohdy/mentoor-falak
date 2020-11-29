class ActivitiesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/activities');
    }
}

DI.register({
    class: ActivitiesService,
    alias: 'activitiesService',
});