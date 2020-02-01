const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class RejectedEinsteinNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'rejected-einstein-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: RejectedEinsteinNotificationComponent,
    isUnique: false,
    component: 'RejectedEinsteinNotification',
    htmlFile: __dirname + '/../../rejected-einstein-notification.component.html',
};