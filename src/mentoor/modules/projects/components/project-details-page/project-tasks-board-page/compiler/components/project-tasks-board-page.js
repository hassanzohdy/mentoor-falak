const Component = require(COMPONENT_CLASS_PATH);

class ProjectTasksBoardPageComponent extends Component {}

module.exports = {
    selector: 'project-tasks-board-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectTasksBoardPageComponent,
    isUnique: true,
    component: 'ProjectTasksBoardPage',
    htmlFile: __dirname + '/../../project-tasks-board-page.component.html',
};