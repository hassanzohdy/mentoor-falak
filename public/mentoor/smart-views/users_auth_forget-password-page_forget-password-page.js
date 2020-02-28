_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let elpzfhQ = eo('div',null,null,`class`,`authLayout`);
let elC7GYO = eo('div',null,null,`class`,`auth`);
let elhsW7g = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let ellwcbH = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let el8see6 = ev('br');
text(`password reset instructions`);
ec('p');
let el1iKGU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! el1iKGU.formHandler) {
                    window.cfrmdlr = el1iKGU.formHandler = new FormHandler(el1iKGU, component);
                } else {
                    window.cfrmdlr = el1iKGU.formHandler;
                }
            let cndgvPh = component.errorMsg;
this.setState('stwrflk', cndgvPh);
if (cndgvPh) { 
let el4xvtg = eo('div','7BHf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elYDr_7 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1iKGU.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el1iKGU.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el1iKGU.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elYDr_7;
                        
            if (true && ! elYDr_7.focused) {
                
                elYDr_7.focused = true;
                elYDr_7.focus();
            }
        ;
                    }, 20);                
                let cndaBsi = el1iKGU.formHandler.getError(`email`);
this.setState('stiMOsd', cndaBsi);
if (cndaBsi) { 
let ellRNQz = eo('div','RuPf',null,`class`,`alert alert-danger`);
text(el1iKGU.formHandler.getError(`email`));
ec('div');
}let elqBzLi = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cnd4fvj = !component.isForgot;
this.setState('st6bBQV', cnd4fvj);
let cndDzom = !(cnd4fvj);
this.setState('stN_oi7', cndDzom);
if (cnd4fvj) { 
let elYNcxS = eo('span','i5gf');
text(trans('send'));
ec('span');
}else { 
let elZHJqo = eo('div',null,null,`class`,`text-center`);
let elvWdSA = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let elTozQ7 = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elpgWp1 = eo('p');
let elRrqTl = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let elQXD9y = eo('i',null,null,`class`,`${fas('caret-left')} mr-2 icon`);
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