const Component = require(COMPONENT_CLASS_PATH);

class ProjectLayoutComponent extends Component {}

module.exports = {
    selector: 'project-layout',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectLayoutComponent,
    isUnique: true,
    component: 'ProjectLayout',
    htmlFile: __dirname + '/../../project-layout.component.html',
};