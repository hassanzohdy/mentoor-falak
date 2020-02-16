_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let elgx4Bd = eo('div',null,null,`class`,`authLayout`);
let elIZweP = eo('div',null,null,`class`,`auth`);
let el5_7Rh = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elyDX1J = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let elMpyzu = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let elgFkh0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elgFkh0.formHandler) {
                    window.cfrmdlr = elgFkh0.formHandler = new FormHandler(elgFkh0, component);
                } else {
                    window.cfrmdlr = elgFkh0.formHandler;
                }
            let cndGeH0 = component.errorMsg;
this.setState('st7em8E', cndGeH0);
if (cndGeH0) { 
let elLp84z = eo('div','Lilf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elCQA4y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elgFkh0.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elgFkh0.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
elCQA4y.value = fval(component.email);
let cndTQsp = elgFkh0.formHandler.getError(`email`);
this.setState('stzJgcR', cndTQsp);
if (cndTQsp) { 
let elgQ9hz = eo('div','uiSf',null,`class`,`alert alert-danger`);
text(elgFkh0.formHandler.getError(`email`));
ec('div');
}let elRrwAp = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elgFkh0.formHandler.addError(`code`, 'required', trans('validation.required'));}return elgFkh0.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cndu9Ta = elgFkh0.formHandler.getError(`code`);
this.setState('st8w4h9', cndu9Ta);
if (cndu9Ta) { 
let elmv8kb = eo('div','Vlif',null,`class`,`alert alert-danger`);
text(elgFkh0.formHandler.getError(`code`));
ec('div');
}let elZacTU = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elgFkh0.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elgFkh0.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elgFkh0.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndXnzN = elgFkh0.formHandler.getError(`password`);
this.setState('stpcw_G', cndXnzN);
if (cndXnzN) { 
let el3ikaP = eo('div','P_Af',null,`class`,`alert alert-danger`);
text(elgFkh0.formHandler.getError(`password`));
ec('div');
}let el5KL1V = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elgFkh0.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elgFkh0.formHandler.value('password')) {return elgFkh0.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elgFkh0.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndR7y2 = elgFkh0.formHandler.getError(`confirmPassword`);
this.setState('stqiIPD', cndR7y2);
if (cndR7y2) { 
let elq49nN = eo('div','nOTf',null,`class`,`alert alert-danger`);
text(elgFkh0.formHandler.getError(`confirmPassword`));
ec('div');
}let el4634O = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndTDqd = !component.isForgot;
this.setState('stFO5KG', cndTDqd);
let cndH_5x = !(cndTDqd);
this.setState('stiOnhL', cndH_5x);
if (cndTDqd) { 
let elOmNzu = eo('span','523f');
text(trans('reset'));
ec('span');
}else { 
let elV_YTY = eo('div',null,null,`class`,`text-center`);
let elZMqaC = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elU7zAN = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let el1vCNF = eo('p');
let elS8QVd = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elRv7FX = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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