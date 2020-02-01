const Component = require(COMPONENT_CLASS_PATH);

class ProjectSprintDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-sprint-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectSprintDetailsPageComponent,
    isUnique: true,
    component: 'ProjectSprintDetailsPage',
    htmlFile: __dirname + '/../../project-sprint-details-page.component.html',
};