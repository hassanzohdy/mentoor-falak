const Component = require(COMPONENT_CLASS_PATH);

class DashboardPageComponent extends Component {}

module.exports = {
    selector: 'dashboard-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: DashboardPageComponent,
    isUnique: true,
    component: 'DashboardPage',
    htmlFile: __dirname + '/../../dashboard-page.component.html',
};