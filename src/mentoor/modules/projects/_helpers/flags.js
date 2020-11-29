const BUGS_STATUSES = [
    'active',
    'reopened',
    'onHold',
    'fixed',
    'testing',
    'retesting',
    'verified',
    'closed',
    'inProgress',
    'deferred',
    'notBug',
    'duplicated',
    'rejected',
];

const CHANGE_REQUEST_TYPES = {
    new: 'New Features',
    update: 'Update Existing Features',
};

const PROJECT_APPLICATIONS = [
    'Admin Dashboard', 'Front Office',
    'Mobile App',
    'IOS App', 'Android App',
    'Flutter App'
];


const BROWSERS_LIST = [
    {
        text: 'Google Chrome',
        value: 'chrome',
        image: assets('images/chrome.png'),
    },
    {
        text: 'Firefox',
        value: 'firefox',
        image: assets('images/firefox.png'),
    },
    {
        text: 'Edge',
        value: 'edge',
        image: assets('images/edge.png'),
    },
    {
        text: 'Safari',
        value: 'safari',
        image: assets('images/safari.svg'),
    },
    {
        text: 'Opera',
        value: 'opera',
        image: assets('images/opera.png'),
    },
]; 

function getBrowserIcon(record) {
    return (BROWSERS_LIST.find(browser => browser.value = record.browser) || {}).image;
} 

function getBrowserName(record) {
    return (BROWSERS_LIST.find(browser => browser.value = record.browser) || {}).text;
} 

const OPERATING_SYSTEMS = [
    'Windows',
    'Linux',
    'MacOS',
    'Ubuntu',
    'ios',
    'Andriod',
];

const DEVICE_TYPES = [
    'desktop',
    'laptop',
    'mobile',
    'tablet',
];


const PROJECT_FEATURES = [
    'resources',
    'taskBoard',
    'bugs',
    'components',
    'modules',
    'meetings',
    'teams',
    'changeRequests',
    'srs',
    'documentation',
    'discussions',
    'features',
    'testSuits',
    'sprints',
    'testEnvironment',
    'userStories',
    'client',
];