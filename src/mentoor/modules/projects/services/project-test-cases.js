class ProjectTestCasesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects/test-cases');
    }

    changeStatus(testCaseId, newStatus, data) {
        return this.endpoint.patch(this.path(`/${testCaseId}/${newStatus}`), data);
    }
}

DI.register({
    class: ProjectTestCasesService,
    alias: 'projectTestCasesService',
});