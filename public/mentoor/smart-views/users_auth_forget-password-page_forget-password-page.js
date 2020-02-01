_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let elDHEfw = eo('div',null,null,`class`,`authLayout`);
let elAnbjM = eo('div',null,null,`class`,`auth`);
let elsqH8X = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let el6E5hC = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let elwbxdE = ev('br');
text(`password reset instructions`);
ec('p');
let elPSImq = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elPSImq.formHandler) {
                    window.cfrmdlr = elPSImq.formHandler = new FormHandler(elPSImq, component);
                } else {
                    window.cfrmdlr = elPSImq.formHandler;
                }
            let cndVzB5 = component.errorMsg;
this.setState('stI_u3Q', cndVzB5);
if (cndVzB5) { 
let elGt_NA = eo('div','Vnxf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elIVQxp = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPSImq.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elPSImq.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elPSImq.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elIVQxp;
                        
            if (true && ! elIVQxp.focused) {
                
                elIVQxp.focused = true;
                elIVQxp.focus();
            }
        ;
                    }, 20);                
                let cndvilX = elPSImq.formHandler.getError(`email`);
this.setState('std28An', cndvilX);
if (cndvilX) { 
let elXh6ra = eo('div','dzzf',null,`class`,`alert alert-danger`);
text(elPSImq.formHandler.getError(`email`));
ec('div');
}let elH5yD5 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cndY7T8 = !component.isForgot;
this.setState('stzjbbF', cndY7T8);
let cndOHRT = !(cndY7T8);
this.setState('stEb4Jp', cndOHRT);
if (cndY7T8) { 
let elFf2Re = eo('span','LhTf');
text(trans('send'));
ec('span');
}else { 
let elzYxIz = eo('div',null,null,`class`,`text-center`);
let elcLV4G = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elBU8D5 = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let el6fNAv = eo('p');
let elh9rE3 = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elfXiZZ = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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