const Component = require(COMPONENT_CLASS_PATH);

class TableActionsComponent extends Component {}

module.exports = {
    selector: 'table-actions',
    isChild: false,
    handler: TableActionsComponent,
    isUnique: false,
    component: 'TableActions',
    htmlFile: __dirname + '/../../table-actions.component.html',
};