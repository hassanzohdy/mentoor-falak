const Component = require(COMPONENT_CLASS_PATH);

class EinsteinAnswersComponent extends Component {}

module.exports = {
    selector: 'einstein-answers-page',
    isChild: false,
    handler: EinsteinAnswersComponent,
    isUnique: true,
    component: 'EinsteinAnswers',
    htmlFile: __dirname + '/../../answers-page.component.html',
};