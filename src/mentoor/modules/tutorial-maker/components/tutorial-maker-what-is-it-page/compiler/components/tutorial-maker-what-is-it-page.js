const Component = require(COMPONENT_CLASS_PATH);

class TutorialMakerWhatIsItPageComponent extends Component {}

module.exports = {
    selector: 'tutorial-maker-what-is-it-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TutorialMakerWhatIsItPageComponent,
    isUnique: true,
    component: 'TutorialMakerWhatIsItPage',
    htmlFile: __dirname + '/../../tutorial-maker-what-is-it-page.component.html',
};