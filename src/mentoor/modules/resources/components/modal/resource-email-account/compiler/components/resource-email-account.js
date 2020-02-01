const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceEmailAccountComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-email-account',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceEmailAccountComponent,
    isUnique: false,
    component: 'ResourceEmailAccount',
    htmlFile: __dirname + '/../../resource-email-account.component.html',
};