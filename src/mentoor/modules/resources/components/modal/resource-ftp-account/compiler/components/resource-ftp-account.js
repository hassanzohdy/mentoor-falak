const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceFtpAccountComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-ftp-account',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceFtpAccountComponent,
    isUnique: false,
    component: 'ResourceFtpAccount',
    htmlFile: __dirname + '/../../resource-ftp-account.component.html',
};