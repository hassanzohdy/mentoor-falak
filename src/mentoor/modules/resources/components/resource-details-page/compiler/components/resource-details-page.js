const Component = require(COMPONENT_CLASS_PATH);

class ResourceDetailsPageComponent extends Component {}

module.exports = {
    selector: 'resource-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ResourceDetailsPageComponent,
    isUnique: true,
    component: 'ResourceDetailsPage',
    htmlFile: __dirname + '/../../resource-details-page.component.html',
};