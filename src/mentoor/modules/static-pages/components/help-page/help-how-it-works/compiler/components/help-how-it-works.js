const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class HelpHowItWorksComponent extends ChildComponent {}

module.exports = {
    selector: 'help-how-it-works',
    isChild: true,
    handler: HelpHowItWorksComponent,
    isUnique: false,
    component: 'HelpHowItWorks',
    htmlFile: __dirname + '/../../help-how-it-works.component.html',
};