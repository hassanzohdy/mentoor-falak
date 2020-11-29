Macros.create('loadFeatures', function () {
    return new Promise(resolve => {
        if (this.features) {
            resolve({
                records: this.features,
            });
        }

        if (!this.projectFeaturesService) {
            this.projectFeaturesService = DI.resolve('projectFeaturesService');
        }

        this.projectFeaturesService.list({
            project: this.project.id,
        }).then(response => {
            this.features = response.records;

            resolve({
                records: this.features
            });
        })
    });
});