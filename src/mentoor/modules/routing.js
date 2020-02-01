const MIDDLEWARE_LIST = {
    admin: ['guardian', 'isAdmin'],
    loggedIn: ['guardian', 'fullName'],
    guest: ['fullName'],
    unAuthorize: ['blackGuardian'],
};

DI.resolve('events').subscribe('router.collecting', router => {
    // Not found page
    Router.add('*', NotFoundPage);
});
