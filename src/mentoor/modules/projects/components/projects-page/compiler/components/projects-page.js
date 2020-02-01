const Component = require(COMPONENT_CLASS_PATH);

class ProjectsPageComponent extends Component {}

module.exports = {
    selector: 'projects-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectsPageComponent,
    isUnique: true,
    component: 'ProjectsPage',
    htmlFile: __dirname + '/../../projects-page.component.html',
};