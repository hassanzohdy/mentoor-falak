const Component = require(COMPONENT_CLASS_PATH);

class JsonPreviewComponent extends Component {}

module.exports = {
    selector: 'json-preview',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: JsonPreviewComponent,
    isUnique: false,
    component: 'JsonPreview',
    htmlFile: __dirname + '/../../json-preview.component.html',
};