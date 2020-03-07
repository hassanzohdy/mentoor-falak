_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let elHVo6D = eo('div',null,null,`class`,`authLayout`);
let elgCxky = eo('div',null,null,`class`,`auth`);
let elegWaa = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let el5Fya5 = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let elVDEMj = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = elVDEMj;

                if (! elVDEMj.formHandler) {
                    window.cfrmdlr = elVDEMj.formHandler = new FormHandler(elVDEMj, component);
                } else {
                    window.cfrmdlr = elVDEMj.formHandler;
                }
            let cndKp3Y = component.invitationCode;
this.setState('sta4s6P', cndKp3Y);
if (cndKp3Y) { 
let el9ANIe = ev('input','kTDf',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
el9ANIe.value = fval(component.invitationCode);
}let cndeGvR = component.errors.invitationCode;
this.setState('sttlSTb', cndeGvR);
if (cndeGvR) { 
let elTT35B = eo('div','RIxf',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let elcJTjw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVDEMj.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elVDEMj.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
elcJTjw.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = elcJTjw;
                        
            if (true && ! elcJTjw.focused) {
                elcJTjw.setSelectionRange(elcJTjw.value.length, elcJTjw.value.length)
                elcJTjw.focused = true;
                elcJTjw.focus();
            }
        ;
                    }, 20);                
                let cndz67Z = elVDEMj.formHandler.getError(`firstName`);
this.setState('stNgTye', cndz67Z);
if (cndz67Z) { 
let eloL4km = eo('div','uWsf',null,`class`,`alert alert-danger`);
text(elVDEMj.formHandler.getError(`firstName`));
ec('div');
}let elBNlyM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVDEMj.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elVDEMj.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
elBNlyM.value = fval(component.lastName);
let cndJhAO = elVDEMj.formHandler.getError(`lastName`);
this.setState('stEeR5p', cndJhAO);
if (cndJhAO) { 
let elkRf8j = eo('div','wVjf',null,`class`,`alert alert-danger`);
text(elVDEMj.formHandler.getError(`lastName`));
ec('div');
}let el9C059 = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let el05XZx = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVDEMj.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elVDEMj.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elVDEMj.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndtecJ = elVDEMj.formHandler.getError(`email`);
this.setState('stNdekZ', cndtecJ);
if (cndtecJ) { 
let elMx5Qi = eo('div','cBIf',null,`class`,`alert alert-danger`);
text(elVDEMj.formHandler.getError(`email`));
ec('div');
}let elrTgMj = eo('div',null,null,`class`,`row`);
let elU6Sow = eo('div',null,null,`class`,`col-11 p-r-0`);
let elf9ifE = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cndpoLW = component.errors.username;
this.setState('stdPNf9', cndpoLW);
if (cndpoLW) { 
let elVcZFt = eo('div','vfSf',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let eldj_Nb = eo('i',null,null,`title`,``,`class`,`${fas('question-circle')} col-1 username-help gray-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eldj_Nb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let elyDofP = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVDEMj.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elVDEMj.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elVDEMj.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndjD0q = elVDEMj.formHandler.getError(`password`);
this.setState('stSqJ8Q', cndjD0q);
if (cndjD0q) { 
let elg9beA = eo('div','aZMf',null,`class`,`alert alert-danger`);
text(elVDEMj.formHandler.getError(`password`));
ec('div');
}let elYbmxX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVDEMj.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elVDEMj.formHandler.value('password')) {return elVDEMj.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elVDEMj.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cndKFw4 = elVDEMj.formHandler.getError(`confirmPassword`);
this.setState('stgDqMk', cndKFw4);
if (cndKFw4) { 
let elhZgXa = eo('div','8bIf',null,`class`,`alert alert-danger`);
text(elVDEMj.formHandler.getError(`confirmPassword`));
ec('div');
}let el9VEGc = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cndV0t1 = !component.isRegistering;
this.setState('stCzvmk', cndV0t1);
let cndnH3t = !(cndV0t1);
this.setState('stwpuIc', cndnH3t);
if (cndV0t1) { 
let elMC1jw = eo('span','pmOf');
text(trans('create-account'));
ec('span');
}else { 
let el4W1tU = eo('span');
let eln_qa3 = eo('i',null,null,`class`,`${fas('spinner')} fa-spin icon`);
ec('i');
let el6CKKc = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let elIPa2X = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let elsnQsl = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });