const Component = require(COMPONENT_CLASS_PATH);

class TutorialMakerPageComponent extends Component {}

module.exports = {
    selector: 'tutorial-maker-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TutorialMakerPageComponent,
    isUnique: true,
    component: 'TutorialMakerPage',
    htmlFile: __dirname + '/../../tutorial-maker-page.component.html',
};