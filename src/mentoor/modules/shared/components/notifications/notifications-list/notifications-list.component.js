class NotificationsList {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, header, meta, meService) {
        this.user = user;
        this.header = header;
        this.meService = meService;
        this.notifications = [];
        this.groupNotificationsByType();

        this.firstLoaded = false;

        document.addEventListener('click', e => {
            if (!this.notificationContainer) return;

            if (this.header.notificationButton.contains(e.target)) return;

            if (this.header.showNotifications && !this.notificationContainer.contains(e.target)) {
                this.header.showNotifications = false;
            }
        });

        userSocket.on('total.notifications', ({ data: notifications }) => {
            this.user.update('notifications', notifications);
            meta.setTitle(meta.originalTitle);
        }).on('notifications.new', ({ data: notification }) => {
            this.notifications.unshift(notification);
        });
    }

    markAllAsSeen() {
        this.notifications = this.notifications.map(notification => {
            notification.seen = true;
            return notification;
        });

        userSocket.toSelf('total.notifications', 0);

        this.user.notifications = 0;
        this.meService.markAllNotificationsAsSeen();
    }

    groupNotificationsByType() {
        this.notificationsTypes = [];
        let notificationsTypes = collect(this.notifications).groupBy('type').all();

        for (let i = 0; i < this.notifications.length; i++) {
            let notification = this.notifications[i];
            notification.index = i;
        }

        for (let type in notificationsTypes) {
            const extra = {};
            let notificationsList = notificationsTypes[type];
            let total = collect(notificationsList).filter(notification => !notification.seen).count();

            if (type === 'comment') {
                let mentionedNotifications = {
                    type: 'mention',
                    notifications: [],
                    unseen: 0,
                    extra: {},
                };

                let normalComments = [];

                for (let notification of notificationsList) {
                    if (notification.title.includes('mentioned')) {
                        mentionedNotifications.notifications.push(notification);
                    } else {
                        normalComments.push(notification);
                    }
                }

                mentionedNotifications.unseen = mentionedNotifications.notifications.filter(notification => !notification.seen).length;

                mentionedNotifications.notifications = collect(mentionedNotifications.notifications).sortBy('seen');

                if (mentionedNotifications.notifications.length > 0) {
                    this.notificationsTypes.push(mentionedNotifications);
                }

                notificationsList = collect(normalComments);
            } else if (type === 'task') {
                let taskStatuses = [];
                for (let notification of notificationsList) {
                    let status = notification.extra.status;
                    let taskStatusesListIndex = taskStatuses.findIndex(notification => notification.status === status);
                    let notifications;

                    if (taskStatusesListIndex === -1) {
                        notifications = [];
                        taskStatuses.push({
                            status,
                            notifications
                        });
                    } else {
                        notifications = taskStatuses[taskStatusesListIndex].notifications;
                    }

                    notifications.push(notification);
                }

                taskStatuses.forEach(notificationsList => {
                    notificationsList.unseen = notificationsList.notifications.filter(notification => !notification.seen).length;
                    notificationsList.notifications = collect(notificationsList.notifications).sortBy('seen').toArray();
                });

                extra.statusList = taskStatuses;
            }

            if (total > 99) {
                total = 99;
            }

            this.notificationsTypes.push({
                type,
                extra,
                notifications: notificationsList.sortBy('seen'),
                unseen: total
            });
        }
    }

    getStatusHeadingColor(taskStatusList) {
        let statusColorObject = taskStatus({ status: taskStatusList.status });

        return cls(statusColorObject);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    async init() {
        if (window.userNotifications) {
            this.notifications = window.userNotifications;
            this.groupNotificationsByType();
        }

        if (!this.firstLoaded) {
            this.isLoading = true;
            this.firstLoaded = true;
        }

        let response = await this.meService.NotificationsList();

        this.notifications = response.notifications;
        this.groupNotificationsByType();

        this.user.update('notifications', this.totalUnseen());

        this.isLoading = false;
    }


    imageUrl(image) {
        if (!image) return '';
        return image.startsWith('http') ? image : apiImageUrl(image);
    }

    commentUrl(extra) {
        let treeParam = extra.tree ? `?comment=${extra.tree}` : '';
        if (extra.type == 'task') {
            return URLS.task({ id: extra.typeId }) + treeParam;
        }

        if (extra.project && extra.project.id) {
            return URLS.project({ id: extra.project.id }, pluralize(extra.type), { id: extra.typeId }) + treeParam;
        }

        if (extra.type == 'post') {
            return URLS.post(extra.post) + treeParam;
        }

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

        this.meService.removeNotification(notification.id).then(response => {
            this.user.update(response.me);
            userSocket.toSelf('total.notifications', this.user.get('notifications'));
        });

        this.notifications = [].concat(this.notifications);

        this.groupNotificationsByType();

        this.detectChanges();
    }

    removeAllNotifications() {
        this.notifications = [];
        this.groupNotificationsByType();

        this.user.notifications = 0;

        userSocket.toSelf('total.notifications', 0);

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
                    userSocket.toSelf('total.notifications', this.user.get('notifications'));
                });

                userSocket.toSelf('notifications.mark-as-seen', notification.id);
            }

            return userNotification;
        });
        this.groupNotificationsByType();

        this.detectChanges();
    }
}

DI.register({
    class: NotificationsList,
    alias: 'notificationsList',
});