const Component = require(COMPONENT_CLASS_PATH);

class CourseCardComponent extends Component {}

module.exports = {
    selector: 'course-card',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseCardComponent,
    isUnique: false,
    component: 'CourseCard',
    htmlFile: __dirname + '/../../course-card.component.html',
};