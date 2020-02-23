const Component = require(COMPONENT_CLASS_PATH);

class ChamperModerateComponent extends Component {}

module.exports = {
    selector: 'champer-moderate',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChamperModerateComponent,
    isUnique: false,
    component: 'ChamperModerate',
    htmlFile: __dirname + '/../../champer-moderate.component.html',
};