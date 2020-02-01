const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class RemoveNotificationBtnComponent extends ChildComponent {}

module.exports = {
    selector: 'remove-notification-btn',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: RemoveNotificationBtnComponent,
    isUnique: false,
    component: 'RemoveNotificationBtn',
    htmlFile: __dirname + '/../../remove-notification-btn.component.html',
};