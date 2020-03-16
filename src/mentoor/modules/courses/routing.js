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
    
        // Course Sections page
		routerGroup.add('/{:id}/sections', CourseSectionsPage);
		// Course Play page
		routerGroup.add('/{:id}/play', CoursePlayPage);
		// end of routes
    });
});
