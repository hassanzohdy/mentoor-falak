const Component = require(COMPONENT_CLASS_PATH);

class EinsteinChamberShopComponent extends Component {}

module.exports = {
    selector: 'shop-page',
    isChild: false,
    handler: EinsteinChamberShopComponent,
    isUnique: false,
    component: 'EinsteinChamberShop',
    htmlFile: __dirname + '/../../shop-page.component.html',
};