const Component = require(COMPONENT_CLASS_PATH);

class ProjectFeaturesPageComponent extends Component {}

module.exports = {
    selector: 'project-features-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectFeaturesPageComponent,
    isUnique: true,
    component: 'ProjectFeaturesPage',
    htmlFile: __dirname + '/../../project-features-page.component.html',
};