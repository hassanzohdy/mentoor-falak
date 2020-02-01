// expected data to be sent
let queryParams = {
    icon: null,
    baseUrl: 'https://mentoor.io',
    siteName: 'Mentoor',
    version: null,
};

const cacheName = 'm-v1'; // mentoor version 1
const FAVICON = './../images/favicon.jpg';

self.addEventListener('install', function (event) {
    location.search.replace('?', '').split('&').map(param => {
        const [key, value] = param.split('=');
        queryParams[key] = value;
    });

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll([
                FAVICON
            ]);
        }),
    );
    // debugger;
    // on installation
});

function getProperSlug(data) {
    switch (data.type) {
        case 'answer':
            return 'academy/' + data.slug;
        case 'einstein':
            if (data.extra.status == 'rejected') {
                return 'einstein-chamber/puzzles/' + data.extra.puzzle.id;
            } else if (data.extra.status == 'pending') {
                return 'admin/einstein/answers';
            }
        case 'task':
            return 'tasks/' + data.extra.id;
        case 'project':
            return 'projects/' + data.extra.project.id;
        case 'post':
            return 'posts/' + data.slug + '/' + data.extra.post.id;
        case 'comment':
            if (data.extra.type == 'task') {
                return 'tasks/' + data.extra.typeId;
            } else if (data.extra.project) {
                return 'projects/' + data.extra.project.id + '/' + data.extra.type + 's/' + data.extra.typeId;
            }

        default:
            return data.slug;
    }
}

function getProperIcon(data) {
    switch (data.type) {
        case 'einstein':
            return './../images/en.png';
        case 'project':
            return data.extra.project.image || FAVICON;
        case 'comment':
            if (data.extra.project && data.extra.project.image) {
                return data.extra.project.image;
            }
        default:
            return FAVICON;
    }
}

self.addEventListener('notificationclick', event => {
    let data = event.notification.data;

    let slug = getProperSlug(data);

    // see if the current is open and if it is focus it
    // otherwise open new tab
    event.waitUntil(
        self.clients.matchAll().then(function (clientList) {
            if (clientList.length > 0) {
                return clientList[0].focus();
            }

            return self.clients.openWindow(queryParams.baseUrl + '/' + slug);
        })
    );

    // close the notification
    event.notification.close();
});


self.addEventListener('push', function (event) {
    let notificationData = {};

    try {
        notificationData = event.data.json();
    } catch (e) {
        console.log(e);
    }

    event.waitUntil(
        self.registration.showNotification(notificationData.title, {
            // icon: queryParams.icon,
            icon: getProperIcon(notificationData),
            badge: getProperIcon(notificationData),
            body: notificationData.body,
            data: notificationData,
        })
    );

});