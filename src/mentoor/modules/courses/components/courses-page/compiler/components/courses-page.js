const Component = require(COMPONENT_CLASS_PATH);

class CoursesPageComponent extends Component {}

module.exports = {
    selector: 'courses-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CoursesPageComponent,
    isUnique: true,
    component: 'CoursesPage',
    htmlFile: __dirname + '/../../courses-page.component.html',
};