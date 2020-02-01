const Component = require(COMPONENT_CLASS_PATH);

class TutorialMakerComparePageComponent extends Component {}

module.exports = {
    selector: 'tutorial-maker-compare-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TutorialMakerComparePageComponent,
    isUnique: true,
    component: 'TutorialMakerComparePage',
    htmlFile: __dirname + '/../../tutorial-maker-compare-page.component.html',
};