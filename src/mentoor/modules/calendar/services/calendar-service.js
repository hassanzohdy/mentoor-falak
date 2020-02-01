class CalendarService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/calendar');
    }

    changeStatus(scheduleId, newStatus) {
        this.endpoint.patch(this.path(`/${scheduleId}/${newStatus}`));
    }
}

DI.register({
    class: CalendarService,
    alias: 'calendarService',
});