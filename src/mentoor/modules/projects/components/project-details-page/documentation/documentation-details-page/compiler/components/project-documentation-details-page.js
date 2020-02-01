const Component = require(COMPONENT_CLASS_PATH);

class ProjectDocumentationDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-documentation-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectDocumentationDetailsPageComponent,
    isUnique: true,
    component: 'ProjectDocumentationDetailsPage',
    htmlFile: __dirname + '/../../project-documentation-details-page.component.html',
};