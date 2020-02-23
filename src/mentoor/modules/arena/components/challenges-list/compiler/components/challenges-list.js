const Component = require(COMPONENT_CLASS_PATH);

class ChallengesListComponent extends Component {}

module.exports = {
    selector: 'challenges-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChallengesListComponent,
    isUnique: false,
    component: 'ChallengesList',
    htmlFile: __dirname + '/../../challenges-list.component.html',
};