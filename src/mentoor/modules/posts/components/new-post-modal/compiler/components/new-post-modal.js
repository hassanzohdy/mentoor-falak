const Component = require(COMPONENT_CLASS_PATH);

class NewPostModalComponent extends Component {}

module.exports = {
    selector: 'new-post-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: NewPostModalComponent,
    isUnique: false,
    component: 'NewPostModal',
    htmlFile: __dirname + '/../../new-post-modal.component.html',
};