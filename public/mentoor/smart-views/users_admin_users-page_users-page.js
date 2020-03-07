_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {c0DLYrp5o:'user-online',ccy58gJlZ:'table-actions',cNJ0xI7ai:'gold-icon',ckcHULa4F:'admin-table',c4MXcU4v1:'flk-modal',cD0l0CEqG:'flk-dropdown-list',cZ5zBV9DD:'gold-icon',cxifvMzB3:'flk-modal'},
                render: function (component) {
                    let cmpzSQR = this._lc('ckcHULa4F', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let iiEruq = 'oLc1VXJ' + index;
let el8TkBZ = eo('tr','1ttQd6jU8BaC' + index+iiEruq);
let elfmYaY = eo('td','Kvyff'+iiEruq);
text(user.id);
ec('td');
let eloTJTL = eo('td','Ezeff'+iiEruq);
let elbGJ3f = eo('span','D18ff'+iiEruq);
text(user.name);
ec('span');
let cmpENTc = this._lc('c0DLYrp5o', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +iiEruq});
let cnd8J37 = user.username;
this.setState('stf68qA', cnd8J37);
if (cnd8J37) { 
let elaNwjW = eo('div','KFKff'+iiEruq);
text('@' + user.username);
ec('div');
}ec('td');
let elVTfOh = eo('td','yoFff'+iiEruq);
text(user.gold.format());
ec('td');
let ele_4EU = eo('td','Pw4ff'+iiEruq);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let elbIwgc = eo('td','ahKff'+iiEruq);
text(user.email);
ec('td');
let elHeCsw = eo('td','F9Eff'+iiEruq);
text(user.accountType);
ec('td');
let eltdwkf = eo('td','2zGff'+iiEruq);
let cmp38r6 = this._lc('ccy58gJlZ', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +iiEruq});
let cnd4zzS = component.user.id == 1;
this.setState('stTgOhe', cnd4zzS);
if (cnd4zzS) { 
let elaV_uB = eo('button','euoff'+iiEruq,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let elLmJMR = eo('button','zMeff'+iiEruq,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmpp7ef = this._lc('cNJ0xI7ai', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +iiEruq});
ec('button');
ec('td');
ec('tr');
}
}});
let cnd9MsC = component.openModal;
this.setState('stGi0Vu', cnd9MsC);
if (cnd9MsC) { 
let cmp51Od = this._lc('c4MXcU4v1', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elm5htQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elm5htQ.formHandler) {
                    window.cfrmdlr = elm5htQ.formHandler = new FormHandler(elm5htQ, component);
                } else {
                    window.cfrmdlr = elm5htQ.formHandler;
                }
            let elpl4la = eo('div',null,null,`class`,`form-group`);
let elBg6X1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elm5htQ.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elm5htQ.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elm5htQ.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elBg6X1.value = fval(component.formObject.email);
let cndodWi = elm5htQ.formHandler.getError(`email`);
this.setState('stGB78x', cndodWi);
if (cndodWi) { 
let elMzdN_ = eo('div','5UJf',null,`class`,`alert alert-danger`);
text(elm5htQ.formHandler.getError(`email`));
ec('div');
}ec('div');
let elFfjvT = eo('div',null,null,`class`,`form-group`);
let elSLGZJ = eo('div',null,null,`class`,`row`);
let elNI74N = eo('div',null,null,`class`,`col-md-6`);
let el_TNxr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elm5htQ.formHandler.addError(`name`, 'required', trans('validation.required'));}return elm5htQ.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el_TNxr.value = fval(component.formObject.name);
let cndRltZ = elm5htQ.formHandler.getError(`name`);
this.setState('stPwS60', cndRltZ);
if (cndRltZ) { 
let eluyQkF = eo('div','9_Jf',null,`class`,`alert alert-danger`);
text(elm5htQ.formHandler.getError(`name`));
ec('div');
}ec('div');
let elkaSTS = eo('div',null,null,`class`,`col-md-6`);
let el4oZng = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
el4oZng.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let ii0VNP = 'RXsvw4e' + i;
let elPxSVk = eo('option','UW25fmBA0kGG' + i+ii0VNP,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elPxSVk.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elI2Q_p = eo('div',null,null,`class`,`form-group`);
let elO2HAl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return elm5htQ.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elm5htQ.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
elO2HAl.value = fval(component.formObject.password);
let cnduux2 = elm5htQ.formHandler.getError(`password`);
this.setState('styRHjZ', cnduux2);
if (cnduux2) { 
let elIutXr = eo('div','wtqf',null,`class`,`alert alert-danger`);
text(elm5htQ.formHandler.getError(`password`));
ec('div');
}ec('div');
let elDBfWW = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el03akV = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stGi0Vu'});
}let cndXebx = component.rewardedUser;
this.setState('stXUh4U', cndXebx);
if (cndXebx) { 
let cmpj9Ul = this._lc('cxifvMzB3', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let eljmDWn = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! eljmDWn.formHandler) {
                    window.cfrmdlr = eljmDWn.formHandler = new FormHandler(eljmDWn, component);
                } else {
                    window.cfrmdlr = eljmDWn.formHandler;
                }
            let el8nBnv = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljmDWn.formHandler.getError(`gold`) })}`);
let elvlvgB = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let eltdMWG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYwz_a = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljmDWn.formHandler.addError(`gold`, 'required', trans('validation.required'));}return eljmDWn.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cndhihe = eljmDWn.formHandler.getError(`gold`);
this.setState('stgSwHz', cndhihe);
if (cndhihe) { 
let elDNhSy = eo('div','Dumf',null,`class`,`alert alert-danger`);
text(eljmDWn.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmp2BvY = this._lc('cD0l0CEqG', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'stXUh4U'});
let eloYNJU = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljmDWn.formHandler.getError(`description`) })}`);
let elhA_Gt = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let elgwOmY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elw_kku = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljmDWn.formHandler.addError(`description`, 'required', trans('validation.required'));}return eljmDWn.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndnbYU = eljmDWn.formHandler.getError(`description`);
this.setState('stegNzv', cndnbYU);
if (cndnbYU) { 
let eluWFuy = eo('div','Nhtf',null,`class`,`alert alert-danger`);
text(eljmDWn.formHandler.getError(`description`));
ec('div');
}ec('div');
let elxqegW = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmp1lNX = this._lc('cZ5zBV9DD', {parent:component,parentTop:flkModal,state:'stXUh4U'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'stXUh4U'});
}
                    this.isReadyToGo();
                }
        });