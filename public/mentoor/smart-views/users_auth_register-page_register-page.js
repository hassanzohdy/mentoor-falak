_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let el4MLc9 = eo('div',null,null,`class`,`authLayout`);
let elW_ErZ = eo('div',null,null,`class`,`auth`);
let el6iCoE = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elklCxA = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let el4tkYL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = el4tkYL;

                if (! el4tkYL.formHandler) {
                    window.cfrmdlr = el4tkYL.formHandler = new FormHandler(el4tkYL, component);
                } else {
                    window.cfrmdlr = el4tkYL.formHandler;
                }
            let cnd1mRj = component.invitationCode;
this.setState('stmf2em', cnd1mRj);
if (cnd1mRj) { 
let elsPLss = ev('input','bk2f',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
elsPLss.value = fval(component.invitationCode);
}let cnd4ABd = component.errors.invitationCode;
this.setState('ste2l4A', cnd4ABd);
if (cnd4ABd) { 
let el2Asle = eo('div','Qq7f',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let eltkU9i = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4tkYL.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return el4tkYL.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
eltkU9i.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = eltkU9i;
                        
            if (true && ! eltkU9i.focused) {
                eltkU9i.setSelectionRange(eltkU9i.value.length, eltkU9i.value.length)
                eltkU9i.focused = true;
                eltkU9i.focus();
            }
        ;
                    }, 20);                
                let cnd9nqd = el4tkYL.formHandler.getError(`firstName`);
this.setState('stxKDi7', cnd9nqd);
if (cnd9nqd) { 
let elJSIHm = eo('div','_Rtf',null,`class`,`alert alert-danger`);
text(el4tkYL.formHandler.getError(`firstName`));
ec('div');
}let elxsVQI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4tkYL.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return el4tkYL.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
elxsVQI.value = fval(component.lastName);
let cndTKm1 = el4tkYL.formHandler.getError(`lastName`);
this.setState('stW1U5j', cndTKm1);
if (cndTKm1) { 
let elIn3ix = eo('div','nXyf',null,`class`,`alert alert-danger`);
text(el4tkYL.formHandler.getError(`lastName`));
ec('div');
}let elrZlUa = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let elZWfKP = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4tkYL.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el4tkYL.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el4tkYL.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cnd9xw7 = el4tkYL.formHandler.getError(`email`);
this.setState('stz3K62', cnd9xw7);
if (cnd9xw7) { 
let elAVmzG = eo('div','_Tkf',null,`class`,`alert alert-danger`);
text(el4tkYL.formHandler.getError(`email`));
ec('div');
}let elu1RI5 = eo('div',null,null,`class`,`row`);
let elj1hyH = eo('div',null,null,`class`,`col-11 p-r-0`);
let elE646C = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cnduNlW = component.errors.username;
this.setState('stMYPgS', cnduNlW);
if (cnduNlW) { 
let elESDOQ = eo('div','f9bf',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let elQFEhV = eo('i',null,null,`title`,``,`class`,`${fas('question-circle') + ' col-1 username-help gray-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elQFEhV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let el7NLfX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4tkYL.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return el4tkYL.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return el4tkYL.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndyDpB = el4tkYL.formHandler.getError(`password`);
this.setState('stZJsNq', cndyDpB);
if (cndyDpB) { 
let elUACQA = eo('div','makf',null,`class`,`alert alert-danger`);
text(el4tkYL.formHandler.getError(`password`));
ec('div');
}let elCxw92 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4tkYL.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== el4tkYL.formHandler.value('password')) {return el4tkYL.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return el4tkYL.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndvJDL = el4tkYL.formHandler.getError(`confirmPassword`);
this.setState('st3QxcX', cndvJDL);
if (cndvJDL) { 
let elyDV_z = eo('div','BBwf',null,`class`,`alert alert-danger`);
text(el4tkYL.formHandler.getError(`confirmPassword`));
ec('div');
}let el_nzFi = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cndUTxa = !component.isRegistering;
this.setState('starbXx', cndUTxa);
let cndAxE9 = !(cndUTxa);
this.setState('stMYFF_', cndAxE9);
if (cndUTxa) { 
let elqly28 = eo('span','uN7f');
text(trans('create-account'));
ec('span');
}else { 
let elG47PG = eo('span');
let elHHNsg = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
let elfBGtp = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let elLcllK = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let eldvFXk = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });