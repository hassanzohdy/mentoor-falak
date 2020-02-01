const Component = require(COMPONENT_CLASS_PATH);

class TodoListModalComponent extends Component {}

module.exports = {
    selector: 'todo-list-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TodoListModalComponent,
    isUnique: false,
    component: 'TodoListModal',
    htmlFile: __dirname + '/../../todo-list-modal.component.html',
};