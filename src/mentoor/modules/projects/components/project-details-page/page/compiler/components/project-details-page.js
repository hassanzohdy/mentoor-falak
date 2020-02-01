const Component = require(COMPONENT_CLASS_PATH);

class ProjectDetailsPageComponent extends Component {}

module.exports = {
    selector: 'project-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectDetailsPageComponent,
    isUnique: true,
    component: 'ProjectDetailsPage',
    htmlFile: __dirname + '/../../project-details-page.component.html',
};