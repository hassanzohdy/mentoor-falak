_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let elLIwaw = eo('div',null,null,`class`,`authLayout`);
let elClW42 = eo('div',null,null,`class`,`auth`);
let eleOgLu = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elmkxji = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let elNiCVo = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let elFx6eg = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let eltri5s = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! eltri5s.formHandler) {
                    window.cfrmdlr = eltri5s.formHandler = new FormHandler(eltri5s, component);
                } else {
                    window.cfrmdlr = eltri5s.formHandler;
                }
            let cndPiSr = component.errorMsg;
this.setState('stqaGLI', cndPiSr);
if (cndPiSr) { 
let elp3cJt = eo('div','8Dxf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let el2XgZA = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltri5s.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return eltri5s.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return eltri5s.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = el2XgZA;
                        
            if (true && ! el2XgZA.focused) {
                
                el2XgZA.focused = true;
                el2XgZA.focus();
            }
        ;
                    }, 20);                
                let cndA1v0 = eltri5s.formHandler.getError(`email`);
this.setState('st4JLaL', cndA1v0);
if (cndA1v0) { 
let elOJqFi = eo('div','xvOf',null,`class`,`alert alert-danger`);
text(eltri5s.formHandler.getError(`email`));
ec('div');
}let elc7cae = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltri5s.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return eltri5s.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return eltri5s.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndCFch = eltri5s.formHandler.getError(`password`);
this.setState('st2sgPQ', cndCFch);
if (cndCFch) { 
let el65Nxi = eo('div','ULsf',null,`class`,`alert alert-danger`);
text(eltri5s.formHandler.getError(`password`));
ec('div');
}let elHpXyB = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cndrQCk = ! component.isLoggingIn;
this.setState('stVszcT', cndrQCk);
let cndn5GM = !(cndrQCk);
this.setState('stwtGoi', cndn5GM);
if (cndrQCk) { 
let el78UX2 = eo('span','hMSf');
text(trans('login'));
ec('span');
}else { 
let elfLvJg = eo('div',null,null,`class`,`text-center`);
let elWrJbs = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elZsIhn = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elvAZ6C = eo('p');
text(`Don't have an account?`);
let elp_N7h = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let elN17yy = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });