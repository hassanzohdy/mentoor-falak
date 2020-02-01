const Component = require(COMPONENT_CLASS_PATH);

class ChatRoomsPageComponent extends Component {}

module.exports = {
    selector: 'chat-rooms-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChatRoomsPageComponent,
    isUnique: true,
    component: 'ChatRoomsPage',
    htmlFile: __dirname + '/../../chat-rooms-page.component.html',
};