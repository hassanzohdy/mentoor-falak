const Component = require(COMPONENT_CLASS_PATH);

class NewCoursePageComponent extends Component {}

module.exports = {
    selector: 'new-course-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: NewCoursePageComponent,
    isUnique: true,
    component: 'NewCoursePage',
    htmlFile: __dirname + '/../../new-course-page.component.html',
};