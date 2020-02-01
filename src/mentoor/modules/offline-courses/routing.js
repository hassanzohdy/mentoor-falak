// Offline Courses module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/offline-courses',
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // OfflineTracksPage page
        routerGroup.add('/', OfflineCoursesPage);
    
        // OfflineTrackDetailsPage page
        routerGroup.add('/{id}', OfflineCourseDetailsPage);
    
        // end of routes
    });

    router.group({
        prefix: '/admin/offline-courses',
        middleware: MIDDLEWARE_LIST.admin,
    }, routerGroup => {

        // OfflineTracksPage page
        routerGroup.add('/', AdminOfflineCoursesPage);
    });
});
