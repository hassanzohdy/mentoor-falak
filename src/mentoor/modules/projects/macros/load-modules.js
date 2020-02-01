Macros.create('loadModules', function () {
    return new Promise(resolve => {
        if (this.modules) {
            resolve({
                records: this.modules,
            });
        }

        if (!this.projectModulesService) {
            this.projectModulesService = DI.resolve('projectModulesService');
        }

        this.projectModulesService.list({
            project: this.project.id,
        }).then(response => {
            this.modules = response.records.map(projectModule => {
                let text = projectModule.name;

                if (projectModule.parent.id) {
                    text = projectModule.parent.name + ' » ' + text;
                }

                return {
                    text,
                    value: projectModule.id,
                };
            });

            resolve({
                records: this.modules
            });
        })
    });
});