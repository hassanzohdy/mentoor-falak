const Component = require(COMPONENT_CLASS_PATH);

class OfflineCourseDetailsPageComponent extends Component {}

module.exports = {
    selector: 'offline-course-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: OfflineCourseDetailsPageComponent,
    isUnique: true,
    component: 'OfflineCourseDetailsPage',
    htmlFile: __dirname + '/../../offline-course-details-page.component.html',
};