const Component = require(COMPONENT_CLASS_PATH);

class ResourcesListComponent extends Component {}

module.exports = {
    selector: 'resources-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ResourcesListComponent,
    isUnique: false,
    component: 'ResourcesList',
    htmlFile: __dirname + '/../../resources-list.component.html',
};