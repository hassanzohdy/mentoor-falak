_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let elQju45 = eo('div',null,null,`class`,`authLayout`);
let elPTIyX = eo('div',null,null,`class`,`auth`);
let elyaaem = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let elAQKLs = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let elvE5Ri = ev('br');
text(`password reset instructions`);
ec('p');
let el4w_3Q = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! el4w_3Q.formHandler) {
                    window.cfrmdlr = el4w_3Q.formHandler = new FormHandler(el4w_3Q, component);
                } else {
                    window.cfrmdlr = el4w_3Q.formHandler;
                }
            let cndlAAx = component.errorMsg;
this.setState('stWKCDb', cndlAAx);
if (cndlAAx) { 
let elY9yJF = eo('div','zDdf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elpW5xw = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4w_3Q.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el4w_3Q.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el4w_3Q.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elpW5xw;
                        
            if (true && ! elpW5xw.focused) {
                
                elpW5xw.focused = true;
                elpW5xw.focus();
            }
        ;
                    }, 20);                
                let cnd677q = el4w_3Q.formHandler.getError(`email`);
this.setState('stc4dXf', cnd677q);
if (cnd677q) { 
let elyzfC3 = eo('div','DD3f',null,`class`,`alert alert-danger`);
text(el4w_3Q.formHandler.getError(`email`));
ec('div');
}let el7_TVq = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cndMrM3 = !component.isForgot;
this.setState('stFaXVD', cndMrM3);
let cnddBur = !(cndMrM3);
this.setState('stFB45c', cnddBur);
if (cndMrM3) { 
let elzg9jU = eo('span','ypgf');
text(trans('send'));
ec('span');
}else { 
let elitJsn = eo('div',null,null,`class`,`text-center`);
let elbvfwv = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elHmZ3g = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let eldBNeU = eo('p');
let elLmiwa = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elOgMBw = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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