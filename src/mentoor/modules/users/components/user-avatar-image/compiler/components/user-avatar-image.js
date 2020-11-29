const Component = require(COMPONENT_CLASS_PATH);

class UserAvatarImageComponent extends Component {}

module.exports = {
    selector: 'user-avatar-image',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UserAvatarImageComponent,
    isUnique: false,
    component: 'UserAvatarImage',
    htmlFile: __dirname + '/../../user-avatar-image.component.html',
};