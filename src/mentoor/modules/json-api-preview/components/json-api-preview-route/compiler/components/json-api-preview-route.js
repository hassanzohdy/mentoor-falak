const Component = require(COMPONENT_CLASS_PATH);

class JsonApiPreviewRouteComponent extends Component {}

module.exports = {
    selector: 'json-api-preview-route',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: JsonApiPreviewRouteComponent,
    isUnique: false,
    component: 'JsonApiPreviewRoute',
    htmlFile: __dirname + '/../../json-api-preview-route.component.html',
};