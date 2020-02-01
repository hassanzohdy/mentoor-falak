class ProjectMeetingsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/meetings');
    }
}

DI.register({
    class: ProjectMeetingsService,
    alias: 'projectMeetingsService',
});