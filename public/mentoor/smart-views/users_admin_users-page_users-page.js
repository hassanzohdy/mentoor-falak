_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {cgwUCXVnN:'user-online',cr7b1LCpF:'table-actions',c1K0apmKh:'gold-icon',cJHaaI2sb:'admin-table',cBJUmZIFZ:'flk-modal',c4EbMNikY:'flk-dropdown-list',c02_K_QE3:'gold-icon',csU19cwej:'flk-modal'},
                render: function (component) {
                    let cmpWfLe = this._lc('cJHaaI2sb', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let iiZ0uD = 'EnepUl1' + index;
let elPI7yx = eo('tr','DyQbstfrAvEt' + index+iiZ0uD);
let el9qtYY = eo('td','yZ1ff'+iiZ0uD);
text(user.id);
ec('td');
let elPG7vS = eo('td','setff'+iiZ0uD);
let el1Vtga = eo('span','zktff'+iiZ0uD);
text(user.name);
ec('span');
let cmpqNz5 = this._lc('cgwUCXVnN', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +iiZ0uD});
let cnd9nFM = user.username;
this.setState('st_9ick', cnd9nFM);
if (cnd9nFM) { 
let el3JI4C = eo('div','xZqff'+iiZ0uD);
text('@' + user.username);
ec('div');
}ec('td');
let elU1tJe = eo('td','dvdff'+iiZ0uD);
text(user.gold.format());
ec('td');
let elGnWyv = eo('td','T5Pff'+iiZ0uD);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let el3JMKe = eo('td','46Jff'+iiZ0uD);
text(user.email);
ec('td');
let elo_Lw8 = eo('td','8rsff'+iiZ0uD);
text(user.accountType);
ec('td');
let eltzI8U = eo('td','mpAff'+iiZ0uD);
let cmpVF_P = this._lc('cr7b1LCpF', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +iiZ0uD});
let cndDCBT = component.user.id == 1;
this.setState('stGGsix', cndDCBT);
if (cndDCBT) { 
let el5SiUk = eo('button','HSYff'+iiZ0uD,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let elBtdds = eo('button','fx0ff'+iiZ0uD,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmpE7yc = this._lc('c1K0apmKh', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +iiZ0uD});
ec('button');
ec('td');
ec('tr');
}
}});
let cndtRnf = component.openModal;
this.setState('stHtqN5', cndtRnf);
if (cndtRnf) { 
let cmpqhxg = this._lc('cBJUmZIFZ', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elx00Zz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elx00Zz.formHandler) {
                    window.cfrmdlr = elx00Zz.formHandler = new FormHandler(elx00Zz, component);
                } else {
                    window.cfrmdlr = elx00Zz.formHandler;
                }
            let eld2cWb = eo('div',null,null,`class`,`form-group`);
let elt8mP7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elx00Zz.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elx00Zz.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elx00Zz.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elt8mP7.value = fval(component.formObject.email);
let cndHPGH = elx00Zz.formHandler.getError(`email`);
this.setState('st2K2bv', cndHPGH);
if (cndHPGH) { 
let el5MTBs = eo('div','XpYf',null,`class`,`alert alert-danger`);
text(elx00Zz.formHandler.getError(`email`));
ec('div');
}ec('div');
let elGYQd6 = eo('div',null,null,`class`,`form-group`);
let elq7qzg = eo('div',null,null,`class`,`row`);
let elBCSlt = eo('div',null,null,`class`,`col-md-6`);
let elSdxDM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elx00Zz.formHandler.addError(`name`, 'required', trans('validation.required'));}return elx00Zz.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elSdxDM.value = fval(component.formObject.name);
let cndPsxI = elx00Zz.formHandler.getError(`name`);
this.setState('stjbOmL', cndPsxI);
if (cndPsxI) { 
let eltQvVH = eo('div','Z7Rf',null,`class`,`alert alert-danger`);
text(elx00Zz.formHandler.getError(`name`));
ec('div');
}ec('div');
let elA4e6U = eo('div',null,null,`class`,`col-md-6`);
let elMjkP3 = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
elMjkP3.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let iiuukX = '0_P2jIJ' + i;
let elyPW2L = eo('option','Pc8mSqFGDWC6' + i+iiuukX,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elyPW2L.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elrKybW = eo('div',null,null,`class`,`form-group`);
let elzsSEa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return elx00Zz.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elx00Zz.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
elzsSEa.value = fval(component.formObject.password);
let cnd3q3E = elx00Zz.formHandler.getError(`password`);
this.setState('stBTe6P', cnd3q3E);
if (cnd3q3E) { 
let el4HnJ0 = eo('div','HYbf',null,`class`,`alert alert-danger`);
text(elx00Zz.formHandler.getError(`password`));
ec('div');
}ec('div');
let el0PtGl = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eldb7Fb = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stHtqN5'});
}let cndL8wT = component.rewardedUser;
this.setState('stAQBpp', cndL8wT);
if (cndL8wT) { 
let cmpPwM2 = this._lc('csU19cwej', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let el51aEr = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! el51aEr.formHandler) {
                    window.cfrmdlr = el51aEr.formHandler = new FormHandler(el51aEr, component);
                } else {
                    window.cfrmdlr = el51aEr.formHandler;
                }
            let elIuqXk = eo('div',null,null,`class`,`form-group`);
elIuqXk.cls = {'group-error': !!el51aEr.formHandler.getError(`gold`) };

            for (let className in elIuqXk.cls) {
                elIuqXk.classList.toggle(className, elIuqXk.cls[className]);
            }  
            let elDTHLr = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let el4HD3t = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elD_Mw2 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el51aEr.formHandler.addError(`gold`, 'required', trans('validation.required'));}return el51aEr.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cndl2HM = el51aEr.formHandler.getError(`gold`);
this.setState('stfme0s', cndl2HM);
if (cndl2HM) { 
let elzor1d = eo('div','3nMf',null,`class`,`alert alert-danger`);
text(el51aEr.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmpqJNL = this._lc('c4EbMNikY', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'stAQBpp'});
let elR4Y5g = eo('div',null,null,`class`,`form-group`);
elR4Y5g.cls = {'group-error': !!el51aEr.formHandler.getError(`description`) };

            for (let className in elR4Y5g.cls) {
                elR4Y5g.classList.toggle(className, elR4Y5g.cls[className]);
            }  
            let elp0FGZ = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let ello_Go = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elBFa0V = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el51aEr.formHandler.addError(`description`, 'required', trans('validation.required'));}return el51aEr.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndOn9E = el51aEr.formHandler.getError(`description`);
this.setState('stn3Jyx', cndOn9E);
if (cndOn9E) { 
let eltVoJ6 = eo('div','Gmvf',null,`class`,`alert alert-danger`);
text(el51aEr.formHandler.getError(`description`));
ec('div');
}ec('div');
let el_7561 = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmpfoGr = this._lc('c02_K_QE3', {parent:component,parentTop:flkModal,state:'stAQBpp'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'stAQBpp'});
}
                    this.isReadyToGo();
                }
        });