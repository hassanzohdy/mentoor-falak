const Component = require(COMPONENT_CLASS_PATH);

class AdminPostsPageComponent extends Component {}

module.exports = {
    selector: 'admin-posts-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AdminPostsPageComponent,
    isUnique: true,
    component: 'AdminPostsPage',
    htmlFile: __dirname + '/../../admin-posts-page.component.html',
};