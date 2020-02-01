const Component = require(COMPONENT_CLASS_PATH);

class FlkMdbCheckboxComponent extends Component {}

module.exports = {
    selector: 'flk-mdb-checkbox',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkMdbCheckboxComponent,
    isUnique: false,
    component: 'FlkMdbCheckbox',
    htmlFile: __dirname + '/../../flk-mdb-checkbox.component.html',
};