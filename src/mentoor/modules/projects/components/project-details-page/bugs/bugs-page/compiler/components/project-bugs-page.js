const Component = require(COMPONENT_CLASS_PATH);

class ProjectBugsPageComponent extends Component {}

module.exports = {
    selector: 'project-bugs-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectBugsPageComponent,
    isUnique: true,
    component: 'ProjectBugsPage',
    htmlFile: __dirname + '/../../project-bugs-page.component.html',
};