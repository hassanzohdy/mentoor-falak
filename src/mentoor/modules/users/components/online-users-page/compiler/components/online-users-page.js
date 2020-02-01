const Component = require(COMPONENT_CLASS_PATH);

class OnlineUsersPageComponent extends Component {}

module.exports = {
    selector: 'online-users-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: OnlineUsersPageComponent,
    isUnique: true,
    component: 'OnlineUsersPage',
    htmlFile: __dirname + '/../../online-users-page.component.html',
};