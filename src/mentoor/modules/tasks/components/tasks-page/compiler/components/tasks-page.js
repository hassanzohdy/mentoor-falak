const Component = require(COMPONENT_CLASS_PATH);

class TasksPageComponent extends Component {}

module.exports = {
    selector: 'tasks-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TasksPageComponent,
    isUnique: true,
    component: 'TasksPage',
    htmlFile: __dirname + '/../../tasks-page.component.html',
};