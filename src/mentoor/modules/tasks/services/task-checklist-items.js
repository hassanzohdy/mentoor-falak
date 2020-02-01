class TaskChecklistItemsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/tasks/checklists/items');
    }

    /**
     * Change item status
     * status is 0 or 1
     *  
     * @param {int} itemId 
     * @param {int} status 
     */
    changeStatus(itemId, done) {
        return this.endpoint.patch(this.path(`/${itemId}/done`), {done});
    }

    /**
     * Sort the given items list
     * 
     * @param array items
     * @returns Promise
     */
    sort(items) {
        return this.endpoint.patch(this.path('/sort'), { items });
    }
}

DI.register({
    class: TaskChecklistItemsService,
    alias: 'taskChecklistItemsService',
});