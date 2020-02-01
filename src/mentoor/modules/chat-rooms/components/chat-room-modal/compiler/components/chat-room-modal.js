const Component = require(COMPONENT_CLASS_PATH);

class ChatRoomModalComponent extends Component {}

module.exports = {
    selector: 'chat-room-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChatRoomModalComponent,
    isUnique: false,
    component: 'ChatRoomModal',
    htmlFile: __dirname + '/../../chat-room-modal.component.html',
};