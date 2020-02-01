const Component = require(COMPONENT_CLASS_PATH);

class EinsteinPuzzleAnswersPageComponent extends Component {}

module.exports = {
    selector: 'einstein-puzzle-answers-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: EinsteinPuzzleAnswersPageComponent,
    isUnique: true,
    component: 'EinsteinPuzzleAnswersPage',
    htmlFile: __dirname + '/../../einstein-puzzle-answers-page.component.html',
};