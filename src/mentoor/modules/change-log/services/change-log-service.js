class ChangeLogService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/change-log');
    }
}

DI.register({
    class: ChangeLogService,
    alias: 'changeLogService',
});