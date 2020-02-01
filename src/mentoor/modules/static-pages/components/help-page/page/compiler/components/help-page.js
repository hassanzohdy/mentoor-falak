const Component = require(COMPONENT_CLASS_PATH);

class HelpPageComponent extends Component {}

module.exports = {
    selector: 'help-page',
    isChild: false,
    handler: HelpPageComponent,
    isUnique: true,
    component: 'HelpPage',
    htmlFile: __dirname + '/../../help-page.component.html',
};