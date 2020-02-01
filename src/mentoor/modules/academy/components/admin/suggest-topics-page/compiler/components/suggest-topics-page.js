const Component = require(COMPONENT_CLASS_PATH);

class SuggestTopicsPageComponent extends Component {}

module.exports = {
    selector: 'suggest-topics-page',
    isChild: false,
    handler: SuggestTopicsPageComponent,
    isUnique: false,
    component: 'SuggestTopicsPage',
    htmlFile: __dirname + '/../../suggest-topics-page.component.html',
};