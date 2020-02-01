const Component = require(COMPONENT_CLASS_PATH);

class TopicPageComponent extends Component {}

module.exports = {
    selector: 'topic-page',
    isChild: false,
    handler: TopicPageComponent,
    isUnique: false,
    component: 'TopicPage',
    htmlFile: __dirname + '/../../topic-page.component.html',
};