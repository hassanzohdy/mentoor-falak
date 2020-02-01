const Component = require(COMPONENT_CLASS_PATH);

class TaskChecklistComponent extends Component {}

module.exports = {
    selector: 'task-checklist',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TaskChecklistComponent,
    isUnique: false,
    component: 'TaskChecklist',
    htmlFile: __dirname + '/../../task-checklist.component.html',
};