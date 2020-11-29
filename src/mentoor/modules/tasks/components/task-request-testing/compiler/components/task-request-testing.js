const Component = require(COMPONENT_CLASS_PATH);

class TaskRequestTestingComponent extends Component {}

module.exports = {
    selector: 'task-request-testing',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TaskRequestTestingComponent,
    isUnique: false,
    component: 'TaskRequestTesting',
    htmlFile: __dirname + '/../../task-request-testing.component.html',
};