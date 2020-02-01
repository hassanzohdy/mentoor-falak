const Component = require(COMPONENT_CLASS_PATH);

class ResourceModalComponent extends Component {}

module.exports = {
    selector: 'resource-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ResourceModalComponent,
    isUnique: false,
    component: 'ResourceModal',
    htmlFile: __dirname + '/../../resource-modal.component.html',
};