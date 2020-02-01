// Users module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // Post page
        // Top users page
        routerGroup.add('/top-users', TopUsersPage);
        // Online users page
        routerGroup.add('/online-users', OnlineUsersPage);

        // AffiliatePage page
        routerGroup.add('/affiliate', AffiliatePage, {
            middleware: ['affiliate'],
        });
        // end of routes
    });

    Router.group({
        middleware: MIDDLEWARE_LIST.loggedIn
    }, routerGroup => {
        // routerGroup.add('/my-tracks', UserTracksPage);

        // Profile page
        routerGroup.add('/me', ProfilePage);

        // Account settings page
        // routerGroup.add('/me/settings', AccountSettingsPage);
    });

    router.group({
        middleware: MIDDLEWARE_LIST.unAuthorize,
    }, routerGroup => {
        routerGroup.add('/login', LoginPage);
        routerGroup.add('/register', RegisterPage);
        routerGroup.add('/forget-password', ForgetPasswordPage)
        routerGroup.add('/reset-password', ResetPasswordPage)
    });

    router.group({
        prefix: '/admin/users',
        middleware: MIDDLEWARE_LIST.admin,
    }, routerGroup => {

        routerGroup.add('/', UsersPage);
    });
});
