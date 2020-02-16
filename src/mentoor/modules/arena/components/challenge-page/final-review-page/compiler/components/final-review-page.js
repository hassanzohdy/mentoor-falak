const Component = require(COMPONENT_CLASS_PATH);

class FinalReviewPageComponent extends Component {}

module.exports = {
    selector: 'final-review-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FinalReviewPageComponent,
    isUnique: true,
    component: 'FinalReviewPage',
    htmlFile: __dirname + '/../../final-review-page.component.html',
};