_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {cmmsdQOmE:'user-online',cP3ToJ1uC:'table-actions',ch6JafadM:'gold-icon',c3uiDwJb3:'admin-table',cR_ywpULW:'flk-modal',cVCwko7w9:'flk-dropdown-list',cy82ESTPm:'gold-icon',cwNOvR8Ma:'flk-modal'},
                render: function (component) {
                    let cmp6Utp = this._lc('c3uiDwJb3', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let iiHNa_ = 'M5kQd1q' + index;
let elpEmQH = eo('tr','wFRbW50HxcAJ' + index+iiHNa_);
let elMhPus = eo('td','R67ff'+iiHNa_);
text(user.id);
ec('td');
let elCkeVM = eo('td','cjtff'+iiHNa_);
let el5NPXO = eo('span','EYCff'+iiHNa_);
text(user.name);
ec('span');
let cmpGX1X = this._lc('cmmsdQOmE', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +iiHNa_});
let cndceXI = user.username;
this.setState('stG8YpE', cndceXI);
if (cndceXI) { 
let elgcz1Z = eo('div','jBAff'+iiHNa_);
text('@' + user.username);
ec('div');
}ec('td');
let el6o51e = eo('td','B77ff'+iiHNa_);
text(user.gold.format());
ec('td');
let el4SXBB = eo('td','m8uff'+iiHNa_);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let elhHwAT = eo('td','3PPff'+iiHNa_);
text(user.email);
ec('td');
let elgKQEj = eo('td','1tYff'+iiHNa_);
text(user.accountType);
ec('td');
let eltTHUP = eo('td','_ieff'+iiHNa_);
let cmp1rj_ = this._lc('cP3ToJ1uC', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +iiHNa_});
let cndV4Ik = component.user.id == 1;
this.setState('stUO2j3', cndV4Ik);
if (cndV4Ik) { 
let elPVBMG = eo('button','Biwff'+iiHNa_,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let elsHqo1 = eo('button','bt5ff'+iiHNa_,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmp_Qkz = this._lc('ch6JafadM', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +iiHNa_});
ec('button');
ec('td');
ec('tr');
}
}});
let cndKlzo = component.openModal;
this.setState('stXO_b3', cndKlzo);
if (cndKlzo) { 
let cmpvSZp = this._lc('cR_ywpULW', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let el96xpZ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el96xpZ.formHandler) {
                    window.cfrmdlr = el96xpZ.formHandler = new FormHandler(el96xpZ, component);
                } else {
                    window.cfrmdlr = el96xpZ.formHandler;
                }
            let elIhEJD = eo('div',null,null,`class`,`form-group`);
let elliYjF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el96xpZ.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el96xpZ.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return el96xpZ.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elliYjF.value = fval(component.formObject.email);
let cndkSBf = el96xpZ.formHandler.getError(`email`);
this.setState('stpb3sG', cndkSBf);
if (cndkSBf) { 
let elot22S = eo('div','YRBf',null,`class`,`alert alert-danger`);
text(el96xpZ.formHandler.getError(`email`));
ec('div');
}ec('div');
let elE2njg = eo('div',null,null,`class`,`form-group`);
let elwATex = eo('div',null,null,`class`,`row`);
let el5Eo6K = eo('div',null,null,`class`,`col-md-6`);
let el8ipAj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el96xpZ.formHandler.addError(`name`, 'required', trans('validation.required'));}return el96xpZ.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el8ipAj.value = fval(component.formObject.name);
let cndiHzc = el96xpZ.formHandler.getError(`name`);
this.setState('st9KEqt', cndiHzc);
if (cndiHzc) { 
let elQARYG = eo('div','qXZf',null,`class`,`alert alert-danger`);
text(el96xpZ.formHandler.getError(`name`));
ec('div');
}ec('div');
let elpoFpo = eo('div',null,null,`class`,`col-md-6`);
let elbMP3K = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
elbMP3K.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let iiWPPP = '3wp_fuN' + i;
let elUoIXS = eo('option','HBngj7IYtjDF' + i+iiWPPP,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elUoIXS.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elWdfQB = eo('div',null,null,`class`,`form-group`);
let elSYGaZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return el96xpZ.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return el96xpZ.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
elSYGaZ.value = fval(component.formObject.password);
let cndSW3r = el96xpZ.formHandler.getError(`password`);
this.setState('stAlfoX', cndSW3r);
if (cndSW3r) { 
let elylgL3 = eo('div','y1sf',null,`class`,`alert alert-danger`);
text(el96xpZ.formHandler.getError(`password`));
ec('div');
}ec('div');
let elZ0QW3 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elJmCMt = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stXO_b3'});
}let cnd6NAo = component.rewardedUser;
this.setState('stcdqru', cnd6NAo);
if (cnd6NAo) { 
let cmpehzm = this._lc('cwNOvR8Ma', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let elda1Ow = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! elda1Ow.formHandler) {
                    window.cfrmdlr = elda1Ow.formHandler = new FormHandler(elda1Ow, component);
                } else {
                    window.cfrmdlr = elda1Ow.formHandler;
                }
            let elhmwv_ = eo('div',null,null,`class`,`form-group`);
elhmwv_.cls = {'group-error': !!elda1Ow.formHandler.getError(`gold`) };

            for (let className in elhmwv_.cls) {
                elhmwv_.classList.toggle(className, elhmwv_.cls[className]);
            }  
            let elO87aA = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let elyQ7zq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2OQx8 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elda1Ow.formHandler.addError(`gold`, 'required', trans('validation.required'));}return elda1Ow.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cndkubc = elda1Ow.formHandler.getError(`gold`);
this.setState('staYKiI', cndkubc);
if (cndkubc) { 
let el5_cYG = eo('div','4Ejf',null,`class`,`alert alert-danger`);
text(elda1Ow.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmpP8Fo = this._lc('cVCwko7w9', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'stcdqru'});
let elIaG9_ = eo('div',null,null,`class`,`form-group`);
elIaG9_.cls = {'group-error': !!elda1Ow.formHandler.getError(`description`) };

            for (let className in elIaG9_.cls) {
                elIaG9_.classList.toggle(className, elIaG9_.cls[className]);
            }  
            let elM5eDT = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let elWWlZc = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3bkc3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elda1Ow.formHandler.addError(`description`, 'required', trans('validation.required'));}return elda1Ow.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cnd_nME = elda1Ow.formHandler.getError(`description`);
this.setState('stS2JVk', cnd_nME);
if (cnd_nME) { 
let elkixOF = eo('div','8c_f',null,`class`,`alert alert-danger`);
text(elda1Ow.formHandler.getError(`description`));
ec('div');
}ec('div');
let elNgPN2 = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmpG6Mk = this._lc('cy82ESTPm', {parent:component,parentTop:flkModal,state:'stcdqru'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'stcdqru'});
}
                    this.isReadyToGo();
                }
        });