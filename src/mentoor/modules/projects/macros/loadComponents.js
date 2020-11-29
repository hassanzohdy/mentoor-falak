Macros.create('loadComponents', function () {
    return new Promise(resolve => {
        if (this.components) {
            resolve({
                records: this.components,
            });
        }

        if (!this.projectComponentsService) {
            this.projectComponentsService = DI.resolve('projectComponentsService');
        }

        this.projectComponentsService.list({
            project: this.project.id,
        }).then(response => {
            this.components = response.records.map(projectComponent => {
                let text = projectComponent.name;

                if (projectComponent.parent.id) {
                    text = projectComponent.parent.name + ' » ' + text;
                }

                return {
                    text,
                    application: projectComponent.application,
                    value: projectComponent.id,
                };
            });

            resolve({
                records: this.components
            });
        })
    });
});