Macros.create('loadSprints', function () {
    return new Promise(resolve => {
        if (this.sprints) {
            resolve(this.sprints);
        }

        if (! this.projectSprintsService) {
            this.projectSprintsService = DI.resolve('projectSprintsService');
        }

        this.projectSprintsService.list({
            project: this.project.id,
        }).then(response => {
            this.sprints = response;

            resolve(response);
        })
    });
});