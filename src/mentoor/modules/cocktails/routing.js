// Cocktails module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/admin/cocktails',
        middleware: MIDDLEWARE_LIST.admin
    }, routerGroup => {
        // Admin cocktail page
        routerGroup.add('/', AdminCocktailPage);

        // Admin cocktails category page
        routerGroup.add('/categories', AdminCocktailsCategoryPage);
    
        // end of routes
    });
});
