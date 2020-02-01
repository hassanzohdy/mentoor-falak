const Component = require(COMPONENT_CLASS_PATH);

class UserCardComponent extends Component {}

module.exports = {
    selector: 'user-card',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UserCardComponent,
    isUnique: false,
    component: 'UserCard',
    htmlFile: __dirname + '/../../user-card.component.html',
};