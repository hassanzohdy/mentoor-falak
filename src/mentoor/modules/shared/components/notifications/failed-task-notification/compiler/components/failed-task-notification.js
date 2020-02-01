const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class FailedTaskNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'failed-task-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: FailedTaskNotificationComponent,
    isUnique: false,
    component: 'FailedTaskNotification',
    htmlFile: __dirname + '/../../failed-task-notification.component.html',
};