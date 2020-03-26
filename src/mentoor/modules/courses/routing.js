// Courses module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/courses',
        // middleware: MIDDLEWARE_LIST.admin
    }, routerGroup => {
        // Courses page
        routerGroup.add('/', CoursesPage);
        // New course page
        routerGroup.add('/new', NewCoursePage);
		// Course Details page
		routerGroup.add('/{:id}/{slug}', CourseDetailsPage);

		// Course Play page
		routerGroup.add('/{:id}/{slug}/play', CoursePlayPage);
		// Video Play page
		routerGroup.add('/{:id}/{slug}/{:vidId}', VideoPlayPage);
		// Course Dashboard page
		routerGroup.add('/{:id}/{slug}/dashboard', CourseDashboardPage);
		// end of routes
    });
});
