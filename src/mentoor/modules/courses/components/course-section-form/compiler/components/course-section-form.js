const Component = require(COMPONENT_CLASS_PATH);

class CourseSectionFormComponent extends Component {}

module.exports = {
    selector: 'course-section-form',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseSectionFormComponent,
    isUnique: false,
    component: 'CourseSectionForm',
    htmlFile: __dirname + '/../../course-section-form.component.html',
};