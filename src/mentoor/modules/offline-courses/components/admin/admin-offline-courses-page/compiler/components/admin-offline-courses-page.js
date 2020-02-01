const Component = require(COMPONENT_CLASS_PATH);

class AdminOfflineCoursesPageComponent extends Component {}

module.exports = {
    selector: 'admin-offline-courses-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AdminOfflineCoursesPageComponent,
    isUnique: true,
    component: 'AdminOfflineCoursesPage',
    htmlFile: __dirname + '/../../admin-offline-courses-page.component.html',
};