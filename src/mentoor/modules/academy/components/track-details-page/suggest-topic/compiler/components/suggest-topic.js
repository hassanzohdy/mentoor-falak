const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class SuggestTopicComponent extends ChildComponent {}

module.exports = {
    selector: 'suggest-topic',
    isChild: true,
    handler: SuggestTopicComponent,
    isUnique: false,
    component: 'SuggestTopic',
    htmlFile: __dirname + '/../../suggest-topic.component.html',
};