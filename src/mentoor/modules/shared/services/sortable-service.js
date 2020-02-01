class SortableService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/sort');
        let dataSchema = {
            type: 'sorting type i.e topics, users...etc',
            itemId: 'item id',
            sortOrder: 'new sort order',
        }
    }

    /**
     * Sort the given data
     * 
     * @param {object} data 
     * @returns Promise
     */
    sort(data) {
        return this.endpoint.post(this.path(), data);
    }
    /**
     * Sort all rows
     * 
     * @param {object} data 
     * @returns Promise
     */
    sortAll(records) {
        return this.endpoint.post(this.path(), {records});
    }
}

DI.register({
    class: SortableService,
    alias: 'sortableService',
});