_Component({
                selector: 'reset-password-page',
                c: 'ResetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resetPass','errorMsg','email','isValidForm','isReset','isForgot'],
                children: {},
                render: function (component) {
                    let elDR3ri = eo('div',null,null,`class`,`authLayout`);
let elsk9R2 = eo('div',null,null,`class`,`auth`);
let el12fDm = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Reset password!'));
ec('h1');
let elxfoEf = eo('p',null,null,`class`,`text-center`);
text(`Enter the code and new password`);
ec('p');
let elO_Pkx = eo('p',null,null,`class`,`text-center bold`);
text(`Please check your spam/junk folder if the email didn't reach in your mail inbox.`);
ec('p');
let elsT73o = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.resetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elsT73o.formHandler) {
                    window.cfrmdlr = elsT73o.formHandler = new FormHandler(elsT73o, component);
                } else {
                    window.cfrmdlr = elsT73o.formHandler;
                }
            let cndRPZ7 = component.errorMsg;
this.setState('stmh927', cndRPZ7);
if (cndRPZ7) { 
let elSTdA6 = eo('div','TW7f',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elB1fc0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.email = this.value;},function(e) {let value = this.value.trim();if (this.value && ! Is.email(this.value)) {return elsT73o.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elsT73o.formHandler.removeError(`email`);}]},`value`,`${fval(component.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`readonly`,``,`class`,`form-control`,`id`,`email`);
elB1fc0.value = fval(component.email);
let cnd__Wq = elsT73o.formHandler.getError(`email`);
this.setState('stZNuYB', cnd__Wq);
if (cnd__Wq) { 
let elPBxVL = eo('div','Poif',null,`class`,`alert alert-danger`);
text(elsT73o.formHandler.getError(`email`));
ec('div');
}let elVJo81 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsT73o.formHandler.addError(`code`, 'required', trans('validation.required'));}return elsT73o.formHandler.removeError(`code`);}]},`name`,`${(`code`).toInputName()}`,`placeholder`,`${trans(`Code`)}`,`type`,`text`,`class`,`form-control`,`id`,`code`);
let cndfKJF = elsT73o.formHandler.getError(`code`);
this.setState('stExjbQ', cndfKJF);
if (cndfKJF) { 
let elLS59E = eo('div','iyyf',null,`class`,`alert alert-danger`);
text(elsT73o.formHandler.getError(`code`));
ec('div');
}let elKbayZ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsT73o.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elsT73o.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elsT73o.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`New password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cnddq0P = elsT73o.formHandler.getError(`password`);
this.setState('stllOlf', cnddq0P);
if (cnddq0P) { 
let el75K_C = eo('div','BSyf',null,`class`,`alert alert-danger`);
text(elsT73o.formHandler.getError(`password`));
ec('div');
}let elfZTsw = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsT73o.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elsT73o.formHandler.value('password')) {return elsT73o.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elsT73o.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm new password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndw3n3 = elsT73o.formHandler.getError(`confirmPassword`);
this.setState('stNilRN', cndw3n3);
if (cndw3n3) { 
let elIL42u = eo('div','v23f',null,`class`,`alert alert-danger`);
text(elsT73o.formHandler.getError(`confirmPassword`));
ec('div');
}let elJYSyK = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isReset},`class`,`btn btn-primary btn-block`);
let cndLyaw = !component.isForgot;
this.setState('stdznCC', cndLyaw);
let cnd507g = !(cndLyaw);
this.setState('sti74S1', cnd507g);
if (cndLyaw) { 
let elkC72D = eo('span','PDUf');
text(trans('reset'));
ec('span');
}else { 
let el6YZj5 = eo('div',null,null,`class`,`text-center`);
let el80PFa = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elxlb8c = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let el6O6QO = eo('p');
let el2UCch = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elIYQIO = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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