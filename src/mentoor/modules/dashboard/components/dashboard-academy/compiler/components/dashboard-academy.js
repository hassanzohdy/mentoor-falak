const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class DashboardAcademyComponent extends ChildComponent {}

module.exports = {
    selector: 'dashboard-academy',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: DashboardAcademyComponent,
    isUnique: false,
    component: 'DashboardAcademy',
    htmlFile: __dirname + '/../../dashboard-academy.component.html',
};