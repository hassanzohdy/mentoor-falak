const Component = require(COMPONENT_CLASS_PATH);

class ProjectPollDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-poll-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectPollDetailsPageComponent,
    isUnique: true,
    component: 'ProjectPollDetailsPage',
    htmlFile: __dirname + '/../../project-poll-details-page.component.html',
};