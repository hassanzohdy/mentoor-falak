const Component = require(COMPONENT_CLASS_PATH);

class ProjectSrsPageComponent extends Component {}

module.exports = {
    selector: 'project-srs-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectSrsPageComponent,
    isUnique: true,
    component: 'ProjectSrsPage',
    htmlFile: __dirname + '/../../project-srs-page.component.html',
};