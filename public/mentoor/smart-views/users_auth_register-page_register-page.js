_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let el2CqdS = eo('div',null,null,`class`,`authLayout`);
let elj2W7J = eo('div',null,null,`class`,`auth`);
let elj3xzB = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let eldZ4cz = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let elbQ80I = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = elbQ80I;

                if (! elbQ80I.formHandler) {
                    window.cfrmdlr = elbQ80I.formHandler = new FormHandler(elbQ80I, component);
                } else {
                    window.cfrmdlr = elbQ80I.formHandler;
                }
            let cnd9NYk = component.invitationCode;
this.setState('stpZLeV', cnd9NYk);
if (cnd9NYk) { 
let elSdYZI = ev('input','543f',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
elSdYZI.value = fval(component.invitationCode);
}let cndeFSy = component.errors.invitationCode;
this.setState('stC0yDQ', cndeFSy);
if (cndeFSy) { 
let el3Ua1q = eo('div','jTRf',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let elMWXBQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbQ80I.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elbQ80I.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
elMWXBQ.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = elMWXBQ;
                        
            if (true && ! elMWXBQ.focused) {
                elMWXBQ.setSelectionRange(elMWXBQ.value.length, elMWXBQ.value.length)
                elMWXBQ.focused = true;
                elMWXBQ.focus();
            }
        ;
                    }, 20);                
                let cndsHdk = elbQ80I.formHandler.getError(`firstName`);
this.setState('st9UgSP', cndsHdk);
if (cndsHdk) { 
let elW9hQX = eo('div','zKjf',null,`class`,`alert alert-danger`);
text(elbQ80I.formHandler.getError(`firstName`));
ec('div');
}let elUVjGy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbQ80I.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elbQ80I.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
elUVjGy.value = fval(component.lastName);
let cndJT0X = elbQ80I.formHandler.getError(`lastName`);
this.setState('stcYZtl', cndJT0X);
if (cndJT0X) { 
let elx8fJt = eo('div','PzQf',null,`class`,`alert alert-danger`);
text(elbQ80I.formHandler.getError(`lastName`));
ec('div');
}let elobggs = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let el8LZVL = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbQ80I.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elbQ80I.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elbQ80I.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndYk0u = elbQ80I.formHandler.getError(`email`);
this.setState('stQ7JO3', cndYk0u);
if (cndYk0u) { 
let elCbsUA = eo('div','wGvf',null,`class`,`alert alert-danger`);
text(elbQ80I.formHandler.getError(`email`));
ec('div');
}let elScPQK = eo('div',null,null,`class`,`row`);
let el3e0MC = eo('div',null,null,`class`,`col-11 p-r-0`);
let elnAZeU = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cnd2D7A = component.errors.username;
this.setState('stHwYvE', cnd2D7A);
if (cnd2D7A) { 
let elihzLw = eo('div','0cUf',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let elW8MpU = eo('i',null,null,`title`,``,`class`,`${fas('question-circle') + ' col-1 username-help gray-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elW8MpU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let el0FqbY = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbQ80I.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elbQ80I.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elbQ80I.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndRTHM = elbQ80I.formHandler.getError(`password`);
this.setState('stBzZO5', cndRTHM);
if (cndRTHM) { 
let eldF9H8 = eo('div','Thrf',null,`class`,`alert alert-danger`);
text(elbQ80I.formHandler.getError(`password`));
ec('div');
}let elufT1K = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbQ80I.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elbQ80I.formHandler.value('password')) {return elbQ80I.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elbQ80I.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndGrGZ = elbQ80I.formHandler.getError(`confirmPassword`);
this.setState('st1w1I1', cndGrGZ);
if (cndGrGZ) { 
let elqItcg = eo('div','kYHf',null,`class`,`alert alert-danger`);
text(elbQ80I.formHandler.getError(`confirmPassword`));
ec('div');
}let elXGuMU = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cndifyi = !component.isRegistering;
this.setState('stAOLoS', cndifyi);
let cndF_2U = !(cndifyi);
this.setState('st5ow46', cndF_2U);
if (cndifyi) { 
let elZUscg = eo('span','6r8f');
text(trans('create-account'));
ec('span');
}else { 
let el27N20 = eo('span');
let eltE0bh = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
let elkbMAz = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let el8Xv4z = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let el4tVCg = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });