const Component = require(COMPONENT_CLASS_PATH);

class ProjectDiscussionDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-discussion-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectDiscussionDetailsPageComponent,
    isUnique: true,
    component: 'ProjectDiscussionDetailsPage',
    htmlFile: __dirname + '/../../project-discussion-details-page.component.html',
};