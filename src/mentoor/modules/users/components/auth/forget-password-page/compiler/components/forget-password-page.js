const Component = require(COMPONENT_CLASS_PATH);

class ForgetPasswordPageComponent extends Component {}

module.exports = {
    selector: 'forget-password-page',
    isChild: false,
    handler: ForgetPasswordPageComponent,
    isUnique: false,
    component: 'ForgetPasswordPage',
    htmlFile: __dirname + '/../../forget-password-page.component.html',
};