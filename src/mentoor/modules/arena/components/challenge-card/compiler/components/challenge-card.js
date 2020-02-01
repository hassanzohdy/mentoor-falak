const Component = require(COMPONENT_CLASS_PATH);

class ChallengeCardComponent extends Component {}

module.exports = {
    selector: 'challenge-card',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChallengeCardComponent,
    isUnique: false,
    component: 'ChallengeCard',
    htmlFile: __dirname + '/../../challenge-card.component.html',
};