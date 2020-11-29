const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceMobileAccountComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-mobile-account',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceMobileAccountComponent,
    isUnique: false,
    component: 'ResourceMobileAccount',
    htmlFile: __dirname + '/../../resource-mobile-account.component.html',
};