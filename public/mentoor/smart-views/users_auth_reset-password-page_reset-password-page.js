_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let elJgHKs = eo('div',null,null,`class`,`authLayout`);
let elZvJjV = eo('div',null,null,`class`,`auth`);
let elxgy3Y = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elzEEDw = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let elIUG13 = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let elfcAWO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elfcAWO.formHandler) {
                    window.cfrmdlr = elfcAWO.formHandler = new FormHandler(elfcAWO, component);
                } else {
                    window.cfrmdlr = elfcAWO.formHandler;
                }
            let cndXAKG = component.errorMsg;
this.setState('stpa6rS', cndXAKG);
if (cndXAKG) { 
let elJoiIp = eo('div','JqLf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elY4MTJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elfcAWO.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elfcAWO.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
elY4MTJ.value = fval(component.email);
let cnd3XFa = elfcAWO.formHandler.getError(`email`);
this.setState('stroz8O', cnd3XFa);
if (cnd3XFa) { 
let elEX5xS = eo('div','mjFf',null,`class`,`alert alert-danger`);
text(elfcAWO.formHandler.getError(`email`));
ec('div');
}let elSb1ZE = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfcAWO.formHandler.addError(`code`, 'required', trans('validation.required'));}return elfcAWO.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cndGoQM = elfcAWO.formHandler.getError(`code`);
this.setState('stkoY1a', cndGoQM);
if (cndGoQM) { 
let el0NCpT = eo('div','L92f',null,`class`,`alert alert-danger`);
text(elfcAWO.formHandler.getError(`code`));
ec('div');
}let elBKIpf = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfcAWO.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elfcAWO.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elfcAWO.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cnd3pwf = elfcAWO.formHandler.getError(`password`);
this.setState('stti5_S', cnd3pwf);
if (cnd3pwf) { 
let eldf89X = eo('div','1ryf',null,`class`,`alert alert-danger`);
text(elfcAWO.formHandler.getError(`password`));
ec('div');
}let elhEhdv = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfcAWO.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elfcAWO.formHandler.value('password')) {return elfcAWO.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elfcAWO.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndb6AZ = elfcAWO.formHandler.getError(`confirmPassword`);
this.setState('staSbg8', cndb6AZ);
if (cndb6AZ) { 
let elDCZ0h = eo('div','y9Qf',null,`class`,`alert alert-danger`);
text(elfcAWO.formHandler.getError(`confirmPassword`));
ec('div');
}let el91MSM = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndlO_Y = !component.isForgot;
this.setState('stcMh46', cndlO_Y);
let cndzaLF = !(cndlO_Y);
this.setState('st82XtK', cndzaLF);
if (cndlO_Y) { 
let elMC4oi = eo('span','FbTf');
text(trans('reset'));
ec('span');
}else { 
let elsp_5N = eo('div',null,null,`class`,`text-center`);
let elljBZP = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elXPquM = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let el2XBzE = eo('p');
let elJ5PMg = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elUzbTE = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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