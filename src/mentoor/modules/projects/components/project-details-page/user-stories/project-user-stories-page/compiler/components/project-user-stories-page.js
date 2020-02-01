const Component = require(COMPONENT_CLASS_PATH);

class ProjectUserStoriesPageComponent extends Component {}

module.exports = {
    selector: 'project-user-stories-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectUserStoriesPageComponent,
    isUnique: true,
    component: 'ProjectUserStoriesPage',
    htmlFile: __dirname + '/../../project-user-stories-page.component.html',
};