const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProfileSettingsTabComponent extends ChildComponent {}

module.exports = {
    selector: 'profile-settings-tab',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProfileSettingsTabComponent,
    isUnique: false,
    component: 'ProfileSettingsTab',
    htmlFile: __dirname + '/../../profile-settings-tab.component.html',
};