const Component = require(COMPONENT_CLASS_PATH);

class CourseSectionsPageComponent extends Component {}

module.exports = {
    selector: 'course-sections-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseSectionsPageComponent,
    isUnique: true,
    component: 'CourseSectionsPage',
    htmlFile: __dirname + '/../../course-sections-page.component.html',
};