const Component = require(COMPONENT_CLASS_PATH);

class RegisterPageComponent extends Component {}

module.exports = {
    selector: 'register-page',
    isChild: false,
    handler: RegisterPageComponent,
    isUnique: false,
    component: 'RegisterPage',
    htmlFile: __dirname + '/../../register-page.component.html',
};