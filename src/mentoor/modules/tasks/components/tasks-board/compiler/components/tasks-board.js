const Component = require(COMPONENT_CLASS_PATH);

class TasksBoardComponent extends Component {}

module.exports = {
    selector: 'tasks-board',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TasksBoardComponent,
    isUnique: false,
    component: 'TasksBoard',
    htmlFile: __dirname + '/../../tasks-board.component.html',
};