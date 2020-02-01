const Component = require(COMPONENT_CLASS_PATH);

class CocktailModalComponent extends Component {}

module.exports = {
    selector: 'cocktail-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CocktailModalComponent,
    isUnique: false,
    component: 'CocktailModal',
    htmlFile: __dirname + '/../../cocktail-modal.component.html',
};