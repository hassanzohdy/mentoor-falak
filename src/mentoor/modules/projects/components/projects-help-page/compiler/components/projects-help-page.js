const Component = require(COMPONENT_CLASS_PATH);

class ProjectsHelpPageComponent extends Component {}

module.exports = {
    selector: 'projects-help-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectsHelpPageComponent,
    isUnique: true,
    component: 'ProjectsHelpPage',
    htmlFile: __dirname + '/../../projects-help-page.component.html',
};