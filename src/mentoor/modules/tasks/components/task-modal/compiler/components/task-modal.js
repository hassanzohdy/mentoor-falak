const Component = require(COMPONENT_CLASS_PATH);

class TaskModalComponent extends Component {}

module.exports = {
    selector: 'task-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TaskModalComponent,
    isUnique: false,
    component: 'TaskModal',
    htmlFile: __dirname + '/../../task-modal.component.html',
};