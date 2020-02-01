const Component = require(COMPONENT_CLASS_PATH);

class LiveNotificationsComponent extends Component {}

module.exports = {
    selector: 'live-notifications',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: LiveNotificationsComponent,
    isUnique: false,
    component: 'LiveNotifications',
    htmlFile: __dirname + '/../../live-notifications.component.html',
};