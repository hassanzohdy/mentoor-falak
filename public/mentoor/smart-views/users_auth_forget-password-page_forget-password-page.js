_Component({
                selector: 'forget-password-page',
                c: 'ForgetPasswordPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['forgetPass','errorMsg','isValidForm','isForgot'],
                children: {},
                render: function (component) {
                    let elHjF8Q = eo('div',null,null,`class`,`authLayout`);
let elmIJxW = eo('div',null,null,`class`,`auth`);
let elMoKMD = eo('h1',null,null,`class`,`text-center authTitle`);
text(trans('Forgot your password!'));
ec('h1');
let el_y9PW = eo('p',null,null,`class`,`text-center`);
text(`Enter you email below to receive your`);
let elij_4o = ev('br');
text(`password reset instructions`);
ec('p');
let elg7Aut = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.forgetPass($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elg7Aut.formHandler) {
                    window.cfrmdlr = elg7Aut.formHandler = new FormHandler(elg7Aut, component);
                } else {
                    window.cfrmdlr = elg7Aut.formHandler;
                }
            let cnd6Nwk = component.errorMsg;
this.setState('stra7xr', cnd6Nwk);
if (cnd6Nwk) { 
let eli9Jsl = eo('div','f9nf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elaGp2v = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elg7Aut.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elg7Aut.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elg7Aut.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elaGp2v;
                        
            if (true && ! elaGp2v.focused) {
                
                elaGp2v.focused = true;
                elaGp2v.focus();
            }
        ;
                    }, 20);                
                let cndD_1q = elg7Aut.formHandler.getError(`email`);
this.setState('stTU4zO', cndD_1q);
if (cndD_1q) { 
let elaWHGR = eo('div','WyMf',null,`class`,`alert alert-danger`);
text(elg7Aut.formHandler.getError(`email`));
ec('div');
}let el5jLvG = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isForgot},`class`,`btn btn-primary btn-block`);
let cndLw_c = !component.isForgot;
this.setState('stfLNbl', cndLw_c);
let cndaNJK = !(cndLw_c);
this.setState('st1H720', cndaNJK);
if (cndLw_c) { 
let ellN9m9 = eo('span','rExf');
text(trans('send'));
ec('span');
}else { 
let el37jrf = eo('div',null,null,`class`,`text-center`);
let ellZMAw = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elEuz9w = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let eln57V8 = eo('p');
let elqwngY = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
let eloz5aA = eo('i',null,null,`class`,`${fas('caret-left') + ' mr-2 icon'}`);
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