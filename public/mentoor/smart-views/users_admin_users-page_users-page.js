_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {cNMjJVll7:'user-online',cPajXw7Q5:'table-actions',cLR6DxI3Z:'gold-icon',crmABFzJp:'admin-table',cOap33uC5:'flk-modal',cm9Fb0Lxn:'flk-dropdown-list',cZHADEoqD:'gold-icon',cd1EVwy8I:'flk-modal'},
                render: function (component) {
                    let cmpNe0Y = this._lc('crmABFzJp', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let iiM8EP = 'FALVwWi' + index;
let elQH1kE = eo('tr','GycTbu8Qqsop' + index+iiM8EP);
let elLhIUQ = eo('td','m9Xff'+iiM8EP);
text(user.id);
ec('td');
let elDRvNy = eo('td','xqRff'+iiM8EP);
let elJ3BxB = eo('span','vIJff'+iiM8EP);
text(user.name);
ec('span');
let cmpY2i2 = this._lc('cNMjJVll7', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +iiM8EP});
let cndEw9H = user.username;
this.setState('staDM0v', cndEw9H);
if (cndEw9H) { 
let elwJB0P = eo('div','MdHff'+iiM8EP);
text('@' + user.username);
ec('div');
}ec('td');
let elX33O3 = eo('td','jofff'+iiM8EP);
text(user.gold.format());
ec('td');
let elWojAd = eo('td','jnpff'+iiM8EP);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let elu4Fg1 = eo('td','fp3ff'+iiM8EP);
text(user.email);
ec('td');
let elwAeKg = eo('td','AY1ff'+iiM8EP);
text(user.accountType);
ec('td');
let elA1Isn = eo('td','VGxff'+iiM8EP);
let cmpuE8V = this._lc('cPajXw7Q5', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +iiM8EP});
let cndYpAH = component.user.id == 1;
this.setState('stDjy1u', cndYpAH);
if (cndYpAH) { 
let elCDymJ = eo('button','1Cyff'+iiM8EP,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let eljbGbw = eo('button','gBaff'+iiM8EP,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmpVep9 = this._lc('cLR6DxI3Z', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +iiM8EP});
ec('button');
ec('td');
ec('tr');
}
}});
let cnd1pwZ = component.openModal;
this.setState('st6Foed', cnd1pwZ);
if (cnd1pwZ) { 
let cmpnC9I = this._lc('cOap33uC5', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elGQrZK = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elGQrZK.formHandler) {
                    window.cfrmdlr = elGQrZK.formHandler = new FormHandler(elGQrZK, component);
                } else {
                    window.cfrmdlr = elGQrZK.formHandler;
                }
            let elMQaBe = eo('div',null,null,`class`,`form-group`);
let elQmHSe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGQrZK.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elGQrZK.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elGQrZK.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elQmHSe.value = fval(component.formObject.email);
let cnd8n4Y = elGQrZK.formHandler.getError(`email`);
this.setState('stUx8SM', cnd8n4Y);
if (cnd8n4Y) { 
let elZihzm = eo('div','sGAf',null,`class`,`alert alert-danger`);
text(elGQrZK.formHandler.getError(`email`));
ec('div');
}ec('div');
let elsZGAS = eo('div',null,null,`class`,`form-group`);
let elboJ2o = eo('div',null,null,`class`,`row`);
let elSXVUy = eo('div',null,null,`class`,`col-md-6`);
let elen5xW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGQrZK.formHandler.addError(`name`, 'required', trans('validation.required'));}return elGQrZK.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elen5xW.value = fval(component.formObject.name);
let cnd5vXH = elGQrZK.formHandler.getError(`name`);
this.setState('stzOjfT', cnd5vXH);
if (cnd5vXH) { 
let elelnUN = eo('div','EzMf',null,`class`,`alert alert-danger`);
text(elGQrZK.formHandler.getError(`name`));
ec('div');
}ec('div');
let elEyzD1 = eo('div',null,null,`class`,`col-md-6`);
let el_hbSR = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
el_hbSR.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let ii3FPT = 'fSnI0he' + i;
let el6wPHT = eo('option','1csPS3wgm0Od' + i+ii3FPT,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
el6wPHT.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elYjuzY = eo('div',null,null,`class`,`form-group`);
let elkeudX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return elGQrZK.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elGQrZK.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
elkeudX.value = fval(component.formObject.password);
let cndHNt4 = elGQrZK.formHandler.getError(`password`);
this.setState('stdUYry', cndHNt4);
if (cndHNt4) { 
let elUGpK4 = eo('div','Q95f',null,`class`,`alert alert-danger`);
text(elGQrZK.formHandler.getError(`password`));
ec('div');
}ec('div');
let el9V3Qc = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el8HkUk = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st6Foed'});
}let cndFpYh = component.rewardedUser;
this.setState('stPvjs8', cndFpYh);
if (cndFpYh) { 
let cmp5hnn = this._lc('cd1EVwy8I', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let elmHRST = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! elmHRST.formHandler) {
                    window.cfrmdlr = elmHRST.formHandler = new FormHandler(elmHRST, component);
                } else {
                    window.cfrmdlr = elmHRST.formHandler;
                }
            let elMHCdk = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elmHRST.formHandler.getError(`gold`) })}`);
let elU7eQG = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let elS2G2Y = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkRouY = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmHRST.formHandler.addError(`gold`, 'required', trans('validation.required'));}return elmHRST.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cnd8LRq = elmHRST.formHandler.getError(`gold`);
this.setState('stxoOXV', cnd8LRq);
if (cnd8LRq) { 
let elUqmwl = eo('div','w0hf',null,`class`,`alert alert-danger`);
text(elmHRST.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmptoZk = this._lc('cm9Fb0Lxn', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'stPvjs8'});
let elj991U = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elmHRST.formHandler.getError(`description`) })}`);
let elZZwsK = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let elvo0oy = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHjnPL = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmHRST.formHandler.addError(`description`, 'required', trans('validation.required'));}return elmHRST.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndSc_J = elmHRST.formHandler.getError(`description`);
this.setState('stPek_9', cndSc_J);
if (cndSc_J) { 
let elQuly6 = eo('div','R0Bf',null,`class`,`alert alert-danger`);
text(elmHRST.formHandler.getError(`description`));
ec('div');
}ec('div');
let elPVJhU = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmpKSTQ = this._lc('cZHADEoqD', {parent:component,parentTop:flkModal,state:'stPvjs8'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'stPvjs8'});
}
                    this.isReadyToGo();
                }
        });