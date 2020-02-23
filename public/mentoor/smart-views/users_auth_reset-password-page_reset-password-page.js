_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let elajg7u = eo('div',null,null,`class`,`authLayout`);
let el5ADbL = eo('div',null,null,`class`,`auth`);
let elGDuVP = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elK8sL8 = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let elM9kld = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let elKexkn = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elKexkn.formHandler) {
                    window.cfrmdlr = elKexkn.formHandler = new FormHandler(elKexkn, component);
                } else {
                    window.cfrmdlr = elKexkn.formHandler;
                }
            let cndk6ME = component.errorMsg;
this.setState('stBE_S_', cndk6ME);
if (cndk6ME) { 
let elHEsGT = eo('div','ibdf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let eluruK4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elKexkn.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elKexkn.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
eluruK4.value = fval(component.email);
let cndp9e1 = elKexkn.formHandler.getError(`email`);
this.setState('stvri2F', cndp9e1);
if (cndp9e1) { 
let elhK96o = eo('div','m3df',null,`class`,`alert alert-danger`);
text(elKexkn.formHandler.getError(`email`));
ec('div');
}let elLjLRN = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKexkn.formHandler.addError(`code`, 'required', trans('validation.required'));}return elKexkn.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cndrc6c = elKexkn.formHandler.getError(`code`);
this.setState('steuGi4', cndrc6c);
if (cndrc6c) { 
let ely4WKK = eo('div','l40f',null,`class`,`alert alert-danger`);
text(elKexkn.formHandler.getError(`code`));
ec('div');
}let elqmgsH = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKexkn.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elKexkn.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elKexkn.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndAgMN = elKexkn.formHandler.getError(`password`);
this.setState('stsGSlq', cndAgMN);
if (cndAgMN) { 
let elJOs3u = eo('div','Hn8f',null,`class`,`alert alert-danger`);
text(elKexkn.formHandler.getError(`password`));
ec('div');
}let elB7FTZ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKexkn.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elKexkn.formHandler.value('password')) {return elKexkn.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elKexkn.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cnd0GQ5 = elKexkn.formHandler.getError(`confirmPassword`);
this.setState('stQdjI8', cnd0GQ5);
if (cnd0GQ5) { 
let elJtAJ2 = eo('div','f4Gf',null,`class`,`alert alert-danger`);
text(elKexkn.formHandler.getError(`confirmPassword`));
ec('div');
}let elPBkA7 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndbeZk = !component.isForgot;
this.setState('stkF2KX', cndbeZk);
let cndUUrW = !(cndbeZk);
this.setState('st4j8tv', cndUUrW);
if (cndbeZk) { 
let elXAh3e = eo('span','O4pf');
text(trans('reset'));
ec('span');
}else { 
let el3w8Ma = eo('div',null,null,`class`,`text-center`);
let eljkGxo = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elEKU2d = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elQlJHi = eo('p');
let elXEx20 = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elt8D3o = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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