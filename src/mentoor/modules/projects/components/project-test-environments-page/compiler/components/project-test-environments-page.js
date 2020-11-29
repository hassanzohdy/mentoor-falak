const Component = require(COMPONENT_CLASS_PATH);

class ProjectTestEnvironmentsPageComponent extends Component {}

module.exports = {
    selector: 'project-test-environments-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectTestEnvironmentsPageComponent,
    isUnique: true,
    component: 'ProjectTestEnvironmentsPage',
    htmlFile: __dirname + '/../../project-test-environments-page.component.html',
};