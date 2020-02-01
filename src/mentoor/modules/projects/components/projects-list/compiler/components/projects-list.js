const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProjectsListComponent extends ChildComponent {}

module.exports = {
    selector: 'projects-list',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProjectsListComponent,
    isUnique: false,
    component: 'ProjectsList',
    htmlFile: __dirname + '/../../projects-list.component.html',
};