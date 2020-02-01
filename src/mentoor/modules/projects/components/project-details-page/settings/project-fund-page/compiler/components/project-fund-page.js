const Component = require(COMPONENT_CLASS_PATH);

class ProjectFundPageComponent extends Component {}

module.exports = {
    selector: 'project-fund-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectFundPageComponent,
    isUnique: true,
    component: 'ProjectFundPage',
    htmlFile: __dirname + '/../../project-fund-page.component.html',
};