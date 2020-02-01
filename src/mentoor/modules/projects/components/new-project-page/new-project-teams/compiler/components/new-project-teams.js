const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class NewProjectTeamsComponent extends ChildComponent {}

module.exports = {
    selector: 'new-project-teams',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: NewProjectTeamsComponent,
    isUnique: false,
    component: 'NewProjectTeams',
    htmlFile: __dirname + '/../../new-project-teams.component.html',
};