const Component = require(COMPONENT_CLASS_PATH);

class TutorialMakerSeriesPageComponent extends Component {}

module.exports = {
    selector: 'tutorial-maker-series-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TutorialMakerSeriesPageComponent,
    isUnique: true,
    component: 'TutorialMakerSeriesPage',
    htmlFile: __dirname + '/../../tutorial-maker-series-page.component.html',
};