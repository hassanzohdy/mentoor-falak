const Component = require(COMPONENT_CLASS_PATH);

class TopicsPageComponent extends Component {}

module.exports = {
    selector: 'topics-page',
    isChild: false,
    handler: TopicsPageComponent,
    isUnique: false,
    component: 'TopicsPage',
    htmlFile: __dirname + '/../../topics-page.component.html',
};