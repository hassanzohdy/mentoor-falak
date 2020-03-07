const Component = require(COMPONENT_CLASS_PATH);

class ProjectModuleDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-module-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectModuleDetailsPageComponent,
    isUnique: true,
    component: 'ProjectModuleDetailsPage',
    htmlFile: __dirname + '/../../project-module-details-page.component.html',
};