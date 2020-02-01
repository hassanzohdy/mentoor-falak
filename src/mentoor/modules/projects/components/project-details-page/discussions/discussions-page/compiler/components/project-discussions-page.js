const Component = require(COMPONENT_CLASS_PATH);

class ProjectDiscussionsPageComponent extends Component {}

module.exports = {
    selector: 'project-discussions-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectDiscussionsPageComponent,
    isUnique: true,
    component: 'ProjectDiscussionsPage',
    htmlFile: __dirname + '/../../project-discussions-page.component.html',
};