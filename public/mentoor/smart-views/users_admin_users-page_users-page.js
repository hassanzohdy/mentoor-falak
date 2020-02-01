_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {cXopI7JOL:'user-online',cwm7J6FJ8:'table-actions',cukDLYX1b:'gold-icon',c9KNnD5Hz:'admin-table',c8vI5gsuL:'flk-modal',cS2LXGkex:'flk-dropdown-list',cvTlv4Xmm:'gold-icon',cZ5jPxSiB:'flk-modal'},
                render: function (component) {
                    let cmpt9oU = this._lc('c9KNnD5Hz', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let ii2YI0 = '4LDydIr' + index;
let elaWAJP = eo('tr','vVCL5JGKvtxi' + index+ii2YI0);
let eljgBGo = eo('td','jtJff'+ii2YI0);
text(user.id);
ec('td');
let eljWS8u = eo('td','w8Off'+ii2YI0);
let elx9NLr = eo('span','VO6ff'+ii2YI0);
text(user.name);
ec('span');
let cmpK1Pt = this._lc('cXopI7JOL', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +ii2YI0});
let cndOr_I = user.username;
this.setState('stZci6a', cndOr_I);
if (cndOr_I) { 
let elTmP7K = eo('div','CKAff'+ii2YI0);
text('@' + user.username);
ec('div');
}ec('td');
let eltO6Rz = eo('td','jhrff'+ii2YI0);
text(user.gold.format());
ec('td');
let eleA2o9 = eo('td','b8qff'+ii2YI0);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let elALhMI = eo('td','3lIff'+ii2YI0);
text(user.email);
ec('td');
let elXPfQU = eo('td','f3Xff'+ii2YI0);
text(user.accountType);
ec('td');
let elEdEox = eo('td','yMmff'+ii2YI0);
let cmpIA5L = this._lc('cwm7J6FJ8', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +ii2YI0});
let cndqN3n = component.user.id == 1;
this.setState('steEiYM', cndqN3n);
if (cndqN3n) { 
let elnFDXF = eo('button','REkff'+ii2YI0,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let eliW3ru = eo('button','ZDSff'+ii2YI0,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmpFqnA = this._lc('cukDLYX1b', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +ii2YI0});
ec('button');
ec('td');
ec('tr');
}
}});
let cndL7pT = component.openModal;
this.setState('st2UmiQ', cndL7pT);
if (cndL7pT) { 
let cmplPD7 = this._lc('c8vI5gsuL', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elcvGgr = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elcvGgr.formHandler) {
                    window.cfrmdlr = elcvGgr.formHandler = new FormHandler(elcvGgr, component);
                } else {
                    window.cfrmdlr = elcvGgr.formHandler;
                }
            let elrTPEr = eo('div',null,null,`class`,`form-group`);
let elJpJcr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elcvGgr.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elcvGgr.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elcvGgr.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
elJpJcr.value = fval(component.formObject.email);
let cnd1uA2 = elcvGgr.formHandler.getError(`email`);
this.setState('staQt0H', cnd1uA2);
if (cnd1uA2) { 
let elGcJEM = eo('div','Pm6f',null,`class`,`alert alert-danger`);
text(elcvGgr.formHandler.getError(`email`));
ec('div');
}ec('div');
let elCcp92 = eo('div',null,null,`class`,`form-group`);
let el5oM_H = eo('div',null,null,`class`,`row`);
let elajQZ4 = eo('div',null,null,`class`,`col-md-6`);
let elGzzoP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elcvGgr.formHandler.addError(`name`, 'required', trans('validation.required'));}return elcvGgr.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elGzzoP.value = fval(component.formObject.name);
let cndlo0v = elcvGgr.formHandler.getError(`name`);
this.setState('st30bgz', cndlo0v);
if (cndlo0v) { 
let eliLBP1 = eo('div','JmAf',null,`class`,`alert alert-danger`);
text(elcvGgr.formHandler.getError(`name`));
ec('div');
}ec('div');
let el8M0QA = eo('div',null,null,`class`,`col-md-6`);
let elxk5wf = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
elxk5wf.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let iijLUr = 'TnYrfYz' + i;
let elQhYs9 = eo('option','SFSGLnbEUskJ' + i+iijLUr,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elQhYs9.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elVnmVB = eo('div',null,null,`class`,`form-group`);
let eldDNso = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return elcvGgr.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elcvGgr.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
eldDNso.value = fval(component.formObject.password);
let cndMhlM = elcvGgr.formHandler.getError(`password`);
this.setState('stU2cEr', cndMhlM);
if (cndMhlM) { 
let elIv1zU = eo('div','eCTf',null,`class`,`alert alert-danger`);
text(elcvGgr.formHandler.getError(`password`));
ec('div');
}ec('div');
let elHI0Eh = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elZqztY = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st2UmiQ'});
}let cnd_EDt = component.rewardedUser;
this.setState('stFprqj', cnd_EDt);
if (cnd_EDt) { 
let cmpyMpB = this._lc('cZ5jPxSiB', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let elszsye = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! elszsye.formHandler) {
                    window.cfrmdlr = elszsye.formHandler = new FormHandler(elszsye, component);
                } else {
                    window.cfrmdlr = elszsye.formHandler;
                }
            let eln2Nzv = eo('div',null,null,`class`,`form-group`);
eln2Nzv.cls = {'group-error': !!elszsye.formHandler.getError(`gold`) };

            for (let className in eln2Nzv.cls) {
                eln2Nzv.classList.toggle(className, eln2Nzv.cls[className]);
            }  
            let elvQtqG = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let elgoEsD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1iWHq = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elszsye.formHandler.addError(`gold`, 'required', trans('validation.required'));}return elszsye.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cndGf_l = elszsye.formHandler.getError(`gold`);
this.setState('stXtUBN', cndGf_l);
if (cndGf_l) { 
let el18q9u = eo('div','SMOf',null,`class`,`alert alert-danger`);
text(elszsye.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmp9ckt = this._lc('cS2LXGkex', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'stFprqj'});
let elt3S9i = eo('div',null,null,`class`,`form-group`);
elt3S9i.cls = {'group-error': !!elszsye.formHandler.getError(`description`) };

            for (let className in elt3S9i.cls) {
                elt3S9i.classList.toggle(className, elt3S9i.cls[className]);
            }  
            let elATnBg = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let el7YXH6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwnwIn = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elszsye.formHandler.addError(`description`, 'required', trans('validation.required'));}return elszsye.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndg_vY = elszsye.formHandler.getError(`description`);
this.setState('stOB1nH', cndg_vY);
if (cndg_vY) { 
let el2Ddx4 = eo('div','84hf',null,`class`,`alert alert-danger`);
text(elszsye.formHandler.getError(`description`));
ec('div');
}ec('div');
let elncixI = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmpV6qQ = this._lc('cvTlv4Xmm', {parent:component,parentTop:flkModal,state:'stFprqj'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'stFprqj'});
}
                    this.isReadyToGo();
                }
        });