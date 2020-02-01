const Component = require(COMPONENT_CLASS_PATH);

class WordModalComponent extends Component {}

module.exports = {
    selector: 'word-modal',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: WordModalComponent,
    isUnique: false,
    component: 'WordModal',
    htmlFile: __dirname + '/../../word-modal.component.html',
};