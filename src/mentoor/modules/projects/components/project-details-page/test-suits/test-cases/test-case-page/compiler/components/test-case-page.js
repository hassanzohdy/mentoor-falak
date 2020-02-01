const Component = require(COMPONENT_CLASS_PATH);

class TestCasePageComponent extends Component {}

module.exports = {
    selector: 'test-case-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TestCasePageComponent,
    isUnique: true,
    component: 'TestCasePage',
    htmlFile: __dirname + '/../../test-case-page.component.html',
};