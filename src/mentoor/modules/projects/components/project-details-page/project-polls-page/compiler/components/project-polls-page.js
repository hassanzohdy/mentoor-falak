const Component = require(COMPONENT_CLASS_PATH);

class ProjectPollsPageComponent extends Component {}

module.exports = {
    selector: 'project-polls-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectPollsPageComponent,
    isUnique: true,
    component: 'ProjectPollsPage',
    htmlFile: __dirname + '/../../project-polls-page.component.html',
};