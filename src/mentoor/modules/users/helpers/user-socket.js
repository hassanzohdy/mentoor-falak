class UserSocket {
    constructor(user, socket) {
        this.user = user;
        this.socket = socket;
        this.layout = DI.resolve('layout');
        this.meta = DI.resolve('meta');

        this.chatRooms = null;

        // this.rewardsList = DI.resolve('rewardsList');
        this.logErrors();

        this.connect();
    }

    loadNotifications() {
        if (!this.notifications) {
            this.notificationsList = DI.resolve('notificationsList');
        }
    }

    /**
     * Log any occurring error
     */
    logErrors() {
        window.onerror = (error, file, line) => {
            this.trigger('client-error', { error, file, line });
        };
    }

    updateUserInfo() {
        this.socket.emit('user.info', this.user.info, usersIds => {
            updateOnlineUsers(usersIds);
        });
    }

    /**
     * Connect to socket
     */
    connect() {
        this.socket.on('connect', () => {
            this.updateUserInfo();
        }).on('user.update', info => {
            this.user.update(info);
            this.layout.detectChanges();
        }).on('sounds', sound => {
            if (sound == 'notification') {
                playAudio(Sounds.NOTIFICATIONS);
            } else if (sound == 'message') {
                if (this.chatRooms) {
                    this.chatRooms.playSound();
                }
            }
        }).on('notifications.mark-as-seen', notificationId => {
            this.loadNotifications();
            this.notificationsList.notifications = this.notificationsList.notifications.map(userNotification => {
                if (userNotification.seen === false) {
                    if (notificationId === userNotification.id) {
                        userNotification.seen = true;
                    }
                }

                return userNotification;
            });

            this.user.notifications--;

            this.user.update('notifications', this.user.notifications);

            this.meta.setTitle(this.meta.originalTitle);

            this.layout.detectChanges();
        }).on('user.new-notification', notification => {
            this.loadNotifications();

            this.notificationsList.notifications.unshift(notification);
            this.user.update('notifications', this.notificationsList.totalUnseen());
            this.meta.setTitle(this.meta.originalTitle);
            this.layout.detectChanges();
        }).on('user.reward', reward => {
            this.user.total.rewards++;
            playAudio(Sounds.REWARD_NOTIFICATION);
            this.user.update('total', this.user.total);
            this.layout.detectChanges();
        }).on('rewards.redeemed', reward => {
            this.user.total.rewards--;
            this.user.update('total', this.user.total);
            this.layout.detectChanges();
        }).on('users.online', onlineUsersIds => {
            updateOnlineUsers(onlineUsersIds);
        });
    }

    on(event, callback) {
        return this.socket.on(event, callback);
    }

    /**
     * Send data to server socket
     * 
     * @param {string} event
     * @param {any} value 
     */
    trigger(event, value) {
        this.socket.emit(event, value);
        return this;
    }

    /**
     * Send data to all user clients
     * @param {string} event 
     * @param {any} value 
     */
    toSelf(event, value) {
        let data = {
            data: value,
            toSelf: true,
        };

        return this.trigger(event, data);
    }
}

// function notifyMe() {
//     if (Notification.permission !== "granted")
//         Notification.requestPermission();
//     else {
//         var notification = new Notification('Notification title', {
//             icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
//             body: "Hey there! You've been notified!",
//         });

//         notification.onclick = function () {
//             window.open("http://stackoverflow.com/a/13328397/1269037");
//         };

//     }
// }