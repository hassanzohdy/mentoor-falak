_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let elc1Rve = eo('div',null,null,`class`,`authLayout`);
let eliC83J = eo('div',null,null,`class`,`auth`);
let elpHdAF = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elPHLsS = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let elBdALC = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = elBdALC;

                if (! elBdALC.formHandler) {
                    window.cfrmdlr = elBdALC.formHandler = new FormHandler(elBdALC, component);
                } else {
                    window.cfrmdlr = elBdALC.formHandler;
                }
            let cndxnR9 = component.invitationCode;
this.setState('std4F5M', cndxnR9);
if (cndxnR9) { 
let elm45B3 = ev('input','6lrf',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
elm45B3.value = fval(component.invitationCode);
}let cndEcOy = component.errors.invitationCode;
this.setState('stx98LD', cndEcOy);
if (cndEcOy) { 
let elTlONb = eo('div','QGEf',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let elPA5h8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBdALC.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elBdALC.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
elPA5h8.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = elPA5h8;
                        
            if (true && ! elPA5h8.focused) {
                elPA5h8.setSelectionRange(elPA5h8.value.length, elPA5h8.value.length)
                elPA5h8.focused = true;
                elPA5h8.focus();
            }
        ;
                    }, 20);                
                let cnduPC4 = elBdALC.formHandler.getError(`firstName`);
this.setState('stjYgBS', cnduPC4);
if (cnduPC4) { 
let elcizcK = eo('div','M2Df',null,`class`,`alert alert-danger`);
text(elBdALC.formHandler.getError(`firstName`));
ec('div');
}let eldkIER = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBdALC.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elBdALC.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
eldkIER.value = fval(component.lastName);
let cndAEQW = elBdALC.formHandler.getError(`lastName`);
this.setState('st_dE6E', cndAEQW);
if (cndAEQW) { 
let elNVKtH = eo('div','ie2f',null,`class`,`alert alert-danger`);
text(elBdALC.formHandler.getError(`lastName`));
ec('div');
}let elfkqu2 = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let ela_iUz = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBdALC.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elBdALC.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elBdALC.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndZ2UH = elBdALC.formHandler.getError(`email`);
this.setState('stLEouh', cndZ2UH);
if (cndZ2UH) { 
let elKwmwP = eo('div','gbDf',null,`class`,`alert alert-danger`);
text(elBdALC.formHandler.getError(`email`));
ec('div');
}let elaWKcf = eo('div',null,null,`class`,`row`);
let eljuGrO = eo('div',null,null,`class`,`col-11 p-r-0`);
let elwk2kT = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cndojT6 = component.errors.username;
this.setState('stkbSSt', cndojT6);
if (cndojT6) { 
let elzO6fd = eo('div','Z7Ef',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let el8HEQS = eo('i',null,null,`title`,``,`class`,`${fas('question-circle') + ' col-1 username-help gray-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el8HEQS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let elLMinc = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBdALC.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elBdALC.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elBdALC.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cnddLuN = elBdALC.formHandler.getError(`password`);
this.setState('st6hwbO', cnddLuN);
if (cnddLuN) { 
let elVCP9E = eo('div','Esof',null,`class`,`alert alert-danger`);
text(elBdALC.formHandler.getError(`password`));
ec('div');
}let elEb0B1 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBdALC.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elBdALC.formHandler.value('password')) {return elBdALC.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elBdALC.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndROCh = elBdALC.formHandler.getError(`confirmPassword`);
this.setState('strkzp8', cndROCh);
if (cndROCh) { 
let elD1z3s = eo('div','vRDf',null,`class`,`alert alert-danger`);
text(elBdALC.formHandler.getError(`confirmPassword`));
ec('div');
}let elQXSTV = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cndbRsK = !component.isRegistering;
this.setState('stcQY_Q', cndbRsK);
let cndSYIg = !(cndbRsK);
this.setState('st0Bedp', cndSYIg);
if (cndbRsK) { 
let ellH5hR = eo('span','24Af');
text(trans('create-account'));
ec('span');
}else { 
let elko2aK = eo('span');
let elx9MqL = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
let el_fsR7 = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let elTOPgV = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let elVXgoG = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });