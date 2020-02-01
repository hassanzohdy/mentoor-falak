const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class HelpWhereToStartComponent extends ChildComponent {}

module.exports = {
    selector: 'help-where-to-start',
    isChild: true,
    handler: HelpWhereToStartComponent,
    isUnique: false,
    component: 'HelpWhereToStart',
    htmlFile: __dirname + '/../../help-where-to-start.component.html',
};