let ONLINE_USERS = [];

(function () {
    let events = DI.resolve('events');

    events.on('user.login', user => {
        onlineUser(user);
    }).on('user.logout', u => {
        userSocket.trigger('user.logout');
    });
})();

function isOnline(userId) {
    return ONLINE_USERS.includes(userId);
}

function updateOnlineUsers(onlineUsersIds) {
    ONLINE_USERS = onlineUsersIds;
    let layout = DI.resolve('layout');
    
    layout.detectChanges();
}

function onlineUser(user) {
    if (ONLINE_USERS.includes(user.id)) return;

    let socket = io(Config.get('socket.url'), {
        query: {
            id: user.id,
        }
    });

    window.socket = socket;

    window.userSocket = new UserSocket(user, socket);
}
