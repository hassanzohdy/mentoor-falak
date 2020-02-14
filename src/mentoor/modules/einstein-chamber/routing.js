// Einstein Chamber module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/einstein-chamber',
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // Public einstein puzzles 
        routerGroup.add('/puzzles/{puzzleId}', EinsteinPuzzlePage);

        routerGroup.add('/unlock', EinsteinChamberUnlocker);

        let unlockedChamberMiddleware = Array.clone(MIDDLEWARE_LIST.loggedIn);

        unlockedChamberMiddleware.push('unlocked-chamber');

        routerGroup.group({
            middleware: unlockedChamberMiddleware,
        }, unlockedChamber => {
            unlockedChamber.add('/', EinsteinChamberPage, {
                middleware: ['empty-chamber-categories'],
            });

            // shop page
            unlockedChamber.add('/shop', EinsteinChamberShop);

            // New Challenge page
            routerGroup.add('/new-puzzle', NewPuzzlePage);

            // Einstein puzzle answers page
            unlockedChamber.add('/puzzles/{:puzzleId}/answers', EinsteinPuzzleAnswersPage);
        });
        // New Puzzle page
        routerGroup.add('/einstein-chamber/new', NewPuzzlePage);
        // end of routes
    });

    router.group({
        prefix: '/admin/einstein',
        middleware: MIDDLEWARE_LIST.admin,
    }, routerGroup => {
        // Einstein page
        routerGroup.add('/', EinsteinPage)
        routerGroup.add('/{:categoryId}/puzzles', EinsteinAdminPuzzles);

        // EinsteinAnswers page
        routerGroup.add('/answers', EinsteinAnswers);
    });
});
