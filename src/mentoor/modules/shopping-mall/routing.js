// Shopping Mall module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/shopping-mall',
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // Shopping mall page
        routerGroup.add('/', ShoppingMallPage);

        // end of routes
    });
});
