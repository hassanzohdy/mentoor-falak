class Observable {
    constructor(items = []) {
        this.items = items || [];
    }

    static observe(subscription) {
        Observable.subscriptions.push(subscription);
    }
}

Observable.subscriptions = [];