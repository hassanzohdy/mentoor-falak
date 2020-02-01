const Component = require(COMPONENT_CLASS_PATH);

class ProjectDiscussionFormComponent extends Component {}

module.exports = {
    selector: 'project-discussion-form',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectDiscussionFormComponent,
    isUnique: false,
    component: 'ProjectDiscussionForm',
    htmlFile: __dirname + '/../../project-discussion-form.component.html',
};