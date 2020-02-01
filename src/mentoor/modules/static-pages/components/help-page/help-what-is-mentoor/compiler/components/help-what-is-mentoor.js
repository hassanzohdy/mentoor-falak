const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class HelpWhatIsMentoorComponent extends ChildComponent {}

module.exports = {
    selector: 'help-what-is-mentoor',
    isChild: true,
    handler: HelpWhatIsMentoorComponent,
    isUnique: false,
    component: 'HelpWhatIsMentoor',
    htmlFile: __dirname + '/../../help-what-is-mentoor.component.html',
};``