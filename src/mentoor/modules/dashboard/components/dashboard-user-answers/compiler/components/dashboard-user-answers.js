const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class DashboardUserAnswersComponent extends ChildComponent {}

module.exports = {
    selector: 'dashboard-user-answers',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: DashboardUserAnswersComponent,
    isUnique: false,
    component: 'DashboardUserAnswers',
    htmlFile: __dirname + '/../../dashboard-user-answers.component.html',
};