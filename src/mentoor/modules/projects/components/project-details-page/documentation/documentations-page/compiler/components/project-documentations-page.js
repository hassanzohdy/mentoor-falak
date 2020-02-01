const Component = require(COMPONENT_CLASS_PATH);

class ProjectDocumentationsPageComponent extends Component {}

module.exports = {
    selector: 'project-documentations-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectDocumentationsPageComponent,
    isUnique: true,
    component: 'ProjectDocumentationsPage',
    htmlFile: __dirname + '/../../project-documentations-page.component.html',
};