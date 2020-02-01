const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProjectRecruitmentModalComponent extends ChildComponent {}

module.exports = {
    selector: 'project-recruitment-modal',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProjectRecruitmentModalComponent,
    isUnique: false,
    component: 'ProjectRecruitmentModal',
    htmlFile: __dirname + '/../../project-recruitment-modal.component.html',
};