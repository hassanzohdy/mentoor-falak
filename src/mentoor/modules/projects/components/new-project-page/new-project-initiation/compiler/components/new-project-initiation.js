const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class NewProjectInitiationComponent extends ChildComponent {}

module.exports = {
    selector: 'new-project-initiation',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: NewProjectInitiationComponent,
    isUnique: false,
    component: 'NewProjectInitiation',
    htmlFile: __dirname + '/../../new-project-initiation.component.html',
};