const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class NewProjectMembersComponent extends ChildComponent {}

module.exports = {
    selector: 'new-project-members',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: NewProjectMembersComponent,
    isUnique: false,
    component: 'NewProjectMembers',
    htmlFile: __dirname + '/../../new-project-members.component.html',
};