const Component = require(COMPONENT_CLASS_PATH);

class TaskScoreComponent extends Component {}

module.exports = {
    selector: 'task-score',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TaskScoreComponent,
    isUnique: false,
    component: 'TaskScore',
    htmlFile: __dirname + '/../../task-score.component.html',
};