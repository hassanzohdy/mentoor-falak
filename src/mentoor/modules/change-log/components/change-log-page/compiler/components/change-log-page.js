const Component = require(COMPONENT_CLASS_PATH);

class ChangeLogPageComponent extends Component {}

module.exports = {
    selector: 'change-log-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChangeLogPageComponent,
    isUnique: true,
    component: 'ChangeLogPage',
    htmlFile: __dirname + '/../../change-log-page.component.html',
};