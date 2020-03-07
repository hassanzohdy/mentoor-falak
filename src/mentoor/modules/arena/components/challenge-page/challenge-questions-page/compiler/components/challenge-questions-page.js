const Component = require(COMPONENT_CLASS_PATH);

class ChallengeQuestionsPageComponent extends Component {}

module.exports = {
    selector: 'challenge-questions-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChallengeQuestionsPageComponent,
    isUnique: true,
    component: 'ChallengeQuestionsPage',
    htmlFile: __dirname + '/../../challenge-questions-page.component.html',
};