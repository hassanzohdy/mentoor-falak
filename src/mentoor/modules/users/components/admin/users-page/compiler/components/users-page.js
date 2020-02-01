const Component = require(COMPONENT_CLASS_PATH);

class UsersPageComponent extends Component {}

module.exports = {
    selector: 'users-page',
    isChild: false,
    handler: UsersPageComponent,
    isUnique: false,
    component: 'UsersPage',
    htmlFile: __dirname + '/../../users-page.component.html',
};