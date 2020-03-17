const Component = require(COMPONENT_CLASS_PATH);

class CoursesListComponent extends Component {}

module.exports = {
    selector: 'courses-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CoursesListComponent,
    isUnique: false,
    component: 'CoursesList',
    htmlFile: __dirname + '/../../courses-list.component.html',
};