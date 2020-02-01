const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class EinsteinAnswerFormComponent extends ChildComponent {}

module.exports = {
    selector: 'einstein-answer-form',
    isChild: true,
    handler: EinsteinAnswerFormComponent,
    isUnique: false,
    component: 'EinsteinAnswerForm',
    htmlFile: __dirname + '/../../einstein-answer-form.component.html',
};