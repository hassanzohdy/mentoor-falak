const Component = require(COMPONENT_CLASS_PATH);

class BugsListComponent extends Component {}

module.exports = {
    selector: 'bugs-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: BugsListComponent,
    isUnique: false,
    component: 'BugsList',
    htmlFile: __dirname + '/../../bugs-list.component.html',
};