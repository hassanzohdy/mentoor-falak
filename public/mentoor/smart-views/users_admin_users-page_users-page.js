_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {c_gMOyQoO:'user-online',cohZMOAe1:'table-actions',cqH_yBSZi:'gold-icon',ck548FiOR:'admin-table',ch9Yj4eaG:'flk-modal',cjcgUL9za:'flk-dropdown-list',csRxfCHLR:'gold-icon',cr9vYvTNN:'flk-modal'},
                render: function (component) {
                    let cmpLcAF = this._lc('ck548FiOR', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let iiDimS = '9XlnoWb' + index;
let elSDvT4 = eo('tr','uZanGa5ALMQY' + index+iiDimS);
let elvkSkA = eo('td','bT0ff'+iiDimS);
text(user.id);
ec('td');
let el9ZVHR = eo('td','Yd3ff'+iiDimS);
let elCXCyV = eo('span','L4lff'+iiDimS);
text(user.name);
ec('span');
let cmpgSMc = this._lc('c_gMOyQoO', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +iiDimS});
let cnd5xlf = user.username;
this.setState('stY4eXJ', cnd5xlf);
if (cnd5xlf) { 
let elBwUk5 = eo('div','BMRff'+iiDimS);
text('@' + user.username);
ec('div');
}ec('td');
let elzLKj5 = eo('td','kDDff'+iiDimS);
text(user.gold.format());
ec('td');
let elhF9V_ = eo('td','Kvhff'+iiDimS);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let el0rH1N = eo('td','986ff'+iiDimS);
text(user.email);
ec('td');
let elZbE8f = eo('td','kSrff'+iiDimS);
text(user.accountType);
ec('td');
let el0hBya = eo('td','cmZff'+iiDimS);
let cmprJ4O = this._lc('cohZMOAe1', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +iiDimS});
let cndBSB1 = component.user.id == 1;
this.setState('stocKjx', cndBSB1);
if (cndBSB1) { 
let elWixGe = eo('button','a3Wff'+iiDimS,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let elwPqhE = eo('button','YJSff'+iiDimS,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmpE5Ge = this._lc('cqH_yBSZi', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +iiDimS});
ec('button');
ec('td');
ec('tr');
}
}});
let cnd0gMx = component.openModal;
this.setState('stqI5w9', cnd0gMx);
if (cnd0gMx) { 
let cmp1JEI = this._lc('ch9Yj4eaG', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elR2oPQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elR2oPQ.formHandler) {
                    window.cfrmdlr = elR2oPQ.formHandler = new FormHandler(elR2oPQ, component);
                } else {
                    window.cfrmdlr = elR2oPQ.formHandler;
                }
            let elQXk9H = eo('div',null,null,`class`,`form-group`);
let ellzcYs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elR2oPQ.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elR2oPQ.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elR2oPQ.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
ellzcYs.value = fval(component.formObject.email);
let cndvDEE = elR2oPQ.formHandler.getError(`email`);
this.setState('stqwzLh', cndvDEE);
if (cndvDEE) { 
let elg0tGa = eo('div','mRKf',null,`class`,`alert alert-danger`);
text(elR2oPQ.formHandler.getError(`email`));
ec('div');
}ec('div');
let elx2IJJ = eo('div',null,null,`class`,`form-group`);
let elNbd8D = eo('div',null,null,`class`,`row`);
let elaKd_E = eo('div',null,null,`class`,`col-md-6`);
let elo0qFC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elR2oPQ.formHandler.addError(`name`, 'required', trans('validation.required'));}return elR2oPQ.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elo0qFC.value = fval(component.formObject.name);
let cndlY3P = elR2oPQ.formHandler.getError(`name`);
this.setState('stFcU64', cndlY3P);
if (cndlY3P) { 
let eluGe14 = eo('div','nKLf',null,`class`,`alert alert-danger`);
text(elR2oPQ.formHandler.getError(`name`));
ec('div');
}ec('div');
let elDpJX1 = eo('div',null,null,`class`,`col-md-6`);
let elsiUJ7 = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
elsiUJ7.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let iigXyX = 'd0dp_RN' + i;
let elEn2lj = eo('option','lqOSeFK87bpz' + i+iigXyX,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elEn2lj.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elgoADE = eo('div',null,null,`class`,`form-group`);
let elfXUcP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return elR2oPQ.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elR2oPQ.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
elfXUcP.value = fval(component.formObject.password);
let cndZdEY = elR2oPQ.formHandler.getError(`password`);
this.setState('stDhIb8', cndZdEY);
if (cndZdEY) { 
let elRqBUk = eo('div','iV_f',null,`class`,`alert alert-danger`);
text(elR2oPQ.formHandler.getError(`password`));
ec('div');
}ec('div');
let elL92aW = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elVIMwL = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stqI5w9'});
}let cndfZcx = component.rewardedUser;
this.setState('strYFCA', cndfZcx);
if (cndfZcx) { 
let cmprouM = this._lc('cr9vYvTNN', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let elQSB6O = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! elQSB6O.formHandler) {
                    window.cfrmdlr = elQSB6O.formHandler = new FormHandler(elQSB6O, component);
                } else {
                    window.cfrmdlr = elQSB6O.formHandler;
                }
            let elyxNWZ = eo('div',null,null,`class`,`form-group`);
elyxNWZ.cls = {'group-error': !!elQSB6O.formHandler.getError(`gold`) };

            for (let className in elyxNWZ.cls) {
                elyxNWZ.classList.toggle(className, elyxNWZ.cls[className]);
            }  
            let elZW6l0 = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let elbIok4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpmrvA = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQSB6O.formHandler.addError(`gold`, 'required', trans('validation.required'));}return elQSB6O.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cnd5LLW = elQSB6O.formHandler.getError(`gold`);
this.setState('stscyIw', cnd5LLW);
if (cnd5LLW) { 
let el7Jroy = eo('div','FPIf',null,`class`,`alert alert-danger`);
text(elQSB6O.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmpUrMU = this._lc('cjcgUL9za', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'strYFCA'});
let elohshj = eo('div',null,null,`class`,`form-group`);
elohshj.cls = {'group-error': !!elQSB6O.formHandler.getError(`description`) };

            for (let className in elohshj.cls) {
                elohshj.classList.toggle(className, elohshj.cls[className]);
            }  
            let eleDTTB = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let elsRUoE = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elyAfDh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQSB6O.formHandler.addError(`description`, 'required', trans('validation.required'));}return elQSB6O.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndlLjO = elQSB6O.formHandler.getError(`description`);
this.setState('st3Y2oo', cndlLjO);
if (cndlLjO) { 
let el98TYM = eo('div','0sGf',null,`class`,`alert alert-danger`);
text(elQSB6O.formHandler.getError(`description`));
ec('div');
}ec('div');
let elNpWAc = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmpvwHo = this._lc('csRxfCHLR', {parent:component,parentTop:flkModal,state:'strYFCA'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'strYFCA'});
}
                    this.isReadyToGo();
                }
        });