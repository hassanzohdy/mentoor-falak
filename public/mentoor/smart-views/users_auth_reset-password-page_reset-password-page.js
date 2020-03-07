_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let el3LmW8 = eo('div',null,null,`class`,`authLayout`);
let elPzYIV = eo('div',null,null,`class`,`auth`);
let elYSmtE = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elN_rGG = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let el6zzVT = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let el0dDuG = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! el0dDuG.formHandler) {
                    window.cfrmdlr = el0dDuG.formHandler = new FormHandler(el0dDuG, component);
                } else {
                    window.cfrmdlr = el0dDuG.formHandler;
                }
            let cnd8Jy7 = component.errorMsg;
this.setState('ste077F', cnd8Jy7);
if (cnd8Jy7) { 
let el9M3_M = eo('div','u3lf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elmaZxJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return el0dDuG.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el0dDuG.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
elmaZxJ.value = fval(component.email);
let cndms4E = el0dDuG.formHandler.getError(`email`);
this.setState('st3h_w2', cndms4E);
if (cndms4E) { 
let elE7ny9 = eo('div','d0Tf',null,`class`,`alert alert-danger`);
text(el0dDuG.formHandler.getError(`email`));
ec('div');
}let elhnc0A = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0dDuG.formHandler.addError(`code`, 'required', trans('validation.required'));}return el0dDuG.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cndmG8g = el0dDuG.formHandler.getError(`code`);
this.setState('stqDTxF', cndmG8g);
if (cndmG8g) { 
let elp5l4N = eo('div','dvCf',null,`class`,`alert alert-danger`);
text(el0dDuG.formHandler.getError(`code`));
ec('div');
}let elkAdrQ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0dDuG.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return el0dDuG.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return el0dDuG.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndcfVm = el0dDuG.formHandler.getError(`password`);
this.setState('st7iKXa', cndcfVm);
if (cndcfVm) { 
let elTMgOP = eo('div','xJaf',null,`class`,`alert alert-danger`);
text(el0dDuG.formHandler.getError(`password`));
ec('div');
}let elwMIZK = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0dDuG.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== el0dDuG.formHandler.value('password')) {return el0dDuG.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return el0dDuG.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndETyT = el0dDuG.formHandler.getError(`confirmPassword`);
this.setState('stpRM84', cndETyT);
if (cndETyT) { 
let el7hKbf = eo('div','qNWf',null,`class`,`alert alert-danger`);
text(el0dDuG.formHandler.getError(`confirmPassword`));
ec('div');
}let elGpnpc = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndVTUx = !component.isForgot;
this.setState('stxLBRM', cndVTUx);
let cndM31W = !(cndVTUx);
this.setState('sth_1Ve', cndM31W);
if (cndVTUx) { 
let el_xC7B = eo('span','ngwf');
text(trans('reset'));
ec('span');
}else { 
let elpbb0n = eo('div',null,null,`class`,`text-center`);
let elkpf8B = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let el4nXrt = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let el1t85F = eo('p');
let elfwnUq = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elcqh7W = eo('i',null,null,`class`,`${fas('caret-left')} mr-2 icon`);
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