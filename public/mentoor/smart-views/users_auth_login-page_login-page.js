_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let elgClIr = eo('div',null,null,`class`,`authLayout`);
let el4D2dD = eo('div',null,null,`class`,`auth`);
let elSEJov = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let el5xDK9 = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let el9aZbN = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let elS8LO5 = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let elBRl29 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elBRl29.formHandler) {
                    window.cfrmdlr = elBRl29.formHandler = new FormHandler(elBRl29, component);
                } else {
                    window.cfrmdlr = elBRl29.formHandler;
                }
            let cndN1TG = component.errorMsg;
this.setState('stNCDkD', cndN1TG);
if (cndN1TG) { 
let elIVLJV = eo('div','h0Bf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elD6gIB = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBRl29.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elBRl29.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elBRl29.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elD6gIB;
                        
            if (true && ! elD6gIB.focused) {
                
                elD6gIB.focused = true;
                elD6gIB.focus();
            }
        ;
                    }, 20);                
                let cndm5aS = elBRl29.formHandler.getError(`email`);
this.setState('stGLv0T', cndm5aS);
if (cndm5aS) { 
let elJQa_y = eo('div','pmef',null,`class`,`alert alert-danger`);
text(elBRl29.formHandler.getError(`email`));
ec('div');
}let elI1SQ9 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBRl29.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elBRl29.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elBRl29.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cnde8z0 = elBRl29.formHandler.getError(`password`);
this.setState('stVjPYo', cnde8z0);
if (cnde8z0) { 
let eldwS9L = eo('div','hiMf',null,`class`,`alert alert-danger`);
text(elBRl29.formHandler.getError(`password`));
ec('div');
}let eln0CMH = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cndOnyx = ! component.isLoggingIn;
this.setState('stz6tiT', cndOnyx);
let cndoVeQ = !(cndOnyx);
this.setState('stbbjLS', cndoVeQ);
if (cndOnyx) { 
let elS4ZR3 = eo('span','ERNf');
text(trans('login'));
ec('span');
}else { 
let elybOWL = eo('div',null,null,`class`,`text-center`);
let eltVBGq = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let el2MS7O = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elRgkC6 = eo('p');
text(`Don't have an account?`);
let elVSmYO = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let elOPrQl = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });