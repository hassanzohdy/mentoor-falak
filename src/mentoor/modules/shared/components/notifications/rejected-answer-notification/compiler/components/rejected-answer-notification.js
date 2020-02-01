const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class RejectedAnswerNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'rejected-answer-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: RejectedAnswerNotificationComponent,
    isUnique: false,
    component: 'RejectedAnswerNotification',
    htmlFile: __dirname + '/../../rejected-answer-notification.component.html',
};