// Tasks module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/tasks',
        middleware: MIDDLEWARE_LIST.loggedIn
    }, routerGroup => {
        // Tasks page
        routerGroup.add('/', TasksPage);

        // Task details page
        routerGroup.add('/{:taskId}', TaskDetailsPage);
        // end of routes
    });
});
