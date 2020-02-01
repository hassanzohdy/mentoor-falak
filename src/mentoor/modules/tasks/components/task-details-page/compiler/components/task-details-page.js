const Component = require(COMPONENT_CLASS_PATH);

class TaskDetailsPageComponent extends Component {}

module.exports = {
    selector: 'task-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TaskDetailsPageComponent,
    isUnique: true,
    component: 'TaskDetailsPage',
    htmlFile: __dirname + '/../../task-details-page.component.html',
};