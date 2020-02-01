const Component = require(COMPONENT_CLASS_PATH);

class ProfilePageComponent extends Component {}

module.exports = {
    selector: 'profile-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProfilePageComponent,
    isUnique: true,
    component: 'ProfilePage',
    htmlFile: __dirname + '/../../profile-page.component.html',
};