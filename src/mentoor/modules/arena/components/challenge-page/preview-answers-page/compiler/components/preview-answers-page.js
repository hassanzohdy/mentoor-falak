const Component = require(COMPONENT_CLASS_PATH);

class PreviewAnswersPageComponent extends Component {}

module.exports = {
    selector: 'preview-answers-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PreviewAnswersPageComponent,
    isUnique: true,
    component: 'PreviewAnswersPage',
    htmlFile: __dirname + '/../../preview-answers-page.component.html',
};