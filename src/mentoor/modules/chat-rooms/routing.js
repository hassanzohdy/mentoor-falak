// Chat Rooms module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/chat-rooms',
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // Change log page
        routerGroup.add('/', ChatRoomsPage);
    
        // end of routes
    });
});
