const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class CourseSidebarComponent extends ChildComponent {}

module.exports = {
    selector: 'course-sidebar',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: CourseSidebarComponent,
    isUnique: false,
    component: 'CourseSidebar',
    htmlFile: __dirname + '/../../course-sidebar.component.html',
};