const Component = require(COMPONENT_CLASS_PATH);

class ProjectTeamsPageComponent extends Component {}

module.exports = {
    selector: 'project-teams-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectTeamsPageComponent,
    isUnique: true,
    component: 'ProjectTeamsPage',
    htmlFile: __dirname + '/../../project-teams-page.component.html',
};