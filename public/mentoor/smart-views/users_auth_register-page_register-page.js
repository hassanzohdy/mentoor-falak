_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let elR1bRU = eo('div',null,null,`class`,`authLayout`);
let elLjUpK = eo('div',null,null,`class`,`auth`);
let elkR3r9 = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elHf4d1 = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let elBzZJd = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = elBzZJd;

                if (! elBzZJd.formHandler) {
                    window.cfrmdlr = elBzZJd.formHandler = new FormHandler(elBzZJd, component);
                } else {
                    window.cfrmdlr = elBzZJd.formHandler;
                }
            let cnd0yFd = component.invitationCode;
this.setState('stJyCaC', cnd0yFd);
if (cnd0yFd) { 
let elUVX6p = ev('input','0hvf',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
elUVX6p.value = fval(component.invitationCode);
}let cndOAP4 = component.errors.invitationCode;
this.setState('stQ_WXG', cndOAP4);
if (cndOAP4) { 
let el7x3wF = eo('div','0u2f',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let els4EUZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBzZJd.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elBzZJd.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
els4EUZ.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = els4EUZ;
                        
            if (true && ! els4EUZ.focused) {
                els4EUZ.setSelectionRange(els4EUZ.value.length, els4EUZ.value.length)
                els4EUZ.focused = true;
                els4EUZ.focus();
            }
        ;
                    }, 20);                
                let cndmpVZ = elBzZJd.formHandler.getError(`firstName`);
this.setState('stooefs', cndmpVZ);
if (cndmpVZ) { 
let elfCvUJ = eo('div','LEBf',null,`class`,`alert alert-danger`);
text(elBzZJd.formHandler.getError(`firstName`));
ec('div');
}let els9If0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBzZJd.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elBzZJd.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
els9If0.value = fval(component.lastName);
let cndjYuZ = elBzZJd.formHandler.getError(`lastName`);
this.setState('stKtrAj', cndjYuZ);
if (cndjYuZ) { 
let elmVptD = eo('div','iJZf',null,`class`,`alert alert-danger`);
text(elBzZJd.formHandler.getError(`lastName`));
ec('div');
}let ellq8Kl = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let elfYkEO = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBzZJd.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elBzZJd.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elBzZJd.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndjKsY = elBzZJd.formHandler.getError(`email`);
this.setState('stl8FnA', cndjKsY);
if (cndjKsY) { 
let elWaVSx = eo('div','Aptf',null,`class`,`alert alert-danger`);
text(elBzZJd.formHandler.getError(`email`));
ec('div');
}let el1uNQC = eo('div',null,null,`class`,`row`);
let elM15_1 = eo('div',null,null,`class`,`col-11 p-r-0`);
let el6Ful_ = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cndcNFG = component.errors.username;
this.setState('st8QqsR', cndcNFG);
if (cndcNFG) { 
let elT86YD = eo('div','y6Df',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let el0XQ6E = eo('i',null,null,`title`,``,`class`,`${fas('question-circle') + ' col-1 username-help gray-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el0XQ6E;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let el4TEUX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBzZJd.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elBzZJd.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elBzZJd.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndBQnr = elBzZJd.formHandler.getError(`password`);
this.setState('stTytL3', cndBQnr);
if (cndBQnr) { 
let elKAiQZ = eo('div','P4rf',null,`class`,`alert alert-danger`);
text(elBzZJd.formHandler.getError(`password`));
ec('div');
}let elyudeq = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBzZJd.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elBzZJd.formHandler.value('password')) {return elBzZJd.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elBzZJd.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndHk_j = elBzZJd.formHandler.getError(`confirmPassword`);
this.setState('stdvCbY', cndHk_j);
if (cndHk_j) { 
let ellxgjs = eo('div','7Mpf',null,`class`,`alert alert-danger`);
text(elBzZJd.formHandler.getError(`confirmPassword`));
ec('div');
}let el0GO9E = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cndX4rN = !component.isRegistering;
this.setState('stsyPR9', cndX4rN);
let cnd0wq1 = !(cndX4rN);
this.setState('stLr9TX', cnd0wq1);
if (cndX4rN) { 
let elRPgvw = eo('span','iiwf');
text(trans('create-account'));
ec('span');
}else { 
let elNU3Sa = eo('span');
let elMmUVT = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
let elRTHH2 = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let elVLUNN = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let eluHFh8 = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });