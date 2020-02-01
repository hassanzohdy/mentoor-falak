const Component = require(COMPONENT_CLASS_PATH);

class ProjectShoppingMallPageComponent extends Component {}

module.exports = {
    selector: 'project-shopping-mall-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectShoppingMallPageComponent,
    isUnique: true,
    component: 'ProjectShoppingMallPage',
    htmlFile: __dirname + '/../../project-shopping-mall-page.component.html',
};