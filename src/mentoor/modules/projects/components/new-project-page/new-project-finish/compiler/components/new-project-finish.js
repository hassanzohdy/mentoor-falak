const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class NewProjectFinishComponent extends ChildComponent {}

module.exports = {
    selector: 'new-project-finish',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: NewProjectFinishComponent,
    isUnique: false,
    component: 'NewProjectFinish',
    htmlFile: __dirname + '/../../new-project-finish.component.html',
};