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
		routerGroup.add('/{:id}', CourseDetailsPage);

		// Course Play page
		routerGroup.add('/{:id}/play', CoursePlayPage);
		// Video Play page
		routerGroup.add('/{:id}/{:vidId}', VideoPlayPage);
		// Course Dashboard page
		routerGroup.add('/{:id}/dashboard', CourseDashboardPage);
		// end of routes
    });
});
