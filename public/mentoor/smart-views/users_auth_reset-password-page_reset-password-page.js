_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let elFu37I = eo('div',null,null,`class`,`authLayout`);
let elvYYA9 = eo('div',null,null,`class`,`auth`);
let el4Z1sT = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elXYojy = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let elWgBh9 = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let elqCj6Y = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elqCj6Y.formHandler) {
                    window.cfrmdlr = elqCj6Y.formHandler = new FormHandler(elqCj6Y, component);
                } else {
                    window.cfrmdlr = elqCj6Y.formHandler;
                }
            let cndD3yS = component.errorMsg;
this.setState('stDfXhd', cndD3yS);
if (cndD3yS) { 
let elvsV6K = eo('div','WOIf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let el4TrBZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elqCj6Y.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elqCj6Y.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
el4TrBZ.value = fval(component.email);
let cndrjxi = elqCj6Y.formHandler.getError(`email`);
this.setState('stYYLE8', cndrjxi);
if (cndrjxi) { 
let eljP5HY = eo('div','wAkf',null,`class`,`alert alert-danger`);
text(elqCj6Y.formHandler.getError(`email`));
ec('div');
}let elCUV66 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqCj6Y.formHandler.addError(`code`, 'required', trans('validation.required'));}return elqCj6Y.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cnd794t = elqCj6Y.formHandler.getError(`code`);
this.setState('stF8egW', cnd794t);
if (cnd794t) { 
let el2sgIY = eo('div','YxGf',null,`class`,`alert alert-danger`);
text(elqCj6Y.formHandler.getError(`code`));
ec('div');
}let eleqmz0 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqCj6Y.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elqCj6Y.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elqCj6Y.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndR9gK = elqCj6Y.formHandler.getError(`password`);
this.setState('stljf6q', cndR9gK);
if (cndR9gK) { 
let elUhvMy = eo('div','CXcf',null,`class`,`alert alert-danger`);
text(elqCj6Y.formHandler.getError(`password`));
ec('div');
}let elp4YmG = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqCj6Y.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elqCj6Y.formHandler.value('password')) {return elqCj6Y.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elqCj6Y.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndFksG = elqCj6Y.formHandler.getError(`confirmPassword`);
this.setState('st8fbnn', cndFksG);
if (cndFksG) { 
let elPe6LQ = eo('div','Ru3f',null,`class`,`alert alert-danger`);
text(elqCj6Y.formHandler.getError(`confirmPassword`));
ec('div');
}let eluj4yV = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndaWEP = !component.isForgot;
this.setState('sttTioV', cndaWEP);
let cndNatW = !(cndaWEP);
this.setState('st5WcXu', cndNatW);
if (cndaWEP) { 
let elRxN8U = eo('span','2Abf');
text(trans('reset'));
ec('span');
}else { 
let el8XJI8 = eo('div',null,null,`class`,`text-center`);
let elM5nZJ = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let eldyNdC = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elleYxR = eo('p');
let elSNJna = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elYKxFW = eo('i',null,null,`class`,`${fas('caret-left')} mr-2 icon`);
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