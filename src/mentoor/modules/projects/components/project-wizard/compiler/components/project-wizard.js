const Component = require(COMPONENT_CLASS_PATH);

class ProjectWizardComponent extends Component {}

module.exports = {
    selector: 'project-wizard',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectWizardComponent,
    isUnique: false,
    component: 'ProjectWizard',
    htmlFile: __dirname + '/../../project-wizard.component.html',
};