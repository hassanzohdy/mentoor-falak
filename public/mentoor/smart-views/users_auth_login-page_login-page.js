_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let elo_LDu = eo('div',null,null,`class`,`authLayout`);
let elY7Hi9 = eo('div',null,null,`class`,`auth`);
let elTO0s2 = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elEZRHQ = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let el7P_FZ = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let elbEpj0 = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let elFy4DA = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elFy4DA.formHandler) {
                    window.cfrmdlr = elFy4DA.formHandler = new FormHandler(elFy4DA, component);
                } else {
                    window.cfrmdlr = elFy4DA.formHandler;
                }
            let cndnQMA = component.errorMsg;
this.setState('stPkDUc', cndnQMA);
if (cndnQMA) { 
let el8Pxel = eo('div','jTgf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elMBxWh = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFy4DA.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elFy4DA.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elFy4DA.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elMBxWh;
                        
            if (true && ! elMBxWh.focused) {
                
                elMBxWh.focused = true;
                elMBxWh.focus();
            }
        ;
                    }, 20);                
                let cndcuWE = elFy4DA.formHandler.getError(`email`);
this.setState('stc90QS', cndcuWE);
if (cndcuWE) { 
let elIBRIM = eo('div','CjLf',null,`class`,`alert alert-danger`);
text(elFy4DA.formHandler.getError(`email`));
ec('div');
}let elXgoO7 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFy4DA.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elFy4DA.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elFy4DA.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndjHXy = elFy4DA.formHandler.getError(`password`);
this.setState('stDaCPY', cndjHXy);
if (cndjHXy) { 
let elT6hYb = eo('div','3bDf',null,`class`,`alert alert-danger`);
text(elFy4DA.formHandler.getError(`password`));
ec('div');
}let el8L5o2 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cndp6tu = ! component.isLoggingIn;
this.setState('stW6CqZ', cndp6tu);
let cndlnPI = !(cndp6tu);
this.setState('stt2muM', cndlnPI);
if (cndp6tu) { 
let el1vX2x = eo('span','Xmuf');
text(trans('login'));
ec('span');
}else { 
let el0b3HP = eo('div',null,null,`class`,`text-center`);
let elwUVto = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let el0FEgl = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let eljxGC7 = eo('p');
text(`Don't have an account?`);
let el8xXm0 = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let ely8e2X = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });