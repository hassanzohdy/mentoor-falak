const Component = require(COMPONENT_CLASS_PATH);

class ProjectModulesPageComponent extends Component {}

module.exports = {
    selector: 'project-modules-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectModulesPageComponent,
    isUnique: true,
    component: 'ProjectModulesPage',
    htmlFile: __dirname + '/../../project-modules-page.component.html',
};