const Component = require(COMPONENT_CLASS_PATH);

class CourseSectionVideosListComponent extends Component {}

module.exports = {
    selector: 'course-section-videos-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseSectionVideosListComponent,
    isUnique: false,
    component: 'CourseSectionVideosList',
    htmlFile: __dirname + '/../../course-section-videos-list.component.html',
};