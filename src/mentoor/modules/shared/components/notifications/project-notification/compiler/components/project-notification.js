const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProjectNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'project-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProjectNotificationComponent,
    isUnique: false,
    component: 'ProjectNotification',
    htmlFile: __dirname + '/../../project-notification.component.html',
};