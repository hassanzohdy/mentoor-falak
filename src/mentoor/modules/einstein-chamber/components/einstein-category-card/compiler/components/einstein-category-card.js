const Component = require(COMPONENT_CLASS_PATH);

class EinsteinCategoryCardComponent extends Component {}

module.exports = {
    selector: 'einstein-category-card',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: EinsteinCategoryCardComponent,
    isUnique: false,
    component: 'EinsteinCategoryCard',
    htmlFile: __dirname + '/../../einstein-category-card.component.html',
};