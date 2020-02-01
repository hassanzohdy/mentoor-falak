const Component = require(COMPONENT_CLASS_PATH);

class ProjectSettingsPageComponent extends Component {}

module.exports = {
    selector: 'project-settings-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectSettingsPageComponent,
    isUnique: true,
    component: 'ProjectSettingsPage',
    htmlFile: __dirname + '/../../project-settings-page.component.html',
};