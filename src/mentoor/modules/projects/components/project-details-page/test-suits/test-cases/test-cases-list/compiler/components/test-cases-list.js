const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class TestCasesListComponent extends ChildComponent {}

module.exports = {
    selector: 'test-cases-list',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: TestCasesListComponent,
    isUnique: false,
    component: 'TestCasesList',
    htmlFile: __dirname + '/../../test-cases-list.component.html',
};