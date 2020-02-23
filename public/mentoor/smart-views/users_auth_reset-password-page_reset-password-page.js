_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let elLpDvq = eo('div',null,null,`class`,`authLayout`);
let elLtSVz = eo('div',null,null,`class`,`auth`);
let elbGmtQ = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elCInBm = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let elcOBTW = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let elOHgOz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elOHgOz.formHandler) {
                    window.cfrmdlr = elOHgOz.formHandler = new FormHandler(elOHgOz, component);
                } else {
                    window.cfrmdlr = elOHgOz.formHandler;
                }
            let cnd3bDm = component.errorMsg;
this.setState('stwDiLv', cnd3bDm);
if (cnd3bDm) { 
let elTJRRW = eo('div','2cyf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elQrlVb = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elOHgOz.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elOHgOz.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
elQrlVb.value = fval(component.email);
let cndP_HY = elOHgOz.formHandler.getError(`email`);
this.setState('stFt2qu', cndP_HY);
if (cndP_HY) { 
let elNnJq5 = eo('div','qdSf',null,`class`,`alert alert-danger`);
text(elOHgOz.formHandler.getError(`email`));
ec('div');
}let elQdk2I = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOHgOz.formHandler.addError(`code`, 'required', trans('validation.required'));}return elOHgOz.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cndoHnM = elOHgOz.formHandler.getError(`code`);
this.setState('st5J9Fr', cndoHnM);
if (cndoHnM) { 
let elJHHeN = eo('div','2gKf',null,`class`,`alert alert-danger`);
text(elOHgOz.formHandler.getError(`code`));
ec('div');
}let elB8uvr = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOHgOz.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elOHgOz.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elOHgOz.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndcZ6D = elOHgOz.formHandler.getError(`password`);
this.setState('stxv6VU', cndcZ6D);
if (cndcZ6D) { 
let elVKxLX = eo('div','toqf',null,`class`,`alert alert-danger`);
text(elOHgOz.formHandler.getError(`password`));
ec('div');
}let el2JDEi = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOHgOz.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elOHgOz.formHandler.value('password')) {return elOHgOz.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elOHgOz.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndYxMf = elOHgOz.formHandler.getError(`confirmPassword`);
this.setState('st8ZJXH', cndYxMf);
if (cndYxMf) { 
let elIkiUU = eo('div','He6f',null,`class`,`alert alert-danger`);
text(elOHgOz.formHandler.getError(`confirmPassword`));
ec('div');
}let el6Oju5 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndc6v7 = !component.isForgot;
this.setState('stKcUIk', cndc6v7);
let cnd6u1Y = !(cndc6v7);
this.setState('stO6qA7', cnd6u1Y);
if (cndc6v7) { 
let elLqEPW = eo('span','l53f');
text(trans('reset'));
ec('span');
}else { 
let elFtp7n = eo('div',null,null,`class`,`text-center`);
let elLIWy1 = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elCSSBm = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elxIqDj = eo('p');
let el3wt4r = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let el1wWcw = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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