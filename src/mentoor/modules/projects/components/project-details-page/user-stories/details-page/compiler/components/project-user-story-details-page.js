const Component = require(COMPONENT_CLASS_PATH);

class ProjectUserStoryDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-user-story-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectUserStoryDetailsPageComponent,
    isUnique: true,
    component: 'ProjectUserStoryDetailsPage',
    htmlFile: __dirname + '/../../project-user-story-details-page.component.html',
};