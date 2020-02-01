// Training Ground module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/training-ground',
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // Training-ground page
        routerGroup.add('/', TrainingGroundPage);

        // Training ground details page
        routerGroup.add('/{trainingGroundId}', TrainingGroundDetailsPage);
        // end of routes
    });

    router.group({
        prefix: '/admin/training-ground',
        middleware: MIDDLEWARE_LIST.admin,
    }, routerGroup => {
        // Admin training ground page
        routerGroup.add('/', AdminTrainingGroundPage);
    });
});
