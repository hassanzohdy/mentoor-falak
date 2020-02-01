const Component = require(COMPONENT_CLASS_PATH);

class CourseVideoFormComponent extends Component {}

module.exports = {
    selector: 'course-video-form',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseVideoFormComponent,
    isUnique: false,
    component: 'CourseVideoForm',
    htmlFile: __dirname + '/../../course-video-form.component.html',
};