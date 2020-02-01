class TasksService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/tasks');
    }

    /**
     * Submit user's task
     * @param {integer} taskId 
     * @param {any} data 
     */
    submitTask(taskId, data) {
        return this.endpoint.post(this.path(`/${taskId}/submit-user-task`), data);
    }

    /**
     * Add New COmment
     * 
     * @param {integer} taskId 
     * @param {any} data 
     */
    addNewComment(taskId, data) {
        return this.endpoint.post(this.path(`/${taskId}/comments`), data);
    }

    /**
     * Update task status
     * 
     * @param integer taskId 
     * @param string newStatus
     * @returns Promise 
     */
    updateTaskStatus(taskId, newStatus) {
        return this.endpoint.patch(this.path(`/${taskId}/update-status/${newStatus}`));
    }

    /**
     * Archive given task id
     * 
     * @param integer taskId 
     * @returns Promise 
     */
    archive(taskId) {
        return this.endpoint.patch(this.path(`/${taskId}/archive`));
    }

    /**
     * Sort the given tasks list
     * 
     * @param array tasks
     * @returns Promise
     */
    sort(tasks) {
        return this.endpoint.patch(this.path('/sort'), { tasks });
    }
}

DI.register({
    class: TasksService,
    alias: 'tasksService',
});