_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {csPePn7Rb:'flk-spinner',ciIIANIHg:'markdown',c5RF5LMyE:'layout',cmMElzvO_:'flk-datepicker',cfSx7JSdg:'flk-checkbox',czpQykTJ_:'flk-modal'},
                render: function (component) {
                    let cmpxzgp = this._lc('c5RF5LMyE', {parent:component,content:(layout) => {let elf5Kcs = eo('h1');
text(`Change Log`);
let cnd2KiQ = component.user.id == 1;
this.setState('stAwNFI', cnd2KiQ);
if (cnd2KiQ) { 
let elc5lkP = eo('button','N5yf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elfydAK = eo('i','Yprf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elyvqgx = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let el4kjJP = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cndx_Ws = component.isLoading;
this.setState('stkYKno', cndx_Ws);
let cndp5D4 = !(cndx_Ws);
this.setState('st6UJKt', cndp5D4);
if (cndx_Ws) { 
let cmpdnjq = this._lc('csPePn7Rb', {parent:component,parentTop:layout,state:'stkYKno'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iitE_E = 'd8NVgZb' + index;
let elxEAka = eo('div','aHBKHvWycU_n' + index+iitE_E,null,`class`,`version`);
let elzmnKi = eo('h1','Jzoff'+iitE_E,null,`class`,`m-b-1`);
let elljSPS = eo('span','y5nff'+iitE_E);
text('Version ' + version.version);
ec('span');
let cndgXRJ = component.user.id == 1;
this.setState('stEhPhT', cndgXRJ);
if (cndgXRJ) { 
let elyX00g = eo('button','DQCff'+iitE_E,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let elEvUrd = eo('i','Y8_ff'+iitE_E,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elG8SA8 = eo('h3','Gqbff'+iitE_E,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmpxfEJ = this._lc('ciIIANIHg', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iitE_E});
ec('div');
}
}}});
let cndRMWT = component.modalShouldBeOpened;
this.setState('stYxpv_', cndRMWT);
if (cndRMWT) { 
component.modal = this._lc('czpQykTJ_', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let eliU9Gj = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eliU9Gj.formHandler) {
                    window.cfrmdlr = eliU9Gj.formHandler = new FormHandler(eliU9Gj, component);
                } else {
                    window.cfrmdlr = eliU9Gj.formHandler;
                }
            let elh30mP = eo('div',null,null,`class`,`form-group`);
elh30mP.cls = {'group-error': !!eliU9Gj.formHandler.getError(`version`) };

            for (let className in elh30mP.cls) {
                elh30mP.classList.toggle(className, elh30mP.cls[className]);
            }  
            let el8hJQk = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let elRlU5O = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCjeUB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliU9Gj.formHandler.addError(`version`, 'required', trans('validation.required'));}return eliU9Gj.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elCjeUB.value = fval(component.data.version);
let cnd7ud5 = eliU9Gj.formHandler.getError(`version`);
this.setState('stXqFyQ', cnd7ud5);
if (cnd7ud5) { 
let el60R5A = eo('div','JDJf',null,`class`,`alert alert-danger`);
text(eliU9Gj.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmpOaEN = this._lc('cmMElzvO_', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'stYxpv_'});
let elCnXHE = eo('div',null,null,`class`,`form-group`);
elCnXHE.cls = {'group-error': !!eliU9Gj.formHandler.getError(`log`) };

            for (let className in elCnXHE.cls) {
                elCnXHE.classList.toggle(className, elCnXHE.cls[className]);
            }  
            let elkoRqo = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let elLLqjx = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elPQG5y = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliU9Gj.formHandler.addError(`log`, 'required', trans('validation.required'));}return eliU9Gj.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
elPQG5y.value = fval(component.data.log);
ec('textarea');
let cndaQjB = eliU9Gj.formHandler.getError(`log`);
this.setState('str7aQV', cndaQjB);
if (cndaQjB) { 
let elYzRFm = eo('div','xIbf',null,`class`,`alert alert-danger`);
text(eliU9Gj.formHandler.getError(`log`));
ec('div');
}ec('div');
let elXklj9 = eo('div',null,null,`class`,`form-group`);
let cmpS6dR = this._lc('cfSx7JSdg', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stYxpv_'});
ec('div');
let elu0hYG = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'stYxpv_'});
}
                    this.isReadyToGo();
                }
        });