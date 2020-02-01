const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class AddProjectBtnComponent extends ChildComponent {}

module.exports = {
    selector: 'add-project-btn',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: AddProjectBtnComponent,
    isUnique: false,
    component: 'AddProjectBtn',
    htmlFile: __dirname + '/../../add-project-btn.component.html',
};