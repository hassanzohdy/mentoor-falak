const Component = require(COMPONENT_CLASS_PATH);

class AttachmentsPreviewerComponent extends Component {}

module.exports = {
    selector: 'attachments-previewer',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AttachmentsPreviewerComponent,
    isUnique: false,
    component: 'AttachmentsPreviewer',
    htmlFile: __dirname + '/../../attachments-previewer.component.html',
};