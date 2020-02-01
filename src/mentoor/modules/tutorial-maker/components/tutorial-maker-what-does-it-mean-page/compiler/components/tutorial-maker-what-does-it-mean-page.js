const Component = require(COMPONENT_CLASS_PATH);

class TutorialMakerWhatDoesItMeanPageComponent extends Component {}

module.exports = {
    selector: 'tutorial-maker-what-does-it-mean-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TutorialMakerWhatDoesItMeanPageComponent,
    isUnique: true,
    component: 'TutorialMakerWhatDoesItMeanPage',
    htmlFile: __dirname + '/../../tutorial-maker-what-does-it-mean-page.component.html',
};