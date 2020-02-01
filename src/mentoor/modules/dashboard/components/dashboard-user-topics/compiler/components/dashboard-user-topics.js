const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class DashboardUserTopicsComponent extends ChildComponent {}

module.exports = {
    selector: 'dashboard-user-topics',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: DashboardUserTopicsComponent,
    isUnique: false,
    component: 'DashboardUserTopics',
    htmlFile: __dirname + '/../../dashboard-user-topics.component.html',
};