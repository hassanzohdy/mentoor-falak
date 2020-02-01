// Tutorial Maker module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/tutorial-maker',
    }, routerGroup => {
        // Tutorial Maker Page
        routerGroup.add('/', TutorialMakerPage);
        // Tutorial maker what is it page
        routerGroup.add('/what-is-it', TutorialMakerWhatIsItPage);
        // Tutorial maker smackdown page
        routerGroup.add('/smackdown', TutorialMakerSmackdownPage);
        // Tutorial maker what does it mean page
        routerGroup.add('/what-does-it-mean', TutorialMakerWhatDoesItMeanPage);
        // Tutorial maker thumbnail maker page
        routerGroup.add('/thumbnail', TutorialMakerThumbnailMakerPage);
        // Tutorial maker compare page
        routerGroup.add('/compare', TutorialMakerComparePage);
        // Tutorial new module page
        routerGroup.add('/new-module', TutorialNewModulePage);

        // Tutorial maker series page
        routerGroup.add('/series', TutorialMakerSeriesPage);
        // end of routes
    });
});
