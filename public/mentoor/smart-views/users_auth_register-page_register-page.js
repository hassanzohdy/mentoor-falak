_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let elTbA2i = eo('div',null,null,`class`,`authLayout`);
let elqg3hb = eo('div',null,null,`class`,`auth`);
let elrvmTG = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elYZqIT = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let elGCs6g = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = elGCs6g;

                if (! elGCs6g.formHandler) {
                    window.cfrmdlr = elGCs6g.formHandler = new FormHandler(elGCs6g, component);
                } else {
                    window.cfrmdlr = elGCs6g.formHandler;
                }
            let cndKctv = component.invitationCode;
this.setState('stjW0au', cndKctv);
if (cndKctv) { 
let elWnuft = ev('input','u_if',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
elWnuft.value = fval(component.invitationCode);
}let cndKcyS = component.errors.invitationCode;
this.setState('stldtUh', cndKcyS);
if (cndKcyS) { 
let elDUbf5 = eo('div','9oCf',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let elbJgLp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGCs6g.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elGCs6g.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
elbJgLp.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = elbJgLp;
                        
            if (true && ! elbJgLp.focused) {
                elbJgLp.setSelectionRange(elbJgLp.value.length, elbJgLp.value.length)
                elbJgLp.focused = true;
                elbJgLp.focus();
            }
        ;
                    }, 20);                
                let cnddsnG = elGCs6g.formHandler.getError(`firstName`);
this.setState('stQgs9I', cnddsnG);
if (cnddsnG) { 
let elkKc7F = eo('div','FKHf',null,`class`,`alert alert-danger`);
text(elGCs6g.formHandler.getError(`firstName`));
ec('div');
}let ellxBNU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGCs6g.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elGCs6g.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
ellxBNU.value = fval(component.lastName);
let cndTuMk = elGCs6g.formHandler.getError(`lastName`);
this.setState('stUeHFe', cndTuMk);
if (cndTuMk) { 
let elMZ_NT = eo('div','znJf',null,`class`,`alert alert-danger`);
text(elGCs6g.formHandler.getError(`lastName`));
ec('div');
}let elUKs5e = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let el3Psog = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGCs6g.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elGCs6g.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elGCs6g.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndBE8O = elGCs6g.formHandler.getError(`email`);
this.setState('stcV3ue', cndBE8O);
if (cndBE8O) { 
let elLgBWl = eo('div','c7Kf',null,`class`,`alert alert-danger`);
text(elGCs6g.formHandler.getError(`email`));
ec('div');
}let elSLM5v = eo('div',null,null,`class`,`row`);
let elrsgYa = eo('div',null,null,`class`,`col-11 p-r-0`);
let eluXLRF = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cndWTbc = component.errors.username;
this.setState('stUGfmL', cndWTbc);
if (cndWTbc) { 
let elN3JCY = eo('div','6g5f',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let el69PRN = eo('i',null,null,`title`,``,`class`,`${fas('question-circle')} col-1 username-help gray-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el69PRN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let elvQfsW = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGCs6g.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elGCs6g.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elGCs6g.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cnd0fEi = elGCs6g.formHandler.getError(`password`);
this.setState('st7r4t5', cnd0fEi);
if (cnd0fEi) { 
let elDRflN = eo('div','G6Vf',null,`class`,`alert alert-danger`);
text(elGCs6g.formHandler.getError(`password`));
ec('div');
}let elHytUq = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGCs6g.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elGCs6g.formHandler.value('password')) {return elGCs6g.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elGCs6g.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndtA_r = elGCs6g.formHandler.getError(`confirmPassword`);
this.setState('stknaDu', cndtA_r);
if (cndtA_r) { 
let el5fQJJ = eo('div','MElf',null,`class`,`alert alert-danger`);
text(elGCs6g.formHandler.getError(`confirmPassword`));
ec('div');
}let elX3LrE = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cnd_Xd7 = !component.isRegistering;
this.setState('stRiLSD', cnd_Xd7);
let cndSlfq = !(cnd_Xd7);
this.setState('stXn4m7', cndSlfq);
if (cnd_Xd7) { 
let elDDEcn = eo('span','vGDf');
text(trans('create-account'));
ec('span');
}else { 
let el3e2qB = eo('span');
let elIrANS = eo('i',null,null,`class`,`${fas('spinner')} fa-spin icon`);
ec('i');
let eldgNLF = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let elC7DM3 = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let elI8AFb = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });