const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class CourseSectionsComponent extends ChildComponent {}

module.exports = {
    selector: 'course-sections',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: CourseSectionsComponent,
    isUnique: false,
    component: 'CourseSections',
    htmlFile: __dirname + '/../../course-sections.component.html',
};