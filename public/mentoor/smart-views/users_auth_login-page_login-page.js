_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let elvet50 = eo('div',null,null,`class`,`authLayout`);
let eli74pW = eo('div',null,null,`class`,`auth`);
let el8R3X6 = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elnyFLq = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let elZwSgI = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let el4g7jk = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let elfK3Vp = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elfK3Vp.formHandler) {
                    window.cfrmdlr = elfK3Vp.formHandler = new FormHandler(elfK3Vp, component);
                } else {
                    window.cfrmdlr = elfK3Vp.formHandler;
                }
            let cndiFkV = component.errorMsg;
this.setState('stpTC3j', cndiFkV);
if (cndiFkV) { 
let el6YDrR = eo('div','B9df',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elPMW5B = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfK3Vp.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elfK3Vp.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elfK3Vp.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elPMW5B;
                        
            if (true && ! elPMW5B.focused) {
                
                elPMW5B.focused = true;
                elPMW5B.focus();
            }
        ;
                    }, 20);                
                let cndL8oD = elfK3Vp.formHandler.getError(`email`);
this.setState('stREqg0', cndL8oD);
if (cndL8oD) { 
let elBYl1a = eo('div','KTsf',null,`class`,`alert alert-danger`);
text(elfK3Vp.formHandler.getError(`email`));
ec('div');
}let elrY4L6 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfK3Vp.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elfK3Vp.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elfK3Vp.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cnd_ARX = elfK3Vp.formHandler.getError(`password`);
this.setState('stsxct4', cnd_ARX);
if (cnd_ARX) { 
let elNpbDH = eo('div','lCUf',null,`class`,`alert alert-danger`);
text(elfK3Vp.formHandler.getError(`password`));
ec('div');
}let elnuJpS = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cndgSBS = ! component.isLoggingIn;
this.setState('stbe_LD', cndgSBS);
let cnd6aA8 = !(cndgSBS);
this.setState('st2OclM', cnd6aA8);
if (cndgSBS) { 
let el85ez5 = eo('span','lNGf');
text(trans('login'));
ec('span');
}else { 
let elAzl54 = eo('div',null,null,`class`,`text-center`);
let el0BGqb = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elKfC0S = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elgPiQE = eo('p');
text(`Don't have an account?`);
let el9wsyL = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let elEcMaU = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });