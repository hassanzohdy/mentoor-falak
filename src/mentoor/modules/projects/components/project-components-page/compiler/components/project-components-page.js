const Component = require(COMPONENT_CLASS_PATH);

class ProjectComponentsPageComponent extends Component {}

module.exports = {
    selector: 'project-components-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectComponentsPageComponent,
    isUnique: true,
    component: 'ProjectComponentsPage',
    htmlFile: __dirname + '/../../project-components-page.component.html',
};