const Component = require(COMPONENT_CLASS_PATH);

class NewProjectPageComponent extends Component {}

module.exports = {
    selector: 'new-project-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: NewProjectPageComponent,
    isUnique: true,
    component: 'NewProjectPage',
    htmlFile: __dirname + '/../../new-project-page.component.html',
};