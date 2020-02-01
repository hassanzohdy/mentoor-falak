const Component = require(COMPONENT_CLASS_PATH);

class ResourceListItemComponent extends Component {}

module.exports = {
    selector: 'resource-list-item',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ResourceListItemComponent,
    isUnique: false,
    component: 'ResourceListItem',
    htmlFile: __dirname + '/../../resource-list-item.component.html',
};