const Component = require(COMPONENT_CLASS_PATH);

class ProjectResourcesPageComponent extends Component {}

module.exports = {
    selector: 'project-resources-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectResourcesPageComponent,
    isUnique: true,
    component: 'ProjectResourcesPage',
    htmlFile: __dirname + '/../../project-resources-page.component.html',
};