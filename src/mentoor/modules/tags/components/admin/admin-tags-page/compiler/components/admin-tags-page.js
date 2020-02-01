const Component = require(COMPONENT_CLASS_PATH);

class AdminTagsPageComponent extends Component {}

module.exports = {
    selector: 'admin-tags-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AdminTagsPageComponent,
    isUnique: true,
    component: 'AdminTagsPage',
    htmlFile: __dirname + '/../../admin-tags-page.component.html',
};