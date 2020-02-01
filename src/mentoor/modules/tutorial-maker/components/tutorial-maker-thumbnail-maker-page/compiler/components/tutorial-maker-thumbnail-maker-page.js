const Component = require(COMPONENT_CLASS_PATH);

class TutorialMakerThumbnailMakerPageComponent extends Component {}

module.exports = {
    selector: 'tutorial-maker-thumbnail-maker-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TutorialMakerThumbnailMakerPageComponent,
    isUnique: true,
    component: 'TutorialMakerThumbnailMakerPage',
    htmlFile: __dirname + '/../../tutorial-maker-thumbnail-maker-page.component.html',
};