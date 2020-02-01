const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class NewProjectStepsComponent extends ChildComponent {}

module.exports = {
    selector: 'new-project-steps',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: NewProjectStepsComponent,
    isUnique: false,
    component: 'NewProjectSteps',
    htmlFile: __dirname + '/../../new-project-steps.component.html',
};