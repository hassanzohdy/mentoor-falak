// Posts module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/posts',
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // Post page
        routerGroup.add('/{slug}/{:id}', PostPage);
        // end of routes
    });

    router.group({
        prefix: '/admin/posts',
        middleware: MIDDLEWARE_LIST.admin,
    }, routerGroup => {

        // Admin posts page
        routerGroup.add('/', AdminPostsPage);
    });
});
