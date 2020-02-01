const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProjectRecruitmentApplicationsModalComponent extends ChildComponent {}

module.exports = {
    selector: 'project-recruitment-applications-modal',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProjectRecruitmentApplicationsModalComponent,
    isUnique: false,
    component: 'ProjectRecruitmentApplicationsModal',
    htmlFile: __dirname + '/../../project-recruitment-applications-modal.component.html',
};