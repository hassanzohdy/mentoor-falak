const Component = require(COMPONENT_CLASS_PATH);

class BugModalComponent extends Component {}

module.exports = {
    selector: 'bug-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: BugModalComponent,
    isUnique: false,
    component: 'BugModal',
    htmlFile: __dirname + '/../../bug-modal.component.html',
};