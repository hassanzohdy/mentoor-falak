class ProjectAttachmentsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/attachments');
    }
}

DI.register({
    class: ProjectAttachmentsService,
    alias: 'projectAttachmentsService',
});