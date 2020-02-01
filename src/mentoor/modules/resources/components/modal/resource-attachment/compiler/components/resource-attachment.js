const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceAttachmentComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-attachment',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceAttachmentComponent,
    isUnique: false,
    component: 'ResourceAttachment',
    htmlFile: __dirname + '/../../resource-attachment.component.html',
};