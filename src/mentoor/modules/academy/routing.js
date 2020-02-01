// Academy module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/academy',
        middleware: MIDDLEWARE_LIST.loggedIn
    }, routerGroup => {
        routerGroup.add('/', TracksListPage);
        routerGroup.add('/{track}', TrackDetailsPage);

        routerGroup.add('/{track}/{topic}', TopicPage);
    
        // end of routes
    });

    router.group({
        prefix: '/admin/academy',
        middleware: MIDDLEWARE_LIST.admin
    }, routerGroup => {
        routerGroup.add('/users', UsersPage);
        routerGroup.add('/tracks', TracksPage);
        routerGroup.add('/tracks/suggest-topics', SuggestTopicsPage);
        routerGroup.add('/tracks/{:trackID}/topics', TopicsPage)
        routerGroup.add('/answers', AnswersPage);
    });
});