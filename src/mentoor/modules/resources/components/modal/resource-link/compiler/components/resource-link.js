const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceLinkComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-link',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceLinkComponent,
    isUnique: false,
    component: 'ResourceLink',
    htmlFile: __dirname + '/../../resource-link.component.html',
};