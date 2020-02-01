const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProfileAcademyTracksTabComponent extends ChildComponent {}

module.exports = {
    selector: 'profile-academy-tracks-tab',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProfileAcademyTracksTabComponent,
    isUnique: false,
    component: 'ProfileAcademyTracksTab',
    htmlFile: __dirname + '/../../profile-academy-tracks-tab.component.html',
};