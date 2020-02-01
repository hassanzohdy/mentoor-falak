function loadProjectTasks () {
    return new Promise(resolve => {
        if (! this.project) {
            this.project = {};
        }

        if (this.project.tasks) {
            resolve({
                records: this.project.tasks
            });
        }

        if (! this.tasksService) {
            this.tasksService = DI.resolve('tasksService');
        }

        this.tasksService.list({
            project: this.project.id,
        }).then(response => {
            this.project.tasks = response.records;

            resolve(response);
        })
    });
}

Macros.create('loadProjectTasks', loadProjectTasks);