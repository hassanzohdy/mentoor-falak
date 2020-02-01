const Component = require(COMPONENT_CLASS_PATH);

class AdminCocktailPageComponent extends Component {}

module.exports = {
    selector: 'admin-cocktail-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AdminCocktailPageComponent,
    isUnique: true,
    component: 'AdminCocktailPage',
    htmlFile: __dirname + '/../../admin-cocktail-page.component.html',
};