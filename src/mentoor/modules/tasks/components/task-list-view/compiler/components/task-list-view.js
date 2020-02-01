const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class TaskListViewComponent extends ChildComponent {}

module.exports = {
    selector: 'task-list-view',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: TaskListViewComponent,
    isUnique: false,
    component: 'TaskListView',
    htmlFile: __dirname + '/../../task-list-view.component.html',
};