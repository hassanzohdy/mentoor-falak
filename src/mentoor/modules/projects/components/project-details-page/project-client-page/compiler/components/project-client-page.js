const Component = require(COMPONENT_CLASS_PATH);

class ProjectClientPageComponent extends Component {}

module.exports = {
    selector: 'project-client-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectClientPageComponent,
    isUnique: true,
    component: 'ProjectClientPage',
    htmlFile: __dirname + '/../../project-client-page.component.html',
};