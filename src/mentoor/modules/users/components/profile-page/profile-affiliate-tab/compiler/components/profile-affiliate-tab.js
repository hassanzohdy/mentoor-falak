const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProfileAffiliateTabComponent extends ChildComponent {}

module.exports = {
    selector: 'profile-affiliate-tab',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProfileAffiliateTabComponent,
    isUnique: false,
    component: 'ProfileAffiliateTab',
    htmlFile: __dirname + '/../../profile-affiliate-tab.component.html',
};