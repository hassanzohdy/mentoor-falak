const Component = require(COMPONENT_CLASS_PATH);

class ProjectUserStoryFormPageComponent extends Component {}

module.exports = {
    selector: 'project-user-story-form-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectUserStoryFormPageComponent,
    isUnique: true,
    component: 'ProjectUserStoryFormPage',
    htmlFile: __dirname + '/../../project-user-story-form-page.component.html',
};