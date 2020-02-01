// Change log module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/change-log',
        middleware: MIDDLEWARE_LIST.loggedIn
    }, routerGroup => {
        // Change log page
        routerGroup.add('/', ChangeLogPage);
    
        // end of routes
    });
});
