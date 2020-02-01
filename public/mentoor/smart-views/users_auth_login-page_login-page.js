_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let el6C386 = eo('div',null,null,`class`,`authLayout`);
let elEtkvK = eo('div',null,null,`class`,`auth`);
let el5Tjp_ = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elhwcrz = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let elgGjYq = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let elBGOSm = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let elFoCal = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elFoCal.formHandler) {
                    window.cfrmdlr = elFoCal.formHandler = new FormHandler(elFoCal, component);
                } else {
                    window.cfrmdlr = elFoCal.formHandler;
                }
            let cndlCtx = component.errorMsg;
this.setState('stT2Fp0', cndlCtx);
if (cndlCtx) { 
let el8yfph = eo('div','oGif',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let eleoJmZ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFoCal.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elFoCal.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elFoCal.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = eleoJmZ;
                        
            if (true && ! eleoJmZ.focused) {
                
                eleoJmZ.focused = true;
                eleoJmZ.focus();
            }
        ;
                    }, 20);                
                let cnds3Lq = elFoCal.formHandler.getError(`email`);
this.setState('stN5XsA', cnds3Lq);
if (cnds3Lq) { 
let elPtAH_ = eo('div','NDbf',null,`class`,`alert alert-danger`);
text(elFoCal.formHandler.getError(`email`));
ec('div');
}let elQAPVu = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFoCal.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elFoCal.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elFoCal.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndIUT0 = elFoCal.formHandler.getError(`password`);
this.setState('stnbAHK', cndIUT0);
if (cndIUT0) { 
let elrh2qH = eo('div','ZBQf',null,`class`,`alert alert-danger`);
text(elFoCal.formHandler.getError(`password`));
ec('div');
}let elBrdH2 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cndp8Ou = ! component.isLoggingIn;
this.setState('stKI7_4', cndp8Ou);
let cndKMRT = !(cndp8Ou);
this.setState('st60PIC', cndKMRT);
if (cndp8Ou) { 
let elFJBre = eo('span','48af');
text(trans('login'));
ec('span');
}else { 
let elVY4Rn = eo('div',null,null,`class`,`text-center`);
let el2pUvL = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin fa-1x icon'}`);
ec('i');
ec('div');
}ec('button');
let elaNWrr = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let el70xyM = eo('p');
text(`Don't have an account?`);
let elBJJmA = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let elRuMac = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });