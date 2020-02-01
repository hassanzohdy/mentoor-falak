const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class TaskBoardViewComponent extends ChildComponent {}

module.exports = {
    selector: 'task-board-view',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: TaskBoardViewComponent,
    isUnique: false,
    component: 'TaskBoardView',
    htmlFile: __dirname + '/../../task-board-view.component.html',
};