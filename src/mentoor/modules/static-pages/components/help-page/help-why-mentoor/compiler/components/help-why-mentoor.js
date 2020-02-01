const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class HelpWhyMentoorComponent extends ChildComponent {}

module.exports = {
    selector: 'help-why-mentoor',
    isChild: true,
    handler: HelpWhyMentoorComponent,
    isUnique: false,
    component: 'HelpWhyMentoor',
    htmlFile: __dirname + '/../../help-why-mentoor.component.html',
};