class TodoListService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/todo');
    }

    add(data) {
        return this.endpoint.post(this.path(''), data);
    }

    addCategory(data) {
        return this.endpoint.post(this.path('/categories'), data);
    }

    updateCategory(categoryId, data) {
        return this.endpoint.put(this.path('/categories/' + categoryId), data);
    }

    deleteCategory(categoryId) {
        return this.endpoint.delete(this.path('/categories/' + categoryId));
    }

    changeStatus(itemId, data) {
        return this.endpoint.patch(this.path(`${itemId}/change-status`), data);
    }
}

DI.register({
    class: TodoListService,
    alias: 'todoListService',
});