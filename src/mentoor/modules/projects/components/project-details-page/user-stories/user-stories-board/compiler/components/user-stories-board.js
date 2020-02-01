const Component = require(COMPONENT_CLASS_PATH);

class UserStoriesBoardComponent extends Component {}

module.exports = {
    selector: 'user-stories-board',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UserStoriesBoardComponent,
    isUnique: false,
    component: 'UserStoriesBoard',
    htmlFile: __dirname + '/../../user-stories-board.component.html',
};