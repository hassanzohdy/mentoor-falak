let events = DI.resolve('events'),
    endpoint = DI.resolve('endpoint');

const SCROLL_TOP_OFFSET = 80;

//Just for testing

// events.on('router.navigating', () => {
//     let layout = DI.resolve('layout');
//     layout.appElement.innerHTML = '';
//     $(layout.appElement).fadeOut();
// }).on('content.update', () => {
//     let layout = DI.resolve('layout');
//     setTimeout(() => {
//         $(layout.appElement).fadeIn();
//     }, 1000);
// });

(function () {
    _const('_L', console.log);
    globalConstants();
    initializeUrls();
    new checkUserInPage();
    googleVerification();

    events.on('user.login', user => {
        user.unseenRoomsNotifications = {
            total: 0,
            rooms: {}
        };
    }).on('endpoint.done', response => {
        if (!Object.get(response, 'originalResponse.user')) return true;

        let user = DI.resolve('user');

        user.update(response.originalResponse.user);

        if (!window.userSocket) {
            onlineUser(user);
        }
        userSocket.updateUserInfo();
    }).on('title.change', (title, meta) => {
        let user = DI.resolve('user');

        if (!user.isLoggedIn()) return title;

        if (user.notifications > 0) {
            title = `(${user.notifications}) ${title}`;
        }

        return title;
    }).on('app.ready', async () => {
        let user = DI.resolve('user'),
            meta = DI.resolve('meta'),
            cache = DI.resolve('cache'),
            router = DI.resolve('router'),
            meService = DI.resolve('meService');

        router.scrollTopOffset = SCROLL_TOP_OFFSET;

        DI.resolve('workerBoss');

        if (Config.get('app.env') == 'production') {
            _L("%c%s", "color: red; font-size: 24px; font-weight: bold;", "WARNING!");
            _L("%c%s", "font-size: 16px; font-weight: bold;", "Using this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.Do not enter or paste code that you do not understand.");
        }

        // console.log = console.warn = console.error = console.trace = () => {};

        // globalize the meta image
        meta.setImage(assets('images/cover.JPG'));

        let version = Config.get('version'),
            oldVersion = cache.get('version');

        if (version != oldVersion) {
            setTimeout(() => {
                cache.set('version', version);

                events.trigger('app.version-update', version, oldVersion);
            }, 4000); // wait 4 seconds first to make sure all components are loaded
        }

        if (!user.isLoggedIn()) {
            return await collectFlags();
        }

        if (flags.areCached()) {
            flags.globalize();
        }

        // let [userResponse, flagsResponse] = await Promise.all([await meService.info(), await endpoint.get('/flags')]);

        meService.info().then(response => {
            response.user.hasCreatedProjectBefore = Boolean(
                Array.get(response.user.projects, project => project.creator === true)            
            );

            // response.user.hasCreatedProjectBefore = ! Is.empty(response.user.projects);

            user.update(response.user);
            let layout = DI.resolve('layout');
            flags.cache(response.flags);
            layout.detectChanges();
        }).catch(e => {

            if (Config.get('app.env') == 'development') return;

            let router = DI.resolve('router');
            user.logout();
            router.navigateTo('/login');
        });
    }).on('router.navigating', router => {
        // Log every request
        if (Config.get('app.env') == 'development') return;
        let referrer = document.referrer;
        setTimeout(() => {
            endpoint.post('/log', {
                path: router,
                ref: referrer,
            });
        }, 3000);
    });
})();

function googleVerification() {
    let googleMeta = document.getElementById('gsvtion');

    googleMeta.content = Config.get('google.verification');
}

function apiImageUrl(image) {
    if (! image) return null;
    if (Is.url(image)) return image;
    
    return Config.get('http.endpoint.baseUrl') + '/images/cache/' + image.ltrim('/');
}

function initializeUrls() {
    _const('URLS', {
        course(course, extra = null) {
            if (extra) {
                extra = '/' + extra.ltrim('/');
            }
            
            return `/courses/${course.id}${extra}`;
        },
        poll(poll) {
            return `/polls/${poll.id}`;
        },
        post(post) {
            return `/posts/${post.slug}/${post.id}`;
        },
        english(word) {
            return `/english/${word.slug}`;
        },
        track(track) {
            return `/academy/${track.slug}`;
        },
        task(task) {
            return `/tasks/${task.id}`;
        },
        arena(challenge){
            return `/arena/challenges/${challenge}`;
        },
        project(project, extend = '', extra) {
            if (! project) return '';
            if (extend) {
                extend = '/' + extend;
            }

            if (extra  && Is.plainObject(extra)) {
                extend += '/' + extra.id;
            }

            return `/projects/${project.id}${extend}`;
        },
        topic(topic, track = null) {
            if (!track) {
                track = topic.track;
            }

            return `/academy/${track.slug}/${topic.slug}`;
        },
    });
}

