const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class TestCaseModalComponent extends ChildComponent {}

module.exports = {
    selector: 'test-case-modal',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: TestCaseModalComponent,
    isUnique: false,
    component: 'TestCaseModal',
    htmlFile: __dirname + '/../../test-case-modal.component.html',
};