const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ChatRoomNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'chat-room-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ChatRoomNotificationComponent,
    isUnique: false,
    component: 'ChatRoomNotification',
    htmlFile: __dirname + '/../../chat-room-notification.component.html',
};