const Component = require(COMPONENT_CLASS_PATH);

class TagsPageComponent extends Component {}

module.exports = {
    selector: 'tags-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TagsPageComponent,
    isUnique: true,
    component: 'TagsPage',
    htmlFile: __dirname + '/../../tags-page.component.html',
};