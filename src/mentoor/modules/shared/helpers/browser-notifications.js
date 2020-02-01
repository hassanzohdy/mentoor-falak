class BrowserNotifications {
    constructor(events, user) {
        this.user = user;
        this.permissionGranted = null;
        this.subscription = () => { };
        
        if (this.user.isLoggedIn()) {
            this.checkPermissions();
        } else {
            events.on('user.login', user => {
                this.user = user;
                this.checkPermissions();
            });
        }
    }

    onSubscribe(callback) {
        this.subscription = callback;
    }

    gotPermissions() {
        return this.permissionGranted !== null;
    }

    async checkPermissions() {
        const permission = await window.Notification.requestPermission();

        this.permissionGranted = permission === 'granted';

        if (this.permissionGranted) {
            this.subscription();
        }
    }
}

DI.register({
    class: BrowserNotifications,
    alias: 'webNotification',
});