const Component = require(COMPONENT_CLASS_PATH);

class CourseDashboardPageComponent extends Component {}

module.exports = {
    selector: 'course-dashboard-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseDashboardPageComponent,
    isUnique: true,
    component: 'CourseDashboardPage',
    htmlFile: __dirname + '/../../course-dashboard-page.component.html',
};