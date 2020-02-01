const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProjectBugNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'project-bug-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProjectBugNotificationComponent,
    isUnique: false,
    component: 'ProjectBugNotification',
    htmlFile: __dirname + '/../../project-bug-notification.component.html',
};