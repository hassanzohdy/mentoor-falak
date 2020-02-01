const Component = require(COMPONENT_CLASS_PATH);

class ChatRoomsPuzzlesAnswersPageComponent extends Component {}

module.exports = {
    selector: 'chat-rooms-puzzles-answers-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChatRoomsPuzzlesAnswersPageComponent,
    isUnique: true,
    component: 'ChatRoomsPuzzlesAnswersPage',
    htmlFile: __dirname + '/../../chat-rooms-puzzles-answers-page.component.html',
};