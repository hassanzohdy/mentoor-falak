const Component = require(COMPONENT_CLASS_PATH);

class ProjectRecruitmentPageComponent extends Component {}

module.exports = {
    selector: 'project-recruitment-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectRecruitmentPageComponent,
    isUnique: true,
    component: 'ProjectRecruitmentPage',
    htmlFile: __dirname + '/../../project-recruitment-page.component.html',
};