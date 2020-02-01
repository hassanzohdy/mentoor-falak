const Component = require(COMPONENT_CLASS_PATH);

class EinsteinPuzzlePageComponent extends Component {}

module.exports = {
    selector: 'einstein-puzzle-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: EinsteinPuzzlePageComponent,
    isUnique: true,
    component: 'EinsteinPuzzlePage',
    htmlFile: __dirname + '/../../einstein-puzzle-page.component.html',
};