const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProfileOverviewTabComponent extends ChildComponent {}

module.exports = {
    selector: 'profile-overview-tab',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProfileOverviewTabComponent,
    isUnique: false,
    component: 'ProfileOverviewTab',
    htmlFile: __dirname + '/../../profile-overview-tab.component.html',
};