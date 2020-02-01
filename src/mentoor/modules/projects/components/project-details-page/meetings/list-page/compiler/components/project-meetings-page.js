const Component = require(COMPONENT_CLASS_PATH);

class ProjectMeetingsPageComponent extends Component {}

module.exports = {
    selector: 'project-meetings-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectMeetingsPageComponent,
    isUnique: true,
    component: 'ProjectMeetingsPage',
    htmlFile: __dirname + '/../../project-meetings-page.component.html',
};