_Component({
                selector: 'login-page',
                c: 'LoginPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['login','errorMsg','isValidForm','isLoggingIn'],
                children: {},
                render: function (component) {
                    let elQvqKe = eo('div',null,null,`class`,`authLayout`);
let eloTvJI = eo('div',null,null,`class`,`auth`);
let elHoU5R = eo('h1',null,null,`class`,`text-center bold`);
text(`Mentoor!`);
ec('h1');
let elLNZRA = eo('h3',null,null,`class`,`text-center m-b-2 mt-2`);
text(trans('login'));
ec('h3');
let elk4y7E = eo('p',null,null,`class`,`text-center`);
text(`Hello again`);
let elPsjUj = ev('img',null,null,`src`,`${assets('images/smile.svg')}`,`class`,`loginImg`,`alt`,`Login`);
ec('p');
let elKNbc_ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.login($el)}]},`class`,`authForm`,`id`,`my-form`);

                if (! elKNbc_.formHandler) {
                    window.cfrmdlr = elKNbc_.formHandler = new FormHandler(elKNbc_, component);
                } else {
                    window.cfrmdlr = elKNbc_.formHandler;
                }
            let cndGjl8 = component.errorMsg;
this.setState('stVHUTn', cndGjl8);
if (cndGjl8) { 
let elLh0UT = eo('div','Klxf',null,`class`,`alert alert-danger`);
text(component.errorMsg);
ec('div');
}let elRVIOK = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKNbc_.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elKNbc_.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elKNbc_.formHandler.removeError(`email`);}]},`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);

                    setTimeout(function () {
                        let $el = elRVIOK;
                        
            if (true && ! elRVIOK.focused) {
                
                elRVIOK.focused = true;
                elRVIOK.focus();
            }
        ;
                    }, 20);                
                let cnd9Aj0 = elKNbc_.formHandler.getError(`email`);
this.setState('stjUq8S', cnd9Aj0);
if (cnd9Aj0) { 
let el1uCgD = eo('div','VRvf',null,`class`,`alert alert-danger`);
text(elKNbc_.formHandler.getError(`email`));
ec('div');
}let elGNMcf = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKNbc_.formHandler.addError(`password`, 'required', trans('validation.required'));}else if (value && value.length < 8) {return elKNbc_.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elKNbc_.formHandler.removeError(`password`);}]},`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
let cndVqJ9 = elKNbc_.formHandler.getError(`password`);
this.setState('stnMzzz', cndVqJ9);
if (cndVqJ9) { 
let elpA5Tu = eo('div','Xy1f',null,`class`,`alert alert-danger`);
text(elKNbc_.formHandler.getError(`password`));
ec('div');
}let elArCw1 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoggingIn},`class`,`btn btn-primary btn-block`);
let cndeRWc = ! component.isLoggingIn;
this.setState('stW4MA1', cndeRWc);
let cndp4I0 = !(cndeRWc);
this.setState('sttgw08', cndp4I0);
if (cndeRWc) { 
let el1cJXy = eo('span','rxyf');
text(trans('login'));
ec('span');
}else { 
let elpbgCw = eo('div',null,null,`class`,`text-center`);
let elFZvvb = eo('i',null,null,`class`,`${fas('spinner')} fa-spin fa-1x icon`);
ec('i');
ec('div');
}ec('button');
let elc5Oa3 = eo('div',null,null,`class`,`d-flex justify-content-between authLink m-1`);
let elWMUAy = eo('p');
text(`Don't have an account?`);
let el4ra6E = eo('a',null,null,`href`,`/register`,`class`,`mainColor ml-1`);
text(`Create new account`);
ec('a');
ec('p');
let elLuJsY = eo('a',null,null,`class`,`forgetLink`,`href`,`/forget-password`);
text(`Forget password !`);
ec('a');
ec('div');
ec('form');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });