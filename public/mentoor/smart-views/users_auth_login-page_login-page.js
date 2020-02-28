_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let elU1dIa = eo('div',null,null,`class`,`authLayout`);
let el93HDI = eo('div',null,null,`class`,`auth`);
let el0ZFBc = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elQ4W5n = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let elBrORf = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let elSKyGV = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let elv720g = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elv720g.formHandler) {
                    window.cfrmdlr = elv720g.formHandler = new FormHandler(elv720g, component);
                } else {
                    window.cfrmdlr = elv720g.formHandler;
                }
            let cndLpkz = component.errorMsg;
this.setState('stRW4Rg', cndLpkz);
if (cndLpkz) { 
let el4xRXE = eo('div','wylf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elJ2waM = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elv720g.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elv720g.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elv720g.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elJ2waM;
                        
            if (true && ! elJ2waM.focused) {
                
                elJ2waM.focused = true;
                elJ2waM.focus();
            }
        ;
                    }, 20);                
                let cndcpm9 = elv720g.formHandler.getError(`email`);
this.setState('st4riiV', cndcpm9);
if (cndcpm9) { 
let el8_B4v = eo('div','xaCf',null,`class`,`alert alert-danger`);
text(elv720g.formHandler.getError(`email`));
ec('div');
}let elJFyM3 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elv720g.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elv720g.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elv720g.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndjiuC = elv720g.formHandler.getError(`password`);
this.setState('stEm_fF', cndjiuC);
if (cndjiuC) { 
let elHXtpI = eo('div','5WZf',null,`class`,`alert alert-danger`);
text(elv720g.formHandler.getError(`password`));
ec('div');
}let elWc0Qn = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cnd9_ra = ! component.isLoggingIn;
this.setState('st_CxOc', cnd9_ra);
let cndY4JC = !(cnd9_ra);
this.setState('stowBD5', cndY4JC);
if (cnd9_ra) { 
let elbiBbC = eo('span','t0Cf');
text(trans('login'));
ec('span');
}else { 
let elirbuF = eo('div',null,null,`class`,`text-center`);
let elN_F_j = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let els7me_ = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elVF6OK = eo('p');
text(`Don't have an account?`);
let elxgcgQ = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let el5ATU_ = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });