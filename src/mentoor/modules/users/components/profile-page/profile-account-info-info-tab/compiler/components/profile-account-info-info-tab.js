const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProfileAccountInfoInfoTabComponent extends ChildComponent {}

module.exports = {
    selector: 'profile-account-info-info-tab',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProfileAccountInfoInfoTabComponent,
    isUnique: false,
    component: 'ProfileAccountInfoInfoTab',
    htmlFile: __dirname + '/../../profile-account-info-info-tab.component.html',
};