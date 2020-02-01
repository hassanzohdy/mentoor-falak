const Component = require(COMPONENT_CLASS_PATH);

class NotificationsListComponent extends Component {}

module.exports = {
    selector: 'notifications-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: NotificationsListComponent,
    isUnique: true,
    component: 'NotificationsList',
    htmlFile: __dirname + '/../../notifications-list.component.html',
};