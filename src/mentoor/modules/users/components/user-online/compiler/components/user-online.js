const Component = require(COMPONENT_CLASS_PATH);

class UserOnlineComponent extends Component {}

module.exports = {
    selector: 'user-online',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UserOnlineComponent,
    isUnique: false,
    component: 'UserOnline',
    htmlFile: __dirname + '/../../user-online.component.html',
};