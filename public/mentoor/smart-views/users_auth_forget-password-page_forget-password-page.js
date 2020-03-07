_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let ela_yEY = eo('div',null,null,`class`,`authLayout`);
let elKUwkl = eo('div',null,null,`class`,`auth`);
let elZRGP7 = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let eldMZ6m = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let elwaTG3 = ev('br');
text(`password reset instructions`);
ec('p');
let elwEpyI = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elwEpyI.formHandler) {
                    window.cfrmdlr = elwEpyI.formHandler = new FormHandler(elwEpyI, component);
                } else {
                    window.cfrmdlr = elwEpyI.formHandler;
                }
            let cndfXu2 = component.errorMsg;
this.setState('stNwbLr', cndfXu2);
if (cndfXu2) { 
let elU9_I0 = eo('div','3_Cf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elzQB6T = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwEpyI.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elwEpyI.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elwEpyI.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elzQB6T;
                        
            if (true && ! elzQB6T.focused) {
                
                elzQB6T.focused = true;
                elzQB6T.focus();
            }
        ;
                    }, 20);                
                let cnde7UY = elwEpyI.formHandler.getError(`email`);
this.setState('st8aInl', cnde7UY);
if (cnde7UY) { 
let el3ZCMk = eo('div','b9Bf',null,`class`,`alert alert-danger`);
text(elwEpyI.formHandler.getError(`email`));
ec('div');
}let el1tTUk = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cndBcOk = !component.isForgot;
this.setState('stY8b7C', cndBcOk);
let cndUnnW = !(cndBcOk);
this.setState('st6AI5p', cndUnnW);
if (cndBcOk) { 
let elON4Rk = eo('span','o9nf');
text(trans('send'));
ec('span');
}else { 
let elGo_Jm = eo('div',null,null,`class`,`text-center`);
let elpHJ6G = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let elVDhdi = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elSvtPu = eo('p');
let elTD7Kr = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let el2KtBo = eo('i',null,null,`class`,`${fas('caret-left')} mr-2 icon`);
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