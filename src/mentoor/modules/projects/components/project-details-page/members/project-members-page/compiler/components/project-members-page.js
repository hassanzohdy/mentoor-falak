const Component = require(COMPONENT_CLASS_PATH);

class ProjectMembersPageComponent extends Component {}

module.exports = {
    selector: 'project-members-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectMembersPageComponent,
    isUnique: true,
    component: 'ProjectMembersPage',
    htmlFile: __dirname + '/../../project-members-page.component.html',
};