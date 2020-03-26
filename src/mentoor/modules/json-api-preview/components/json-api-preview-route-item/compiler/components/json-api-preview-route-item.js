const Component = require(COMPONENT_CLASS_PATH);

class JsonApiPreviewRouteItemComponent extends Component {}

module.exports = {
    selector: 'json-api-preview-route-item',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: JsonApiPreviewRouteItemComponent,
    isUnique: false,
    component: 'JsonApiPreviewRouteItem',
    htmlFile: __dirname + '/../../json-api-preview-route-item.component.html',
};