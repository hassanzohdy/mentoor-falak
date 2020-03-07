const Component = require(COMPONENT_CLASS_PATH);

class ChallengesPendingRequestsPageComponent extends Component {}

module.exports = {
    selector: 'challenges-pending-requests-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChallengesPendingRequestsPageComponent,
    isUnique: true,
    component: 'ChallengesPendingRequestsPage',
    htmlFile: __dirname + '/../../challenges-pending-requests-page.component.html',
};