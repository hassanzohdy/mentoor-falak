const Component = require(COMPONENT_CLASS_PATH);

class TaskQuickPreviewComponent extends Component {}

module.exports = {
    selector: 'task-quick-preview',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TaskQuickPreviewComponent,
    isUnique: false,
    component: 'TaskQuickPreview',
    htmlFile: __dirname + '/../../task-quick-preview.component.html',
};