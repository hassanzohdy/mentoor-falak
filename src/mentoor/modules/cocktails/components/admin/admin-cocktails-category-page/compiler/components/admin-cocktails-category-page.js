const Component = require(COMPONENT_CLASS_PATH);

class AdminCocktailsCategoryPageComponent extends Component {}

module.exports = {
    selector: 'admin-cocktails-category-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AdminCocktailsCategoryPageComponent,
    isUnique: true,
    component: 'AdminCocktailsCategoryPage',
    htmlFile: __dirname + '/../../admin-cocktails-category-page.component.html',
};