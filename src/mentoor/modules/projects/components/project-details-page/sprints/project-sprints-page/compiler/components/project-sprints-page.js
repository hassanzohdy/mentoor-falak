const Component = require(COMPONENT_CLASS_PATH);

class ProjectSprintsPageComponent extends Component {}

module.exports = {
    selector: 'project-sprints-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectSprintsPageComponent,
    isUnique: true,
    component: 'ProjectSprintsPage',
    htmlFile: __dirname + '/../../project-sprints-page.component.html',
};