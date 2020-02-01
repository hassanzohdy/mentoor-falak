_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let el0yjn1 = eo('div',null,null,`class`,`authLayout`);
let elRL2mQ = eo('div',null,null,`class`,`auth`);
let elzbonO = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elkQADr = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let elZWFIZ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = elZWFIZ;

                if (! elZWFIZ.formHandler) {
                    window.cfrmdlr = elZWFIZ.formHandler = new FormHandler(elZWFIZ, component);
                } else {
                    window.cfrmdlr = elZWFIZ.formHandler;
                }
            let cndglKF = component.invitationCode;
this.setState('stueIHc', cndglKF);
if (cndglKF) { 
let el9FpOg = ev('input','cqIf',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
el9FpOg.value = fval(component.invitationCode);
}let cndkjce = component.errors.invitationCode;
this.setState('stsPPuM', cndkjce);
if (cndkjce) { 
let elK0_HD = eo('div','4Jtf',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let elWKB8k = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZWFIZ.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elZWFIZ.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
elWKB8k.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = elWKB8k;
                        
            if (true && ! elWKB8k.focused) {
                elWKB8k.setSelectionRange(elWKB8k.value.length, elWKB8k.value.length)
                elWKB8k.focused = true;
                elWKB8k.focus();
            }
        ;
                    }, 20);                
                let cndHeki = elZWFIZ.formHandler.getError(`firstName`);
this.setState('stn34NH', cndHeki);
if (cndHeki) { 
let elGH7E_ = eo('div','gKkf',null,`class`,`alert alert-danger`);
text(elZWFIZ.formHandler.getError(`firstName`));
ec('div');
}let elj5L37 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZWFIZ.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elZWFIZ.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
elj5L37.value = fval(component.lastName);
let cndEs2W = elZWFIZ.formHandler.getError(`lastName`);
this.setState('stRSiTM', cndEs2W);
if (cndEs2W) { 
let elAOoAG = eo('div','vSKf',null,`class`,`alert alert-danger`);
text(elZWFIZ.formHandler.getError(`lastName`));
ec('div');
}let elvo9Pq = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let elM5iuM = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZWFIZ.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elZWFIZ.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elZWFIZ.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndzOdn = elZWFIZ.formHandler.getError(`email`);
this.setState('st_aFpr', cndzOdn);
if (cndzOdn) { 
let el80usT = eo('div','bBif',null,`class`,`alert alert-danger`);
text(elZWFIZ.formHandler.getError(`email`));
ec('div');
}let elK49UR = eo('div',null,null,`class`,`row`);
let elcnvPQ = eo('div',null,null,`class`,`col-11 p-r-0`);
let elNzqYK = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cndU1iH = component.errors.username;
this.setState('stksshI', cndU1iH);
if (cndU1iH) { 
let elYbiO1 = eo('div','sjcf',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let el1l1zi = eo('i',null,null,`title`,``,`class`,`${fas('question-circle') + ' col-1 username-help gray-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el1l1zi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let eljyk8w = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZWFIZ.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elZWFIZ.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elZWFIZ.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndwk65 = elZWFIZ.formHandler.getError(`password`);
this.setState('stQ0vTG', cndwk65);
if (cndwk65) { 
let elbH8_x = eo('div','2JAf',null,`class`,`alert alert-danger`);
text(elZWFIZ.formHandler.getError(`password`));
ec('div');
}let el8yOE2 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZWFIZ.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elZWFIZ.formHandler.value('password')) {return elZWFIZ.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elZWFIZ.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndDfhe = elZWFIZ.formHandler.getError(`confirmPassword`);
this.setState('sttccQx', cndDfhe);
if (cndDfhe) { 
let elFuHfw = eo('div','aXbf',null,`class`,`alert alert-danger`);
text(elZWFIZ.formHandler.getError(`confirmPassword`));
ec('div');
}let el5BozV = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cndkgZJ = !component.isRegistering;
this.setState('stMrGOx', cndkgZJ);
let cndKMGF = !(cndkgZJ);
this.setState('stDqc3i', cndKMGF);
if (cndkgZJ) { 
let elB9cBB = eo('span','zQ_f');
text(trans('create-account'));
ec('span');
}else { 
let elh5EfR = eo('span');
let elW9_Uf = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
let elvDs6I = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let eliUUfT = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let elv6yKm = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });