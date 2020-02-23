_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let el3tRxB = eo('div',null,null,`class`,`authLayout`);
let elcGX3p = eo('div',null,null,`class`,`auth`);
let el1hZE5 = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let elEKf8_ = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let elBLyaN = ev('br');
text(`password reset instructions`);
ec('p');
let elNy8zU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elNy8zU.formHandler) {
                    window.cfrmdlr = elNy8zU.formHandler = new FormHandler(elNy8zU, component);
                } else {
                    window.cfrmdlr = elNy8zU.formHandler;
                }
            let cndxrku = component.errorMsg;
this.setState('st2p31l', cndxrku);
if (cndxrku) { 
let el6s2dq = eo('div','t3Mf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elC1GpP = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNy8zU.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elNy8zU.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elNy8zU.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elC1GpP;
                        
            if (true && ! elC1GpP.focused) {
                
                elC1GpP.focused = true;
                elC1GpP.focus();
            }
        ;
                    }, 20);                
                let cnd0BJc = elNy8zU.formHandler.getError(`email`);
this.setState('stu0sYD', cnd0BJc);
if (cnd0BJc) { 
let elBBPhN = eo('div','eupf',null,`class`,`alert alert-danger`);
text(elNy8zU.formHandler.getError(`email`));
ec('div');
}let el1Y_Gc = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cndFwbn = !component.isForgot;
this.setState('st5Heik', cndFwbn);
let cndX4hD = !(cndFwbn);
this.setState('stLy4Za', cndX4hD);
if (cndFwbn) { 
let elZ86sW = eo('span','R10f');
text(trans('send'));
ec('span');
}else { 
let elHFKuD = eo('div',null,null,`class`,`text-center`);
let el2l_oH = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elP6ERn = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elbogTD = eo('p');
let elkGUmD = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elEfliQ = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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