const Component = require(COMPONENT_CLASS_PATH);

class SidebarComponent extends Component {}

module.exports = {
    selector: 'sidebar',
    isChild: false,
    handler: SidebarComponent,
    isUnique: true,
    component: 'Sidebar',
    htmlFile: __dirname + '/../../sidebar.component.html',
};