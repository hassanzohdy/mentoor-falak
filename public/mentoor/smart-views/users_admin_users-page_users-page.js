_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {cgIfYIOPz:'user-online',cM_5962dB:'table-actions',c056Fo1mx:'gold-icon',cQpOzoftT:'admin-table',cqQc2HEP8:'flk-modal',cvdHuSoYb:'flk-dropdown-list',crjiL0_k3:'gold-icon',cwT0G2BiU:'flk-modal'},
                render: function (component) {
                    let cmp5O8f = this._lc('cQpOzoftT', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let ii8Luf = '_3mIaw_' + index;
let el9fefp = eo('tr','O9h16jTGRMzT' + index+ii8Luf);
let elcR7YC = eo('td','Psgff'+ii8Luf);
text(user.id);
ec('td');
let elDLxd3 = eo('td','3BJff'+ii8Luf);
let el5miJK = eo('span','8L8ff'+ii8Luf);
text(user.name);
ec('span');
let cmpa1X2 = this._lc('cgIfYIOPz', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +ii8Luf});
let cndcgfu = user.username;
this.setState('stoI_z4', cndcgfu);
if (cndcgfu) { 
let el4PwjD = eo('div','KRWff'+ii8Luf);
text('@' + user.username);
ec('div');
}ec('td');
let elJfZQt = eo('td','Fj5ff'+ii8Luf);
text(user.gold.format());
ec('td');
let el9TaIx = eo('td','qK3ff'+ii8Luf);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let elNcZS5 = eo('td','Fznff'+ii8Luf);
text(user.email);
ec('td');
let elJnUDM = eo('td','sEiff'+ii8Luf);
text(user.accountType);
ec('td');
let elh7Hm2 = eo('td','jqEff'+ii8Luf);
let cmpZ1gJ = this._lc('cM_5962dB', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +ii8Luf});
let cndDm6e = component.user.id == 1;
this.setState('stthXUE', cndDm6e);
if (cndDm6e) { 
let elQhU9M = eo('button','B2bff'+ii8Luf,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let elHovdZ = eo('button','l0Aff'+ii8Luf,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmpZbsT = this._lc('c056Fo1mx', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +ii8Luf});
ec('button');
ec('td');
ec('tr');
}
}});
let cnd17FZ = component.openModal;
this.setState('st6puM9', cnd17FZ);
if (cnd17FZ) { 
let cmpqi6e = this._lc('cqQc2HEP8', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elH2fON = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elH2fON.formHandler) {
                    window.cfrmdlr = elH2fON.formHandler = new FormHandler(elH2fON, component);
                } else {
                    window.cfrmdlr = elH2fON.formHandler;
                }
            let elbNki_ = eo('div',null,null,`class`,`form-group`);
let elEE7WO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elH2fON.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elH2fON.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elH2fON.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elEE7WO.value = fval(component.formObject.email);
let cndgu6T = elH2fON.formHandler.getError(`email`);
this.setState('st8dF0u', cndgu6T);
if (cndgu6T) { 
let elE_dIN = eo('div','jJZf',null,`class`,`alert alert-danger`);
text(elH2fON.formHandler.getError(`email`));
ec('div');
}ec('div');
let elsfYzI = eo('div',null,null,`class`,`form-group`);
let elljCtb = eo('div',null,null,`class`,`row`);
let elKoETv = eo('div',null,null,`class`,`col-md-6`);
let eljsHAJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elH2fON.formHandler.addError(`name`, 'required', trans('validation.required'));}return elH2fON.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eljsHAJ.value = fval(component.formObject.name);
let cnd4Wkd = elH2fON.formHandler.getError(`name`);
this.setState('stkjsTs', cnd4Wkd);
if (cnd4Wkd) { 
let elNlv7D = eo('div','xEef',null,`class`,`alert alert-danger`);
text(elH2fON.formHandler.getError(`name`));
ec('div');
}ec('div');
let elZFSVq = eo('div',null,null,`class`,`col-md-6`);
let elmrTK8 = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
elmrTK8.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let iiPOlL = 'epXvwAW' + i;
let elLCOYM = eo('option','OB_pDUszKpZ6' + i+iiPOlL,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elLCOYM.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elDiT9S = eo('div',null,null,`class`,`form-group`);
let elfGml5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return elH2fON.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elH2fON.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
elfGml5.value = fval(component.formObject.password);
let cndaYo2 = elH2fON.formHandler.getError(`password`);
this.setState('stkn9Kj', cndaYo2);
if (cndaYo2) { 
let ell5prM = eo('div','qDcf',null,`class`,`alert alert-danger`);
text(elH2fON.formHandler.getError(`password`));
ec('div');
}ec('div');
let eloGOAV = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elgqX95 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st6puM9'});
}let cndiM02 = component.rewardedUser;
this.setState('stc8pa_', cndiM02);
if (cndiM02) { 
let cmpbCDr = this._lc('cwT0G2BiU', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let elc8TqL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! elc8TqL.formHandler) {
                    window.cfrmdlr = elc8TqL.formHandler = new FormHandler(elc8TqL, component);
                } else {
                    window.cfrmdlr = elc8TqL.formHandler;
                }
            let elNDFyH = eo('div',null,null,`class`,`form-group`);
elNDFyH.cls = {'group-error': !!elc8TqL.formHandler.getError(`gold`) };

            for (let className in elNDFyH.cls) {
                elNDFyH.classList.toggle(className, elNDFyH.cls[className]);
            }  
            let eljzY_N = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let el4XTr0 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWVvme = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elc8TqL.formHandler.addError(`gold`, 'required', trans('validation.required'));}return elc8TqL.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cndvktU = elc8TqL.formHandler.getError(`gold`);
this.setState('stw2Z5_', cndvktU);
if (cndvktU) { 
let elEjA_5 = eo('div','Onwf',null,`class`,`alert alert-danger`);
text(elc8TqL.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmpCbWV = this._lc('cvdHuSoYb', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'stc8pa_'});
let elP7t_d = eo('div',null,null,`class`,`form-group`);
elP7t_d.cls = {'group-error': !!elc8TqL.formHandler.getError(`description`) };

            for (let className in elP7t_d.cls) {
                elP7t_d.classList.toggle(className, elP7t_d.cls[className]);
            }  
            let elhRjVy = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let elATUow = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWBk5s = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elc8TqL.formHandler.addError(`description`, 'required', trans('validation.required'));}return elc8TqL.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndAwiX = elc8TqL.formHandler.getError(`description`);
this.setState('stMa3am', cndAwiX);
if (cndAwiX) { 
let elQn3tA = eo('div','qzBf',null,`class`,`alert alert-danger`);
text(elc8TqL.formHandler.getError(`description`));
ec('div');
}ec('div');
let el5OhqX = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmp7Elq = this._lc('crjiL0_k3', {parent:component,parentTop:flkModal,state:'stc8pa_'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'stc8pa_'});
}
                    this.isReadyToGo();
                }
        });