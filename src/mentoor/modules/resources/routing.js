// Resources module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/resources',
        middleware: [],
    }, routerGroup => {
		// Resource Details page
		routerGroup.add('/{:id}', ResourceDetailsPage);
		// end of routes
    });
});