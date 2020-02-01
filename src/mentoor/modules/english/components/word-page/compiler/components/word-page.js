const Component = require(COMPONENT_CLASS_PATH);

class WordPageComponent extends Component {}

module.exports = {
    selector: 'word-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: WordPageComponent,
    isUnique: true,
    component: 'WordPage',
    htmlFile: __dirname + '/../../word-page.component.html',
};