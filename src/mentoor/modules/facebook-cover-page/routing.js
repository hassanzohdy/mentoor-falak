// Facebook page module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/cover-page',
    }, routerGroup => {
        // Facebook cover page
        routerGroup.add('/', FacebookCoverPage);
        // end of routes
    });
});
