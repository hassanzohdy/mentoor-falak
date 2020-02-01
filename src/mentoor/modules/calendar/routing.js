// Academy module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/calendar',
        middleware: MIDDLEWARE_LIST.loggedIn
    }, routerGroup => {
        // Calendar page
        routerGroup.add('/', CalendarPage);
    
        // end of routes
    });
});
