const Component = require(COMPONENT_CLASS_PATH);

class JsonApiPreviewComponent extends Component {}

module.exports = {
    selector: 'json-api-preview',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: JsonApiPreviewComponent,
    isUnique: false,
    component: 'JsonApiPreview',
    htmlFile: __dirname + '/../../json-api-preview.component.html',
};