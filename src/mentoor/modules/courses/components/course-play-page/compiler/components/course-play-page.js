const Component = require(COMPONENT_CLASS_PATH);

class CoursePlayPageComponent extends Component {}

module.exports = {
    selector: 'course-play-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CoursePlayPageComponent,
    isUnique: true,
    component: 'CoursePlayPage',
    htmlFile: __dirname + '/../../course-play-page.component.html',
};