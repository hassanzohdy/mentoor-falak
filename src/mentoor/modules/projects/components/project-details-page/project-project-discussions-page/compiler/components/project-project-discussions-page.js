const Component = require(COMPONENT_CLASS_PATH);

class ProjectProjectDiscussionsPageComponent extends Component {}

module.exports = {
    selector: 'project-project-discussions-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectProjectDiscussionsPageComponent,
    isUnique: true,
    component: 'ProjectProjectDiscussionsPage',
    htmlFile: __dirname + '/../../project-project-discussions-page.component.html',
};