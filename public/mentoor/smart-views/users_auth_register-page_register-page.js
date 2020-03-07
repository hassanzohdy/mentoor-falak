_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let elMvKEe = eo('div',null,null,`class`,`authLayout`);
let elYRtX8 = eo('div',null,null,`class`,`auth`);
let elrCLoK = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let eln8oPt = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let elIyBn0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = elIyBn0;

                if (! elIyBn0.formHandler) {
                    window.cfrmdlr = elIyBn0.formHandler = new FormHandler(elIyBn0, component);
                } else {
                    window.cfrmdlr = elIyBn0.formHandler;
                }
            let cndvcRK = component.invitationCode;
this.setState('stvpJS_', cndvcRK);
if (cndvcRK) { 
let elSTdP4 = ev('input','sHKf',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
elSTdP4.value = fval(component.invitationCode);
}let cndsg0G = component.errors.invitationCode;
this.setState('stDLDoe', cndsg0G);
if (cndsg0G) { 
let eligmBK = eo('div','8Cwf',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let el3gxxs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIyBn0.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elIyBn0.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
el3gxxs.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = el3gxxs;
                        
            if (true && ! el3gxxs.focused) {
                el3gxxs.setSelectionRange(el3gxxs.value.length, el3gxxs.value.length)
                el3gxxs.focused = true;
                el3gxxs.focus();
            }
        ;
                    }, 20);                
                let cnd_rz4 = elIyBn0.formHandler.getError(`firstName`);
this.setState('st8PyjT', cnd_rz4);
if (cnd_rz4) { 
let elrbxnD = eo('div','EyBf',null,`class`,`alert alert-danger`);
text(elIyBn0.formHandler.getError(`firstName`));
ec('div');
}let elolgsM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIyBn0.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elIyBn0.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
elolgsM.value = fval(component.lastName);
let cndT3xm = elIyBn0.formHandler.getError(`lastName`);
this.setState('st5bYC0', cndT3xm);
if (cndT3xm) { 
let elm_ODg = eo('div','AV6f',null,`class`,`alert alert-danger`);
text(elIyBn0.formHandler.getError(`lastName`));
ec('div');
}let elVhOA7 = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let eleGAq3 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIyBn0.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elIyBn0.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elIyBn0.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndB7_c = elIyBn0.formHandler.getError(`email`);
this.setState('stxU0RD', cndB7_c);
if (cndB7_c) { 
let elfAu9Z = eo('div','5V9f',null,`class`,`alert alert-danger`);
text(elIyBn0.formHandler.getError(`email`));
ec('div');
}let elD0dll = eo('div',null,null,`class`,`row`);
let el0qGEE = eo('div',null,null,`class`,`col-11 p-r-0`);
let elZe7f3 = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cndMAPi = component.errors.username;
this.setState('staQrXC', cndMAPi);
if (cndMAPi) { 
let el35k6i = eo('div','xkyf',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let el4Aw8K = eo('i',null,null,`title`,``,`class`,`${fas('question-circle')} col-1 username-help gray-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el4Aw8K;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let elk8hTi = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIyBn0.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elIyBn0.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elIyBn0.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndsTps = elIyBn0.formHandler.getError(`password`);
this.setState('stUEsC1', cndsTps);
if (cndsTps) { 
let el3hE0d = eo('div','oWwf',null,`class`,`alert alert-danger`);
text(elIyBn0.formHandler.getError(`password`));
ec('div');
}let el9JCk7 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIyBn0.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elIyBn0.formHandler.value('password')) {return elIyBn0.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elIyBn0.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndCnlk = elIyBn0.formHandler.getError(`confirmPassword`);
this.setState('st8OwYL', cndCnlk);
if (cndCnlk) { 
let elFb08I = eo('div','m56f',null,`class`,`alert alert-danger`);
text(elIyBn0.formHandler.getError(`confirmPassword`));
ec('div');
}let elV7Nh1 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cndPV3U = !component.isRegistering;
this.setState('st8ejKE', cndPV3U);
let cnd6OQY = !(cndPV3U);
this.setState('stEQiZM', cnd6OQY);
if (cndPV3U) { 
let elKk2qr = eo('span','cGXf');
text(trans('create-account'));
ec('span');
}else { 
let elpnseB = eo('span');
let elVoYH4 = eo('i',null,null,`class`,`${fas('spinner')} fa-spin icon`);
ec('i');
let elhe9xw = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let elaiVzS = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let el2dUZG = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });