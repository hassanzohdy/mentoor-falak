const Component = require(COMPONENT_CLASS_PATH);

class EinsteinPageComponent extends Component {}

module.exports = {
    selector: 'einstein-page',
    isChild: false,
    handler: EinsteinPageComponent,
    isUnique: false,
    component: 'EinsteinPage',
    htmlFile: __dirname + '/../../einstein-page.component.html',
};