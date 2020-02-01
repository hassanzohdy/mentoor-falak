// Polls module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/polls',
        middleware: [],
    }, routerGroup => {
        // Polls page
		routerGroup.add('/', PollsPage);
		// Poll Details page
		routerGroup.add('/{:id}', PollDetailsPage, {
            // middleware: MIDDLEWARE_LIST.loggedIn,
        });
		// end of routes
    });
});