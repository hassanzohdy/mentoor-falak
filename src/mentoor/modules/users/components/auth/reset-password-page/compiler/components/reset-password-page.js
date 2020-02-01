const Component = require(COMPONENT_CLASS_PATH);

class ResetPasswordPageComponent extends Component {}

module.exports = {
    selector: 'reset-password-page',
    isChild: false,
    handler: ResetPasswordPageComponent,
    isUnique: false,
    component: 'ResetPasswordPage',
    htmlFile: __dirname + '/../../reset-password-page.component.html',
};