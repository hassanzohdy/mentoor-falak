const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ModeratorAnswerNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'moderator-answer-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ModeratorAnswerNotificationComponent,
    isUnique: false,
    component: 'ModeratorAnswerNotification',
    htmlFile: __dirname + '/../../moderator-answer-notification.component.html',
};