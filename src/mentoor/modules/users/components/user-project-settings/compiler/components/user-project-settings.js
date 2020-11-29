const Component = require(COMPONENT_CLASS_PATH);

class UserProjectSettingsComponent extends Component {}

module.exports = {
    selector: 'user-project-settings',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: UserProjectSettingsComponent,
    isUnique: false,
    component: 'UserProjectSettings',
    htmlFile: __dirname + '/../../user-project-settings.component.html',
};