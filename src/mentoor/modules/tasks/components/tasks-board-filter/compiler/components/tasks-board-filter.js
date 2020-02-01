const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class TasksBoardFilterComponent extends ChildComponent {}

module.exports = {
    selector: 'tasks-board-filter',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: TasksBoardFilterComponent,
    isUnique: false,
    component: 'TasksBoardFilter',
    htmlFile: __dirname + '/../../tasks-board-filter.component.html',
};