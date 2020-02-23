_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let elOpjJD = eo('div',null,null,`class`,`authLayout`);
let elCg5sC = eo('div',null,null,`class`,`auth`);
let el5dGQ3 = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let elDpa_o = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let elMjCCe = ev('br');
text(`password reset instructions`);
ec('p');
let el4GCY4 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! el4GCY4.formHandler) {
                    window.cfrmdlr = el4GCY4.formHandler = new FormHandler(el4GCY4, component);
                } else {
                    window.cfrmdlr = el4GCY4.formHandler;
                }
            let cndB7Us = component.errorMsg;
this.setState('strLgu1', cndB7Us);
if (cndB7Us) { 
let elBlX6M = eo('div','H21f',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elfb1Th = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4GCY4.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el4GCY4.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el4GCY4.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elfb1Th;
                        
            if (true && ! elfb1Th.focused) {
                
                elfb1Th.focused = true;
                elfb1Th.focus();
            }
        ;
                    }, 20);                
                let cndLEew = el4GCY4.formHandler.getError(`email`);
this.setState('stGnAA9', cndLEew);
if (cndLEew) { 
let elOCmlE = eo('div','H5ff',null,`class`,`alert alert-danger`);
text(el4GCY4.formHandler.getError(`email`));
ec('div');
}let elwaWMU = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cndyR4i = !component.isForgot;
this.setState('stSPq7T', cndyR4i);
let cnd05I9 = !(cndyR4i);
this.setState('stSbJKn', cnd05I9);
if (cndyR4i) { 
let ely98D8 = eo('span','Vmxf');
text(trans('send'));
ec('span');
}else { 
let elW2NIj = eo('div',null,null,`class`,`text-center`);
let elTZXkl = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elBzsee = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let eliVnub = eo('p');
let elKOxwm = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elGajKU = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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