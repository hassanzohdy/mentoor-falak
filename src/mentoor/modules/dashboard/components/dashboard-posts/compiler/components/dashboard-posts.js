const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class DashboardPostsComponent extends ChildComponent {}

module.exports = {
    selector: 'dashboard-posts',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: DashboardPostsComponent,
    isUnique: false,
    component: 'DashboardPosts',
    htmlFile: __dirname + '/../../dashboard-posts.component.html',
};