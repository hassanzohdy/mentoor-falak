const Component = require(COMPONENT_CLASS_PATH);

class NewItemBtnComponent extends Component {}

module.exports = {
    selector: 'new-item-btn',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: NewItemBtnComponent,
    isUnique: false,
    component: 'NewItemBtn',
    htmlFile: __dirname + '/../../new-item-btn.component.html',
};