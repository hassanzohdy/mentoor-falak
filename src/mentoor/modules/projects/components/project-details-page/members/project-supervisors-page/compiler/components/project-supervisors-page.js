const Component = require(COMPONENT_CLASS_PATH);

class ProjectSupervisorsPageComponent extends Component {}

module.exports = {
    selector: 'project-supervisors-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectSupervisorsPageComponent,
    isUnique: true,
    component: 'ProjectSupervisorsPage',
    htmlFile: __dirname + '/../../project-supervisors-page.component.html',
};