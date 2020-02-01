const Component = require(COMPONENT_CLASS_PATH);

class ChatRoomsPanelComponent extends Component {}

module.exports = {
    selector: 'chat-rooms-panel',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChatRoomsPanelComponent,
    isUnique: true,
    component: 'ChatRoomsPanel',
    htmlFile: __dirname + '/../../chat-rooms-panel.component.html',
};