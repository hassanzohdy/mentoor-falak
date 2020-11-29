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
     * Send testing request
     * 
     * @param {number} taskId
     * @returns {Promise}
     */
    requestTesting(taskId) {
        return this.endpoint.patch(this.path(`/${taskId}/request-testing`));
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
    updateTaskStatus(taskId, newStatus, data = {}) {
        return this.endpoint.patch(this.path(`/${taskId}/update-status/${newStatus}`), data);
    }

    /**
     * Get Tasks Filters 
     */
    getFilters(data) {
        return this.endpoint.get(this.path('/filters'), { data });
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
     * @param {string} taskId
     * @param {object} data
     */
    rateTask(taskId, data) {
        return this.endpoint.patch(this.path(`/${taskId}/rate`), data);
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