const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class HelpWhatShouldYouKnowComponent extends ChildComponent {}

module.exports = {
    selector: 'help-what-should-you-know',
    isChild: true,
    handler: HelpWhatShouldYouKnowComponent,
    isUnique: false,
    component: 'HelpWhatShouldYouKnow',
    htmlFile: __dirname + '/../../help-what-should-you-know.component.html',
};