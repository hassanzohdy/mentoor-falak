class ProjectRemindersService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/reminders');
    }
}

DI.register({
    class: ProjectRemindersService,
    alias: 'projectRemindersService',
});