const Component = require(COMPONENT_CLASS_PATH);

class TasksListComponent extends Component {}

module.exports = {
    selector: 'tasks-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TasksListComponent,
    isUnique: false,
    component: 'TasksList',
    htmlFile: __dirname + '/../../tasks-list.component.html',
};