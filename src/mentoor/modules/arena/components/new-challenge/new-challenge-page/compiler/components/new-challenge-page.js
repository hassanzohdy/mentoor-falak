const Component = require(COMPONENT_CLASS_PATH);

class NewChallengePageComponent extends Component {}

module.exports = {
    selector: 'new-challenge-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: NewChallengePageComponent,
    isUnique: true,
    component: 'NewChallengePage',
    htmlFile: __dirname + '/../../new-challenge-page.component.html',
};