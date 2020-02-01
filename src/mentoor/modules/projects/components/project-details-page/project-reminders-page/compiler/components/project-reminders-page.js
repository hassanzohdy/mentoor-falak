const Component = require(COMPONENT_CLASS_PATH);

class ProjectRemindersPageComponent extends Component {}

module.exports = {
    selector: 'project-reminders-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectRemindersPageComponent,
    isUnique: true,
    component: 'ProjectRemindersPage',
    htmlFile: __dirname + '/../../project-reminders-page.component.html',
};