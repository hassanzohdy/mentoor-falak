const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class TaskArchivedListComponent extends ChildComponent {}

module.exports = {
    selector: 'task-archived-list',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: TaskArchivedListComponent,
    isUnique: false,
    component: 'TaskArchivedList',
    htmlFile: __dirname + '/../../task-archived-list.component.html',
};