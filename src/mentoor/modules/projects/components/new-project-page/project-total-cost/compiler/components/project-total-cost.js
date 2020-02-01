const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ProjectTotalCostComponent extends ChildComponent {}

module.exports = {
    selector: 'project-total-cost',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ProjectTotalCostComponent,
    isUnique: false,
    component: 'ProjectTotalCost',
    htmlFile: __dirname + '/../../project-total-cost.component.html',
};