// Bugs module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/bugs',
        middleware: [],
    }, routerGroup => {
        // Bugs page
		routerGroup.add('/', BugsPage);
		// end of routes
    });
});