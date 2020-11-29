const Component = require(COMPONENT_CLASS_PATH);

class TaskUserImageComponent extends Component {}

module.exports = {
    selector: 'task-user-image',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TaskUserImageComponent,
    isUnique: false,
    component: 'TaskUserImage',
    htmlFile: __dirname + '/../../task-user-image.component.html',
};