// English module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/english',
    }, routerGroup => {
        // English page
        routerGroup.add('/', EnglishPage);

        // English top participants page
        routerGroup.add('/top-participants', EnglishTopParticipantsPage);

        // Word page
        routerGroup.add('/{word}', WordPage);

        // end of routes
    });
});
