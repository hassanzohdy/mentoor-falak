const Component = require(COMPONENT_CLASS_PATH);

class ProjectMeetingDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-meeting-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectMeetingDetailsPageComponent,
    isUnique: true,
    component: 'ProjectMeetingDetailsPage',
    htmlFile: __dirname + '/../../project-meeting-details-page.component.html',
};