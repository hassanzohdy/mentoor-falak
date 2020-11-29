Macros.create('loadTestEnvironments', function () {
    return new Promise(resolve => {
        if (this.testEnvironments) {
            resolve({
                records: this.testEnvironments,
            });
        }

        if (!this.projectTestEnvironmentsService) {
            this.projectTestEnvironmentsService = DI.resolve('projectTestEnvironmentsService');
        }

        this.projectTestEnvironmentsService.list({
            project: this.project.id,
        }).then(response => {
            this.testEnvironments = response.records;

            resolve({
                records: this.testEnvironments
            });
        })
    });
});