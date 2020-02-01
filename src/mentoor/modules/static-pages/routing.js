// Static module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        middleware: MIDDLEWARE_LIST.guest,
    }, routerGroup => {
        // HelpPage page
        routerGroup.add('/help', HelpPage);
        // WritingNotesPage page
        routerGroup.add('/writing-notes', WritingNotesPage);    
        
        // end of routes
    });
});
