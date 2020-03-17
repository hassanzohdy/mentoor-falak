const Component = require(COMPONENT_CLASS_PATH);

class PdfPreviewComponent extends Component {}

module.exports = {
    selector: 'pdf-preview',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PdfPreviewComponent,
    isUnique: false,
    component: 'PdfPreview',
    htmlFile: __dirname + '/../../pdf-preview.component.html',
};