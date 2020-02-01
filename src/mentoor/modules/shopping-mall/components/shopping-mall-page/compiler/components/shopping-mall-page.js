const Component = require(COMPONENT_CLASS_PATH);

class ShoppingMallPageComponent extends Component {}

module.exports = {
    selector: 'shopping-mall-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ShoppingMallPageComponent,
    isUnique: true,
    component: 'ShoppingMallPage',
    htmlFile: __dirname + '/../../shopping-mall-page.component.html',
};