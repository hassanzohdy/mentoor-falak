_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let elmIVjc = eo('div',null,null,`class`,`authLayout`);
let elWiLGO = eo('div',null,null,`class`,`auth`);
let eljumXp = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elpa6M8 = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let elsIqsA = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let elMnmf7 = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let elCr7xY = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elCr7xY.formHandler) {
                    window.cfrmdlr = elCr7xY.formHandler = new FormHandler(elCr7xY, component);
                } else {
                    window.cfrmdlr = elCr7xY.formHandler;
                }
            let cndAgjP = component.errorMsg;
this.setState('stHd3FV', cndAgjP);
if (cndAgjP) { 
let elnn5kT = eo('div','vTuf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let ell11Wd = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCr7xY.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elCr7xY.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elCr7xY.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = ell11Wd;
                        
            if (true && ! ell11Wd.focused) {
                
                ell11Wd.focused = true;
                ell11Wd.focus();
            }
        ;
                    }, 20);                
                let cndf82E = elCr7xY.formHandler.getError(`email`);
this.setState('stqSMq8', cndf82E);
if (cndf82E) { 
let elILCVy = eo('div','iMvf',null,`class`,`alert alert-danger`);
text(elCr7xY.formHandler.getError(`email`));
ec('div');
}let elABDFP = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCr7xY.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elCr7xY.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elCr7xY.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndfbj4 = elCr7xY.formHandler.getError(`password`);
this.setState('stvYKJI', cndfbj4);
if (cndfbj4) { 
let elJFLGh = eo('div','Paxf',null,`class`,`alert alert-danger`);
text(elCr7xY.formHandler.getError(`password`));
ec('div');
}let elFOTgH = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cndYp3d = ! component.isLoggingIn;
this.setState('st18LKH', cndYp3d);
let cnd4Kz4 = !(cndYp3d);
this.setState('stBXHdo', cnd4Kz4);
if (cndYp3d) { 
let elTVNl8 = eo('span','6Iaf');
text(trans('login'));
ec('span');
}else { 
let elo4Zsl = eo('div',null,null,`class`,`text-center`);
let elgjOJG = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let elEYrE1 = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elbKc1g = eo('p');
text(`Don't have an account?`);
let elT0zDY = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let elyaQh6 = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });