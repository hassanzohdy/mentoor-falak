class TaskChecklistsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/tasks/checklists');
    }

    /**
     * Sort the given checklists list
     * 
     * @param array checklists
     * @returns Promise
     */
    sort(checklists) {
        return this.endpoint.patch(this.path('/sort'), { checklists });
    }
}

DI.register({
    class: TaskChecklistsService,
    alias: 'taskChecklistsService',
});