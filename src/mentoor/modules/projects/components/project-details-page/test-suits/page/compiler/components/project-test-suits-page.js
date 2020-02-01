const Component = require(COMPONENT_CLASS_PATH);

class ProjectTestSuitsPageComponent extends Component {}

module.exports = {
    selector: 'project-test-suits-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectTestSuitsPageComponent,
    isUnique: true,
    component: 'ProjectTestSuitsPage',
    htmlFile: __dirname + '/../../project-test-suits-page.component.html',
};