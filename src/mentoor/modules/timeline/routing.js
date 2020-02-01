// Timeline module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/timeline',
        middleware: [],
    }, routerGroup => {
        // Timeline page
		routerGroup.add('/', TimelinePage);
		// end of routes
    });
});