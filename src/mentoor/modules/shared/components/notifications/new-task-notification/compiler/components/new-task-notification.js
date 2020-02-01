const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class NewTaskNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'new-task-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: NewTaskNotificationComponent,
    isUnique: false,
    component: 'NewTaskNotification',
    htmlFile: __dirname + '/../../new-task-notification.component.html',
};