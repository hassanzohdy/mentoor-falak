const Component = require(COMPONENT_CLASS_PATH);

class CourseDetailsPageComponent extends Component {}

module.exports = {
    selector: 'course-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseDetailsPageComponent,
    isUnique: true,
    component: 'CourseDetailsPage',
    htmlFile: __dirname + '/../../course-details-page.component.html',
};