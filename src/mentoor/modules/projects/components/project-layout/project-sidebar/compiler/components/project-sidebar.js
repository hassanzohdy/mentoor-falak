const Component = require(COMPONENT_CLASS_PATH);

class ProjectSidebarComponent extends Component {}

module.exports = {
    selector: 'project-sidebar',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectSidebarComponent,
    isUnique: true,
    component: 'ProjectSidebar',
    htmlFile: __dirname + '/../../project-sidebar.component.html',
};