function globalConstants() {
    _const('FAVICON', assets('images/favicon.jpg'));
    _const('ARABIC_PATTERN', /[\u0600-\u06FF]/);
}

let cache = DI.resolve('cache');

let flags = {
    cacheKey: 'f',
    areCached() {
        return cache.has(this.cacheKey);
    },
    list() {
        return cache.get(this.cacheKey);
    },
    cache(flags) {
        cache.set(this.cacheKey, flags);
        this.globalize();
    },
    globalize() {
        _global('FLAGS', this.list());
    }
}

function collectFlags() {
    return new Promise(async resolve => {
        if (flags.areCached()) {
            _global('FLAGS', flags.list());
            resolve();
        }

        let flagsResponse = await endpoint.get('/flags');

        flags.cache(flagsResponse.flags);

        resolve();
    });
}

// user in page
function checkUserInPage() {
    this.userStillInThePage = true;

    window.onblur = () => {
        this.userStillInThePage = false;
    };

    window.onfocus = () => {
        this.userStillInThePage = true;
    };

    // a public api function to be used to check if current user is in the page
    _const('userInThePage', () => this.userStillInThePage);
}

// function testing() {
//     function getUsedLocalStorageSpace() {
//         return Object.keys(window.localStorage).map(function (key) { return localStorage[key].length; }).reduce(function (a, b) { return a + b; });
//     };

//     echo(getUsedLocalStorageSpace() / 1024 / 1024);
//     endpoint.get('/test').then(response => {

//     });
//     endpoint.get('/offline-courses?with-subscribers=1').then(response => {
//         response.records.forEach(track => {
//             echo(track.subscribed)
//         })
//     });

//     var blob = new Blob([
//         `
//     function objectMatch(x, y) {
//         let areEqual = false;
//         const Obj = Object.keys(x);
//         const keysSize = Obj.length;
//         let counter = 0;
//         Obj.forEach(key => {
//             if (y[key] === x[key]) {
//             counter += 1;
//             }
//         });
//         if (counter === keysSize) areEqual = true;
//         return areEqual;
//     }

//     class Testar {
//         constructor() {
//             this.tests = [];
//             this.currentResult = null;
//         }

//         addOld() {
//             if (this.actualResult && this.description) {
//                 this.tests.push({
//                     actualResult: this.actualResult,
//                     correctResult: this.correctResult,
//                     description: this.description,
//                 });
//             }
//         }

//         test(actualResult, correctResult) {
//             this.addOld();

//             this.actualResult = actualResult;
//             this.correctResult = correctResult;

//             return this;
//         }

//         toBe(description) {
//             this.description = description;

//             return this;
//         }

//         run() {
//             this.addOld();

//             let report = {
//                 passed: 0,
//                 failed: 0,
//                 total: this.tests.length,
//                 tests: {},
//             };

//             for (let test of this.tests) {
//                 let passed = /string|number|boolean/.test(typeof test.correctResult) ? test.correctResult === test.actualResult : objectMatch(test.correctResult, test.actualResult);

//                 if (passed) {
//                     report.passed++;
//                 } else {
//                     report.failed++;
//                 }

//                 report.tests[test.description] = passed ? 'Passed' : 'Failed';
//             }

//             report.success = report.failed === 0;

//             return report;
//         }
//     }

//     self.onmessage = function (event) {
//         let {data} = event;

//         let {description, tests, code} = data;

//         try {
//             eval(code);
//         } catch (e) {
//             self.postMessage({
//                 success: false,
//                 response: e.message, 
//             });
//             return;
//         }

//         let testar = new Testar;

//         for (let test of tests) {
//             try {

//                 let testDescription = test.description || description
//                 let result = eval(test.result);
//                 let expecting = test.expecting;

//                 if (typeof expecting == 'string') {
//                     expecting = eval('(' + expecting + ')');
//                 }

//                 testar.test(result, expecting).toBe(testDescription);
//             } catch (e) {
//                 self.postMessage({
//                     success: false,
//                     response: e.message, 
//                 });
//                 return;
//             }
//         }

//         self.postMessage({
//             success: true,
//             response: testar.run(),
//         });
//     }
//         `

//     ], { type: "text/javascript" })

//     var worker = new Worker(window.URL.createObjectURL(blob));
//     worker.onmessage = function (e) {
//         echo(e.data);
//         const { success, response } = e.data;
//     }


//     worker.postMessage({
//         description: 'Solving problem',
//         tests: [{
//             result: `sum(2, 4)`,
//             expecting: 6,
//             description: 'Summing',
//         }, {
//             result: `pep()`,
//             expecting: '{a: 14, b: 12}',
//             description: 'pingo',
//         }],
//         code: `
//         // pinoal'
//         function sum(a, b) {
//             return a + b;
//         }
//         function pep() {
//             return {a: 14, b: 12};
//         }
//         `
//     }); // Start the worker.
// }