const Component = require(COMPONENT_CLASS_PATH);

class GoldIconComponent extends Component {}

module.exports = {
    selector: 'gold-icon',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: GoldIconComponent,
    isUnique: false,
    component: 'GoldIcon',
    htmlFile: __dirname + '/../../gold-icon.component.html',
};