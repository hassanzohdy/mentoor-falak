_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {cVzgJXNn9:'user-online',cpCPRAnYM:'table-actions',c2K7F92h8:'gold-icon',cQvjxy62G:'admin-table',cgDFvHxZq:'flk-modal',c00JsiaWv:'flk-dropdown-list',cM9S_2qn2:'gold-icon',cfJIBPnsQ:'flk-modal'},
                render: function (component) {
                    let cmpwBel = this._lc('cQvjxy62G', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let iifiCw = 'A28LLlU' + index;
let eln__Ms = eo('tr','CqKqAecT8WH7' + index+iifiCw);
let el3T5dQ = eo('td','NqLff'+iifiCw);
text(user.id);
ec('td');
let el4LGMB = eo('td','kPzff'+iifiCw);
let elVCl9Z = eo('span','ut2ff'+iifiCw);
text(user.name);
ec('span');
let cmp0LkB = this._lc('cVzgJXNn9', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +iifiCw});
let cndt6Uv = user.username;
this.setState('stgdrFx', cndt6Uv);
if (cndt6Uv) { 
let elYt4nE = eo('div','y2Tff'+iifiCw);
text('@' + user.username);
ec('div');
}ec('td');
let eljxmbi = eo('td','XwZff'+iifiCw);
text(user.gold.format());
ec('td');
let eluDAcd = eo('td','jfDff'+iifiCw);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let elRBN6Y = eo('td','HVqff'+iifiCw);
text(user.email);
ec('td');
let elDcKc3 = eo('td','iNvff'+iifiCw);
text(user.accountType);
ec('td');
let el4gplN = eo('td','Kp3ff'+iifiCw);
let cmp2Soa = this._lc('cpCPRAnYM', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +iifiCw});
let cnd0e1e = component.user.id == 1;
this.setState('stlY9H7', cnd0e1e);
if (cnd0e1e) { 
let el2Evun = eo('button','Fp5ff'+iifiCw,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let elRHAX_ = eo('button','_bYff'+iifiCw,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmpqGVy = this._lc('c2K7F92h8', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +iifiCw});
ec('button');
ec('td');
ec('tr');
}
}});
let cndWPJ_ = component.openModal;
this.setState('stfEC0_', cndWPJ_);
if (cndWPJ_) { 
let cmpYId0 = this._lc('cgDFvHxZq', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elNvzlu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elNvzlu.formHandler) {
                    window.cfrmdlr = elNvzlu.formHandler = new FormHandler(elNvzlu, component);
                } else {
                    window.cfrmdlr = elNvzlu.formHandler;
                }
            let el6Axb7 = eo('div',null,null,`class`,`form-group`);
let elzHP8R = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNvzlu.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elNvzlu.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elNvzlu.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elzHP8R.value = fval(component.formObject.email);
let cnddrGZ = elNvzlu.formHandler.getError(`email`);
this.setState('sta8ayn', cnddrGZ);
if (cnddrGZ) { 
let el6CNsU = eo('div','Sk3f',null,`class`,`alert alert-danger`);
text(elNvzlu.formHandler.getError(`email`));
ec('div');
}ec('div');
let elB_kGL = eo('div',null,null,`class`,`form-group`);
let elB5Geg = eo('div',null,null,`class`,`row`);
let elWcJ2w = eo('div',null,null,`class`,`col-md-6`);
let el_nJbr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNvzlu.formHandler.addError(`name`, 'required', trans('validation.required'));}return elNvzlu.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el_nJbr.value = fval(component.formObject.name);
let cndpe6K = elNvzlu.formHandler.getError(`name`);
this.setState('stvlkOC', cndpe6K);
if (cndpe6K) { 
let elOwlhw = eo('div','sZKf',null,`class`,`alert alert-danger`);
text(elNvzlu.formHandler.getError(`name`));
ec('div');
}ec('div');
let el5sbQ5 = eo('div',null,null,`class`,`col-md-6`);
let elUdgbm = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
elUdgbm.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let iivx2L = '3_gpDTO' + i;
let elJAL_U = eo('option','shszmUTxSZFB' + i+iivx2L,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elJAL_U.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elhZ5BB = eo('div',null,null,`class`,`form-group`);
let el_bhzG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return elNvzlu.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elNvzlu.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
el_bhzG.value = fval(component.formObject.password);
let cndmq5_ = elNvzlu.formHandler.getError(`password`);
this.setState('st17zIU', cndmq5_);
if (cndmq5_) { 
let elt9VWB = eo('div','uIYf',null,`class`,`alert alert-danger`);
text(elNvzlu.formHandler.getError(`password`));
ec('div');
}ec('div');
let elTpkC1 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elfvdgw = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stfEC0_'});
}let cndLej4 = component.rewardedUser;
this.setState('styhsh8', cndLej4);
if (cndLej4) { 
let cmpveBC = this._lc('cfJIBPnsQ', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let elqkkhh = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! elqkkhh.formHandler) {
                    window.cfrmdlr = elqkkhh.formHandler = new FormHandler(elqkkhh, component);
                } else {
                    window.cfrmdlr = elqkkhh.formHandler;
                }
            let elX4muK = eo('div',null,null,`class`,`form-group`);
elX4muK.cls = {'group-error': !!elqkkhh.formHandler.getError(`gold`) };

            for (let className in elX4muK.cls) {
                elX4muK.classList.toggle(className, elX4muK.cls[className]);
            }  
            let elAba8U = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let elbQcFg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJ3K9P = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqkkhh.formHandler.addError(`gold`, 'required', trans('validation.required'));}return elqkkhh.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cnd7usX = elqkkhh.formHandler.getError(`gold`);
this.setState('stxBF6n', cnd7usX);
if (cnd7usX) { 
let elJGw_H = eo('div','5g8f',null,`class`,`alert alert-danger`);
text(elqkkhh.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmpG47L = this._lc('c00JsiaWv', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'styhsh8'});
let elpPtGq = eo('div',null,null,`class`,`form-group`);
elpPtGq.cls = {'group-error': !!elqkkhh.formHandler.getError(`description`) };

            for (let className in elpPtGq.cls) {
                elpPtGq.classList.toggle(className, elpPtGq.cls[className]);
            }  
            let elJ_eJ6 = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let elUnlm8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWZYvV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqkkhh.formHandler.addError(`description`, 'required', trans('validation.required'));}return elqkkhh.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndNSJq = elqkkhh.formHandler.getError(`description`);
this.setState('stmCiAy', cndNSJq);
if (cndNSJq) { 
let elQKmk3 = eo('div','BPZf',null,`class`,`alert alert-danger`);
text(elqkkhh.formHandler.getError(`description`));
ec('div');
}ec('div');
let elFvPjC = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmpo7lP = this._lc('cM9S_2qn2', {parent:component,parentTop:flkModal,state:'styhsh8'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'styhsh8'});
}
                    this.isReadyToGo();
                }
        });