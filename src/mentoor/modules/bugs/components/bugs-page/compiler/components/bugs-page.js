const Component = require(COMPONENT_CLASS_PATH);

class BugsPageComponent extends Component {}

module.exports = {
    selector: 'bugs-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: BugsPageComponent,
    isUnique: true,
    component: 'BugsPage',
    htmlFile: __dirname + '/../../bugs-page.component.html',
};