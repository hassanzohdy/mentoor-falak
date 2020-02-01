const Component = require(COMPONENT_CLASS_PATH);

class PollDetailsPageComponent extends Component {}

module.exports = {
    selector: 'poll-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PollDetailsPageComponent,
    isUnique: true,
    component: 'PollDetailsPage',
    htmlFile: __dirname + '/../../poll-details-page.component.html',
};