const Component = require(COMPONENT_CLASS_PATH);

class ProjectChangeRequestsPageComponent extends Component {}

module.exports = {
    selector: 'project-change-requests-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectChangeRequestsPageComponent,
    isUnique: true,
    component: 'ProjectChangeRequestsPage',
    htmlFile: __dirname + '/../../project-change-requests-page.component.html',
};