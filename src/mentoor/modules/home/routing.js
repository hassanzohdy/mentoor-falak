// Facebook page module routes list
DI.resolve('events').subscribe('router.collecting', router => {    
    router.add('/', HomePage, {
        middleware: MIDDLEWARE_LIST.guest,
    });
});
