_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let el72Wxm = eo('div',null,null,`class`,`authLayout`);
let eleEEHd = eo('div',null,null,`class`,`auth`);
let el3gUK3 = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let elQGZ20 = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let elgmidh = ev('br');
text(`password reset instructions`);
ec('p');
let elLpxRJ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elLpxRJ.formHandler) {
                    window.cfrmdlr = elLpxRJ.formHandler = new FormHandler(elLpxRJ, component);
                } else {
                    window.cfrmdlr = elLpxRJ.formHandler;
                }
            let cnddBvs = component.errorMsg;
this.setState('stP1B62', cnddBvs);
if (cnddBvs) { 
let el64yKJ = eo('div','KaRf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elqT8VC = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elLpxRJ.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elLpxRJ.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elLpxRJ.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elqT8VC;
                        
            if (true && ! elqT8VC.focused) {
                
                elqT8VC.focused = true;
                elqT8VC.focus();
            }
        ;
                    }, 20);                
                let cnd_CiH = elLpxRJ.formHandler.getError(`email`);
this.setState('stxtKuu', cnd_CiH);
if (cnd_CiH) { 
let elds7eL = eo('div','qAlf',null,`class`,`alert alert-danger`);
text(elLpxRJ.formHandler.getError(`email`));
ec('div');
}let eld4dGH = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cndlHrL = !component.isForgot;
this.setState('stGEvDG', cndlHrL);
let cndHCVZ = !(cndlHrL);
this.setState('sthJU8L', cndHCVZ);
if (cndlHrL) { 
let eliAOws = eo('span','3q9f');
text(trans('send'));
ec('span');
}else { 
let elcQH4o = eo('div',null,null,`class`,`text-center`);
let el0Mqrj = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elzXkpC = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elLFa9i = eo('p');
let el0eOwH = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let eldqdWB = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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