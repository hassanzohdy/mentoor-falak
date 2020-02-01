const Component = require(COMPONENT_CLASS_PATH);

class EinsteinChamberUnlockerComponent extends Component {}

module.exports = {
    selector: 'unlock-page',
    isChild: false,
    handler: EinsteinChamberUnlockerComponent,
    isUnique: false,
    component: 'EinsteinChamberUnlocker',
    htmlFile: __dirname + '/../../unlock-page.component.html',
};