const Component = require(COMPONENT_CLASS_PATH);

class ProjectTeamDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-team-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectTeamDetailsPageComponent,
    isUnique: true,
    component: 'ProjectTeamDetailsPage',
    htmlFile: __dirname + '/../../project-team-details-page.component.html',
};