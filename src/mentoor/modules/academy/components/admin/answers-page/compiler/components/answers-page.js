const Component = require(COMPONENT_CLASS_PATH);

class AnswersPageComponent extends Component {}

module.exports = {
    selector: 'answers-page',
    isChild: false,
    handler: AnswersPageComponent,
    isUnique: false,
    component: 'AnswersPage',
    htmlFile: __dirname + '/../../answers-page.component.html',
};