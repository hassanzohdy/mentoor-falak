const Component = require(COMPONENT_CLASS_PATH);

class PollsPageComponent extends Component {}

module.exports = {
    selector: 'polls-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PollsPageComponent,
    isUnique: true,
    component: 'PollsPage',
    htmlFile: __dirname + '/../../polls-page.component.html',
};