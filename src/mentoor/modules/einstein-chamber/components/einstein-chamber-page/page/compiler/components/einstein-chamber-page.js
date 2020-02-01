const Component = require(COMPONENT_CLASS_PATH);

class EinsteinChamberPageComponent extends Component {}

module.exports = {
    selector: 'einstein-chamber-page',
    isChild: false,
    handler: EinsteinChamberPageComponent,
    isUnique: false,
    component: 'EinsteinChamberPage',
    htmlFile: __dirname + '/../../einstein-chamber-page.component.html',
};