const Component = require(COMPONENT_CLASS_PATH);

class TopUsersPageComponent extends Component {}

module.exports = {
    selector: 'top-users-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TopUsersPageComponent,
    isUnique: true,
    component: 'TopUsersPage',
    htmlFile: __dirname + '/../../top-users-page.component.html',
};