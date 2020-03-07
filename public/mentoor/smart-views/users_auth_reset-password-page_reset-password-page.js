_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let el31t0S = eo('div',null,null,`class`,`authLayout`);
let elCnVGh = eo('div',null,null,`class`,`auth`);
let elpXLje = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elyZ23T = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let elvKMYL = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let elQWYt6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elQWYt6.formHandler) {
                    window.cfrmdlr = elQWYt6.formHandler = new FormHandler(elQWYt6, component);
                } else {
                    window.cfrmdlr = elQWYt6.formHandler;
                }
            let cndD0ZO = component.errorMsg;
this.setState('stPJEq6', cndD0ZO);
if (cndD0ZO) { 
let el9l6dk = eo('div','HeZf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elAahhi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elQWYt6.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elQWYt6.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
elAahhi.value = fval(component.email);
let cndqoZl = elQWYt6.formHandler.getError(`email`);
this.setState('sticcc3', cndqoZl);
if (cndqoZl) { 
let elqLzME = eo('div','dDof',null,`class`,`alert alert-danger`);
text(elQWYt6.formHandler.getError(`email`));
ec('div');
}let elo7ni8 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQWYt6.formHandler.addError(`code`, 'required', trans('validation.required'));}return elQWYt6.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cnddwk_ = elQWYt6.formHandler.getError(`code`);
this.setState('stm9gpq', cnddwk_);
if (cnddwk_) { 
let el8ek6i = eo('div','7MCf',null,`class`,`alert alert-danger`);
text(elQWYt6.formHandler.getError(`code`));
ec('div');
}let elfhqRq = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQWYt6.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elQWYt6.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elQWYt6.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndcf3C = elQWYt6.formHandler.getError(`password`);
this.setState('st2jaJ8', cndcf3C);
if (cndcf3C) { 
let elJ756z = eo('div','uzUf',null,`class`,`alert alert-danger`);
text(elQWYt6.formHandler.getError(`password`));
ec('div');
}let elq7oGf = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQWYt6.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elQWYt6.formHandler.value('password')) {return elQWYt6.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elQWYt6.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndD7ot = elQWYt6.formHandler.getError(`confirmPassword`);
this.setState('stywmTo', cndD7ot);
if (cndD7ot) { 
let elzup5Q = eo('div','PTPf',null,`class`,`alert alert-danger`);
text(elQWYt6.formHandler.getError(`confirmPassword`));
ec('div');
}let elGEJYY = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndVKDZ = !component.isForgot;
this.setState('stZ2MvF', cndVKDZ);
let cndnJND = !(cndVKDZ);
this.setState('stocPJV', cndnJND);
if (cndVKDZ) { 
let el7Dkvy = eo('span','Swdf');
text(trans('reset'));
ec('span');
}else { 
let elHzww0 = eo('div',null,null,`class`,`text-center`);
let elRHvMT = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let elS2P2H = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elZ3UaS = eo('p');
let el84bkO = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let eluNsGq = eo('i',null,null,`class`,`${fas('caret-left')} mr-2 icon`);
ec('i');
text(`Back to login`);
ec('a');
ec('p');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });