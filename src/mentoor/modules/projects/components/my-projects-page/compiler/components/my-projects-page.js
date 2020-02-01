const Component = require(COMPONENT_CLASS_PATH);

class MyProjectsPageComponent extends Component {}

module.exports = {
    selector: 'my-projects-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: MyProjectsPageComponent,
    isUnique: true,
    component: 'MyProjectsPage',
    htmlFile: __dirname + '/../../my-projects-page.component.html',
};