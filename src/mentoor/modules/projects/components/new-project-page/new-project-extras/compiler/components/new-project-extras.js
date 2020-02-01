const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class NewProjectExtrasComponent extends ChildComponent {}

module.exports = {
    selector: 'new-project-extras',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: NewProjectExtrasComponent,
    isUnique: false,
    component: 'NewProjectExtras',
    htmlFile: __dirname + '/../../new-project-extras.component.html',
};