_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let eluoXZx = eo('div',null,null,`class`,`authLayout`);
let eltxB90 = eo('div',null,null,`class`,`auth`);
let elbDLTg = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elreWkb = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let elfjriW = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let elA9CUb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elA9CUb.formHandler) {
                    window.cfrmdlr = elA9CUb.formHandler = new FormHandler(elA9CUb, component);
                } else {
                    window.cfrmdlr = elA9CUb.formHandler;
                }
            let cndhebv = component.errorMsg;
this.setState('stZqInf', cndhebv);
if (cndhebv) { 
let elRTnjy = eo('div','mXgf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elwcwwh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elA9CUb.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elA9CUb.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
elwcwwh.value = fval(component.email);
let cnd3OqM = elA9CUb.formHandler.getError(`email`);
this.setState('stpBNdS', cnd3OqM);
if (cnd3OqM) { 
let eltuGnq = eo('div','FoXf',null,`class`,`alert alert-danger`);
text(elA9CUb.formHandler.getError(`email`));
ec('div');
}let el3vaap = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elA9CUb.formHandler.addError(`code`, 'required', trans('validation.required'));}return elA9CUb.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cndZGbE = elA9CUb.formHandler.getError(`code`);
this.setState('stZ5h8i', cndZGbE);
if (cndZGbE) { 
let elNGtYu = eo('div','Y1If',null,`class`,`alert alert-danger`);
text(elA9CUb.formHandler.getError(`code`));
ec('div');
}let eltYu9S = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elA9CUb.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elA9CUb.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elA9CUb.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndcinh = elA9CUb.formHandler.getError(`password`);
this.setState('stAu8Zo', cndcinh);
if (cndcinh) { 
let elOgbEt = eo('div','U4zf',null,`class`,`alert alert-danger`);
text(elA9CUb.formHandler.getError(`password`));
ec('div');
}let elktkAE = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elA9CUb.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elA9CUb.formHandler.value('password')) {return elA9CUb.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elA9CUb.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndRDBv = elA9CUb.formHandler.getError(`confirmPassword`);
this.setState('st7DVFW', cndRDBv);
if (cndRDBv) { 
let el1ZEQM = eo('div','hrWf',null,`class`,`alert alert-danger`);
text(elA9CUb.formHandler.getError(`confirmPassword`));
ec('div');
}let ela9qPt = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndbUs5 = !component.isForgot;
this.setState('stDw6jJ', cndbUs5);
let cndqYZ3 = !(cndbUs5);
this.setState('stYYZ2b', cndqYZ3);
if (cndbUs5) { 
let elsWx1s = eo('span','ikqf');
text(trans('reset'));
ec('span');
}else { 
let eljydcr = eo('div',null,null,`class`,`text-center`);
let elKwwCX = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let eljbUnz = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elA6ZfL = eo('p');
let el3Gwyj = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elV6ZlQ = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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