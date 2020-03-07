const Component = require(COMPONENT_CLASS_PATH);

class ArenaQuestionsListComponent extends Component {}

module.exports = {
    selector: 'arena-questions-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ArenaQuestionsListComponent,
    isUnique: false,
    component: 'ArenaQuestionsList',
    htmlFile: __dirname + '/../../arena-questions-list.component.html',
};