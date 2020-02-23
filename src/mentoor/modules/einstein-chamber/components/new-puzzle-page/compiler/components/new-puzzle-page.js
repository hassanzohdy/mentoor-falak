const Component = require(COMPONENT_CLASS_PATH);

class NewPuzzlePageComponent extends Component {}

module.exports = {
    selector: 'new-puzzle-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: NewPuzzlePageComponent,
    isUnique: true,
    component: 'NewPuzzlePage',
    htmlFile: __dirname + '/../../new-puzzle-page.component.html',
};