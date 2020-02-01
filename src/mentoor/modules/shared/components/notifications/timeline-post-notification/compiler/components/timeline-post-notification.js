const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class TimelinePostNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'timeline-post-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: TimelinePostNotificationComponent,
    isUnique: false,
    component: 'TimelinePostNotification',
    htmlFile: __dirname + '/../../timeline-post-notification.component.html',
};