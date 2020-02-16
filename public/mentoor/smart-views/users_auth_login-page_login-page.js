_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let eltMcTO = eo('div',null,null,`class`,`authLayout`);
let elMYN8e = eo('div',null,null,`class`,`auth`);
let el4mQWu = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elmo2kk = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let elvXuAu = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let elPz3JY = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let el_jHcI = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! el_jHcI.formHandler) {
                    window.cfrmdlr = el_jHcI.formHandler = new FormHandler(el_jHcI, component);
                } else {
                    window.cfrmdlr = el_jHcI.formHandler;
                }
            let cndse6L = component.errorMsg;
this.setState('stuqmUO', cndse6L);
if (cndse6L) { 
let elBsEfC = eo('div','QFdf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elSbhtN = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_jHcI.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el_jHcI.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el_jHcI.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elSbhtN;
                        
            if (true && ! elSbhtN.focused) {
                
                elSbhtN.focused = true;
                elSbhtN.focus();
            }
        ;
                    }, 20);                
                let cndW8Fc = el_jHcI.formHandler.getError(`email`);
this.setState('st_v0C2', cndW8Fc);
if (cndW8Fc) { 
let elCdgwD = eo('div','rjlf',null,`class`,`alert alert-danger`);
text(el_jHcI.formHandler.getError(`email`));
ec('div');
}let el81A8r = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_jHcI.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return el_jHcI.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return el_jHcI.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndawpJ = el_jHcI.formHandler.getError(`password`);
this.setState('steaqxW', cndawpJ);
if (cndawpJ) { 
let elIS6pq = eo('div','eGrf',null,`class`,`alert alert-danger`);
text(el_jHcI.formHandler.getError(`password`));
ec('div');
}let elAolgb = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cnd1vM5 = ! component.isLoggingIn;
this.setState('stW8tOH', cnd1vM5);
let cndCUMo = !(cnd1vM5);
this.setState('st2ECqW', cndCUMo);
if (cnd1vM5) { 
let el2xM4E = eo('span','nKOf');
text(trans('login'));
ec('span');
}else { 
let elHWe1_ = eo('div',null,null,`class`,`text-center`);
let elb2bA_ = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elejOuu = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elzd91c = eo('p');
text(`Don't have an account?`);
let elW_Pkk = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let el5p2C7 = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });