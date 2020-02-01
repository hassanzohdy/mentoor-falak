// Dashboard module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/dashboard',
        middleware: MIDDLEWARE_LIST.loggedIn
    }, routerGroup => {
        // Dashboard page
        routerGroup.add('/', DashboardPage);

        // end of routes
    });
});
