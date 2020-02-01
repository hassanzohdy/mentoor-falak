const Component = require(COMPONENT_CLASS_PATH);

class TutorialMakerSmackdownPageComponent extends Component {}

module.exports = {
    selector: 'tutorial-maker-smackdown-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TutorialMakerSmackdownPageComponent,
    isUnique: true,
    component: 'TutorialMakerSmackdownPage',
    htmlFile: __dirname + '/../../tutorial-maker-smackdown-page.component.html',
};