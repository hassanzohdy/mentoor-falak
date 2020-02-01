const Component = require(COMPONENT_CLASS_PATH);

class ResultsPageComponent extends Component {}

module.exports = {
    selector: 'results-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ResultsPageComponent,
    isUnique: true,
    component: 'ResultsPage',
    htmlFile: __dirname + '/../../results-page.component.html',
};