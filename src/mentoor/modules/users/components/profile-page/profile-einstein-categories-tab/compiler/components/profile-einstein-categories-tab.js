const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProfileEinsteinCategoriesTabComponent extends ChildComponent {}

module.exports = {
    selector: 'profile-einstein-categories-tab',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProfileEinsteinCategoriesTabComponent,
    isUnique: false,
    component: 'ProfileEinsteinCategoriesTab',
    htmlFile: __dirname + '/../../profile-einstein-categories-tab.component.html',
};