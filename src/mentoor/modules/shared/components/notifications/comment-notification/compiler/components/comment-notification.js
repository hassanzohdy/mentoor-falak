const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class CommentNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'comment-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: CommentNotificationComponent,
    isUnique: false,
    component: 'CommentNotification',
    htmlFile: __dirname + '/../../comment-notification.component.html',
};