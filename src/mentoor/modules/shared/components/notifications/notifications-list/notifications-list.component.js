class NotificationsList {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, header, meService) {
        this.user = user;
        this.header = header;
        this.meService = meService;
        this.notifications = [];

        document.addEventListener('click', e => {
            if (! this.notificationContainer) return;

            if (this.header.notificationButton.contains(e.target)) return;

            if (this.header.showNotifications && !this.notificationContainer.contains(e.target)) {
                this.header.showNotifications = false;
            }
        });
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    async init() {
        if (window.userNotifications) {
            this.notifications = window.userNotifications;
        }

        this.isLoading = true;
        let response = await this.meService.NotificationsList();

        this.notifications = response.notifications;

        this.user.update('notifications', this.totalUnseen());

        this.isLoading = false;
    }


    imageUrl(image) {
        return image.startsWith('http') ? image : apiImageUrl(image);
    }

    commentUrl(extra) {
        let treeParam = extra.tree ? `?comment=${extra.tree}` : '';
        if (extra.type == 'task') return URLS.task({ id: extra.typeId }) + treeParam;

        if (extra.project) return URLS.project({ id: extra.project.id }, pluralize(extra.type), { id: extra.typeId }) + treeParam;

        throw new Error(`Comment Extra Type: ${extra.type}!!`);
    }

    /**
     * Get total unseen notifications
     * 
     * @returns {number}
     */
    totalUnseen() {
        return this.notifications.reduce((unseenNotifications, notification) => {
            if (notification.seen === false) {
                unseenNotifications++;
            }

            return unseenNotifications;
        }, 0);
    }

    removeNotification(notification, index) {
        this.user.notifications--;
        this.unsetArrayIndex('notifications', index);

        this.meService.removeNotification(notification.id);
    }

    removeAllNotifications() {
        this.notifications = [];

        this.user.notifications = 0;

        this.meService.removeAllNotifications();
    }

    /**
     * Mark the given notification as seen
     * 
     * @param {any} notification 
     */
    markAsSeen(notification) {
        this.notifications = this.notifications.map((userNotification) => {
            if (userNotification.seen === false && notification.id === userNotification.id) {
                userNotification.seen = true;
                this.meService.markNotificationAsSeen(notification.id).then(response => {
                    this.user.update(response.user);
                });

                userSocket.toSelf('notifications.mark-as-seen', notification.id);
            }

            return userNotification;
        });

        this.detectChanges();
    }
}

DI.register({
    class: NotificationsList,
    alias: 'notificationsList',
});