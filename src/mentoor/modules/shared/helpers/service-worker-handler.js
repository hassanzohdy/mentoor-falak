class WorkersBoss {
    constructor(user, events, webNotification) {
        this.user = user;
        this.events = events;
        this.webNotification = webNotification;

        this.updateServiceWorkerOnVersionUpdate();

        this.init();

        // this.registerService();
    }

    updateServiceWorkerOnVersionUpdate() {
        this.events.on('app.version-update', version => {
            this.service.update();
        });
    }

    async init() {
        this.service = await navigator.serviceWorker.register(assets(`js/service-worker.js?siteName=${trans('site-name')}&baseUrl=${BASE_URL}&version=${Config.get('version')}`));

        if (this.webNotification.permissionGranted === null) {
            this.webNotification.onSubscribe(this.subscribe.bind(this));
        }
    }

    urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    async registerService() {
        if (Config.get('app.env') == 'development') {
            // let services = await navigator.serviceWorker.getRegistrations();
            // services.map(service => service.unregister());
        }

        this.subscribe();
    }

    async subscribe() {
        this.pushNotificationKey = Config.get('pushNotificationKey');

        try {
            this.subscription = await this.service.pushManager.getSubscription();

            if (this.subscription) return;

            this.subscription = await this.service.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: this.urlB64ToUint8Array(this.pushNotificationKey),
            });

            this.sendSubscription();
            // echo(this.subscription);
            // echo(this.subscription)
        } catch (e) {
            // console.log(e);
            // debugger;
        }
    }

    sendSubscription() {
        if (! this.user.isLoggedIn()) return;
        // this.service.showNotification('Really?', {
        //     body: 'BonGA',
        //     icon: FAVICON,
        //     vibrate: [200, 100, 200, 100, 200, 100, 200],
        //     tag: 'vibration-sample'
        // })

        let endpoint = DI.resolve('endpoint');
        endpoint.send({
            route: '/push-notifications/subscribe',
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            data: JSON.stringify({
                subscription: this.subscription,
            }),
        });
    }
}

DI.register({
    class: WorkersBoss,
    alias: 'workerBoss',
});