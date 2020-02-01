const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceImageComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-image',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceImageComponent,
    isUnique: false,
    component: 'ResourceImage',
    htmlFile: __dirname + '/../../resource-image.component.html',
};