const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class NewProjectTaskBoardComponent extends ChildComponent {}

module.exports = {
    selector: 'new-project-task-board',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: NewProjectTaskBoardComponent,
    isUnique: false,
    component: 'NewProjectTaskBoard',
    htmlFile: __dirname + '/../../new-project-task-board.component.html',
};