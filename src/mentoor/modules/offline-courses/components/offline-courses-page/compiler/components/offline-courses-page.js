const Component = require(COMPONENT_CLASS_PATH);

class OfflineCoursesPageComponent extends Component {}

module.exports = {
    selector: 'offline-courses-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: OfflineCoursesPageComponent,
    isUnique: true,
    component: 'OfflineCoursesPage',
    htmlFile: __dirname + '/../../offline-courses-page.component.html',
};