const Component = require(COMPONENT_CLASS_PATH);

class ProjectBugDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-bug-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectBugDetailsPageComponent,
    isUnique: true,
    component: 'ProjectBugDetailsPage',
    htmlFile: __dirname + '/../../project-bug-details-page.component.html',
};