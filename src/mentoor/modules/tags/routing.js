// Tags module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/tags',
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // Tags page
        routerGroup.add('/', TagsPage);
        // end of routes
    });

    router.group({
        prefix: '/admin/tags',
        middleware: MIDDLEWARE_LIST.admin,
    }, routerGroup => {
        // Admin Tags Page page
        routerGroup.add('/', AdminTagsPage);
    });
});
