function isBot() {
    const urlParams = new URLSearchParams(window.location.search);
    const userAgent = urlParams.get('agent') || window.navigator.userAgent;
    let meta = document.createElement('meta');
    meta.name = 'userAgent';
    meta.content = userAgent;
    document.head.prepend(meta);
    return userAgent.match(/Google-Site-Verification|Googlebot|facebook|crawl|WhatsApp|bot|Twitter/i);
}

class Guardian {
    /**
     * {@inheritDoc}
     */
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }

    /**
     * {@inheritDoc}
     */
    name() {
        return 'guardian';
    }

    /**
     * {@inheritDoc}
     */
    handle() {
        if (!isBot() && !this.user.isLoggedIn()) {
            this.router.navigateTo('/login');
            return;
        }

        return Middleware.NEXT;
    }
}

DI.register({
    class: Guardian,
    alias: 'guardianMiddleware',
});