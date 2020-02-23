_Component({
                selector: 'register-page',
                c: 'RegisterPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['register','invitationCode','errors','firstName','lastName','validateUserName','usernameRules','isValidForm','isRegistering'],
                children: {},
                render: function (component) {
                    let elNpuGM = eo('div',null,null,`class`,`authLayout`);
let elRT9Yi = eo('div',null,null,`class`,`auth`);
let elfZKv_ = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let el4qn8O = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('Create new account'));
ec('h3');
let elxEvEO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.register($el)}]},`class`,`authForm`,`id`,`my-form`);
component.form = elxEvEO;

                if (! elxEvEO.formHandler) {
                    window.cfrmdlr = elxEvEO.formHandler = new FormHandler(elxEvEO, component);
                } else {
                    window.cfrmdlr = elxEvEO.formHandler;
                }
            let cndvYAu = component.invitationCode;
this.setState('stP_yX2', cndvYAu);
if (cndvYAu) { 
let eljEtIX = ev('input','6x1f',null, eventListeners, {oninput:[function(e) {component.invitationCode = this.value;}]},`value`,`${fval(component.invitationCode)}`,`name`,`${(`invitationCode`).toInputName()}`,`type`,`hidden`);
eljEtIX.value = fval(component.invitationCode);
}let cndmpZq = component.errors.invitationCode;
this.setState('stuRsMC', cndmpZq);
if (cndmpZq) { 
let elpXwLa = eo('div','Ljaf',null,`class`,`alert alert-danger`);
text(component.errors.invitationCode);
ec('div');
}let el7Uzor = ev('input',null,null, eventListeners, {oninput:[function(e) {component.firstName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxEvEO.formHandler.addError(`firstName`, 'required', trans('validation.required'));}return elxEvEO.formHandler.removeError(`firstName`);}]},`value`,`${fval(component.firstName)}`,`name`,`${(`firstName`).toInputName()}`,`placeholder`,`${trans(`First Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`firstName`);
el7Uzor.value = fval(component.firstName);

                    setTimeout(function () {
                        let $el = el7Uzor;
                        
            if (true && ! el7Uzor.focused) {
                el7Uzor.setSelectionRange(el7Uzor.value.length, el7Uzor.value.length)
                el7Uzor.focused = true;
                el7Uzor.focus();
            }
        ;
                    }, 20);                
                let cndLkY4 = elxEvEO.formHandler.getError(`firstName`);
this.setState('st2p6dw', cndLkY4);
if (cndLkY4) { 
let el6pmXX = eo('div','Eoxf',null,`class`,`alert alert-danger`);
text(elxEvEO.formHandler.getError(`firstName`));
ec('div');
}let elFnWCp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.lastName = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxEvEO.formHandler.addError(`lastName`, 'required', trans('validation.required'));}return elxEvEO.formHandler.removeError(`lastName`);}]},`value`,`${fval(component.lastName)}`,`name`,`${(`lastName`).toInputName()}`,`placeholder`,`${trans(`Last Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`lastName`);
elFnWCp.value = fval(component.lastName);
let cndsUWC = elxEvEO.formHandler.getError(`lastName`);
this.setState('stfE_7h', cndsUWC);
if (cndsUWC) { 
let elnvskm = eo('div','29zf',null,`class`,`alert alert-danger`);
text(elxEvEO.formHandler.getError(`lastName`));
ec('div');
}let elYBSH1 = ev('input',null,null,`name`,`${(`name`).toInputName()}`,`type`,`hidden`,`value`,`${ component.firstName + ' ' + component.lastName }`);
let elNPRzL = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxEvEO.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elxEvEO.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elxEvEO.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
let cndVcaO = elxEvEO.formHandler.getError(`email`);
this.setState('stPSgia', cndVcaO);
if (cndVcaO) { 
let elqRkAW = eo('div','BmAf',null,`class`,`alert alert-danger`);
text(elxEvEO.formHandler.getError(`email`));
ec('div');
}let elNwJiG = eo('div',null,null,`class`,`row`);
let el6kOp3 = eo('div',null,null,`class`,`col-11 p-r-0`);
let eltR7YG = ev('input',null,null, eventListeners, {oninput:[function(e) {var $el = this;component.validateUserName($el.value)}]},`name`,`${(`username`).toInputName()}`,`placeholder`,`${trans(`Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`username`);
let cndHnbl = component.errors.username;
this.setState('str00Ma', cndHnbl);
if (cndHnbl) { 
let elNv28Q = eo('div','Lbuf',null,`class`,`alert alert-danger`);
text(component.errors.username);
ec('div');
}ec('div');
let eltgNus = eo('i',null,null,`title`,``,`class`,`${fas('question-circle') + ' col-1 username-help gray-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eltgNus;
                        
            true && tippyTooltip($el, {arrow:true,content:`${component.usernameRules.join('<br></fa>- ')}`});
        ;
                    }, 20);                
                ec('div');
let elmpdzJ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxEvEO.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elxEvEO.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elxEvEO.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndDtC6 = elxEvEO.formHandler.getError(`password`);
this.setState('stZ_Y8n', cndDtC6);
if (cndDtC6) { 
let elNjfxD = eo('div','os1f',null,`class`,`alert alert-danger`);
text(elxEvEO.formHandler.getError(`password`));
ec('div');
}let elYxhap = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxEvEO.formHandler.addError(`confirmPassword`, 'required', trans('validation.required'));}else if (value !== elxEvEO.formHandler.value('password')) {return elxEvEO.formHandler.addError(`confirmPassword`, 'match', trans('validation.match', trans('password')));}return elxEvEO.formHandler.removeError(`confirmPassword`);}]},`name`,`${(`confirmPassword`).toInputName()}`,`placeholder`,`${trans(`Confirm password`)}`,`type`,`password`,`class`,`form-control`,`id`,`confirmPassword`);
let cnd2DTV = elxEvEO.formHandler.getError(`confirmPassword`);
this.setState('stz5M5X', cnd2DTV);
if (cnd2DTV) { 
let elYynoQ = eo('div','2_Sf',null,`class`,`alert alert-danger`);
text(elxEvEO.formHandler.getError(`confirmPassword`));
ec('div');
}let elVLpt1 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isRegistering},`class`,`btn btn-primary btn-block`);
let cndm9VC = !component.isRegistering;
this.setState('stbaJQA', cndm9VC);
let cndhu0v = !(cndm9VC);
this.setState('stXooXX', cndhu0v);
if (cndm9VC) { 
let elQmB_n = eo('span','qoLf');
text(trans('create-account'));
ec('span');
}else { 
let elHRc9y = eo('span');
let elM70Ql = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
let elyLISC = eo('span');
text(trans('loading'));
ec('span');
ec('span');
}ec('button');
let elWDoRF = eo('p',null,null,`class`,`text-center authLink`);
text(`Already have an account?`);
let elJ6XVL = eo('a',null,null,`href`,`/login`,`class`,`mainColor ml-1`);
text(`Log in`);
ec('a');
ec('p');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });