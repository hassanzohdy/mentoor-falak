const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceWebsiteAccountComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-website-account',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceWebsiteAccountComponent,
    isUnique: false,
    component: 'ResourceWebsiteAccount',
    htmlFile: __dirname + '/../../resource-website-account.component.html',
};