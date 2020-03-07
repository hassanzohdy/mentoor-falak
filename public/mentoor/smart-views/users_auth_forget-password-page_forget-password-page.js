_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let elssuNm = eo('div',null,null,`class`,`authLayout`);
let elMzkDU = eo('div',null,null,`class`,`auth`);
let elVrWRq = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let ellia1j = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let elWlRyZ = ev('br');
text(`password reset instructions`);
ec('p');
let ele6C21 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! ele6C21.formHandler) {
                    window.cfrmdlr = ele6C21.formHandler = new FormHandler(ele6C21, component);
                } else {
                    window.cfrmdlr = ele6C21.formHandler;
                }
            let cndRhH5 = component.errorMsg;
this.setState('stXhyz1', cndRhH5);
if (cndRhH5) { 
let eliKkRt = eo('div','xINf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let eloF6CB = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return ele6C21.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return ele6C21.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return ele6C21.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = eloF6CB;
                        
            if (true && ! eloF6CB.focused) {
                
                eloF6CB.focused = true;
                eloF6CB.focus();
            }
        ;
                    }, 20);                
                let cndKkVC = ele6C21.formHandler.getError(`email`);
this.setState('sttP6iF', cndKkVC);
if (cndKkVC) { 
let el8uNQD = eo('div','zDff',null,`class`,`alert alert-danger`);
text(ele6C21.formHandler.getError(`email`));
ec('div');
}let elIXhRH = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cndwO35 = !component.isForgot;
this.setState('stvhrYI', cndwO35);
let cnddzJE = !(cndwO35);
this.setState('stbCsz2', cnddzJE);
if (cndwO35) { 
let el3NKMl = eo('span','8fvf');
text(trans('send'));
ec('span');
}else { 
let elYWUEn = eo('div',null,null,`class`,`text-center`);
let elNkIOq = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let elHXg8d = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elT21x_ = eo('p');
let elOjil5 = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elmL2fc = eo('i',null,null,`class`,`${fas('caret-left')} mr-2 icon`);
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