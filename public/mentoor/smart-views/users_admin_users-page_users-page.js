_Component({
                selector: 'users-page',
                c: 'UsersPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','user','openAsUser','rewardedUser','openModal','closeModal','submit','formObject','accountTypes','isValidForm','submitting','giveReward','rewardsReasons','disableSubmit'],
                children: {cdz7qWrO8:'user-online',cZlBQRsSv:'table-actions',c9EFtF7UO:'gold-icon',cKOIuvvX2:'admin-table',cdKhLE38x:'flk-modal',cr42r7hti:'flk-dropdown-list',cgLXRaBPa:'gold-icon',crBlfSx2i:'flk-modal'},
                render: function (component) {
                    let cmpyjUC = this._lc('cKOIuvvX2', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let user = component.items[index]; 
 let ii1h5z = 'umND_pb' + index;
let el7aRUa = eo('tr','yJU99f3k58fl' + index+ii1h5z);
let elQMFjx = eo('td','9W7ff'+ii1h5z);
text(user.id);
ec('td');
let elKWQBj = eo('td','xChff'+ii1h5z);
let el6Fsdi = eo('span','SIkff'+ii1h5z);
text(user.name);
ec('span');
let cmpFWx0 = this._lc('cdz7qWrO8', {parent:component,parentTop:adminTable,props:{id:user.id},attrs:{id:`${user.id}`},insideLoop:true,index:"" +ii1h5z});
let cnd6I89 = user.username;
this.setState('styLa9Z', cnd6I89);
if (cnd6I89) { 
let elvXshI = eo('div','nF5ff'+ii1h5z);
text('@' + user.username);
ec('div');
}ec('td');
let elJKSnY = eo('td','8Buff'+ii1h5z);
text(user.gold.format());
ec('td');
let el4zvRJ = eo('td','k8iff'+ii1h5z);
text(Object.get(user.total, 'academy.answers.approved', ''));
ec('td');
let elwSlqs = eo('td','8lBff'+ii1h5z);
text(user.email);
ec('td');
let elViymr = eo('td','zK0ff'+ii1h5z);
text(user.accountType);
ec('td');
let elUAcue = eo('td','WIdff'+ii1h5z);
let cmp88yG = this._lc('cZlBQRsSv', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(user)},ondelete:function(e) {let $el = this; component.deleteItem(user.id, index)}},insideLoop:true,index:"" +ii1h5z});
let cndUL7p = component.user.id == 1;
this.setState('stcGwMv', cndUL7p);
if (cndUL7p) { 
let elhYCes = eo('button','bqzff'+ii1h5z,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAsUser(user)}]},`class`,`btn btn-sm btn-primary`);
text(`Open as`);
ec('button');
}let el20dXA = eo('button','hH0ff'+ii1h5z,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardedUser = user;}]},`class`,`btn btn-sm btn-success`);
let cmpbgEJ = this._lc('c9EFtF7UO', {parent:component,parentTop:adminTable,insideLoop:true,index:"" +ii1h5z});
ec('button');
ec('td');
ec('tr');
}
}});
let cndWC3j = component.openModal;
this.setState('stdQAGD', cndWC3j);
if (cndWC3j) { 
let cmpFf_G = this._lc('cdKhLE38x', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elUHrpW = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elUHrpW.formHandler) {
                    window.cfrmdlr = elUHrpW.formHandler = new FormHandler(elUHrpW, component);
                } else {
                    window.cfrmdlr = elUHrpW.formHandler;
                }
            let elre7cz = eo('div',null,null,`class`,`form-group`);
let eln4tlj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.email = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUHrpW.formHandler.addError(`email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elUHrpW.formHandler.addError(`email`, 'email', trans('invalid-email-address'));}return elUHrpW.formHandler.removeError(`email`);}]},`value`,`${fval(component.formObject.email)}`,`name`,`${(`email`).toInputName()}`,`placeholder`,`${trans(`Email`)}`,`type`,`email`,`class`,`form-control`,`id`,`email`);
eln4tlj.value = fval(component.formObject.email);
let cndaQAV = elUHrpW.formHandler.getError(`email`);
this.setState('stltJLj', cndaQAV);
if (cndaQAV) { 
let el2yq_s = eo('div','05Pf',null,`class`,`alert alert-danger`);
text(elUHrpW.formHandler.getError(`email`));
ec('div');
}ec('div');
let elR6eur = eo('div',null,null,`class`,`form-group`);
let elpjl3L = eo('div',null,null,`class`,`row`);
let elKWFrl = eo('div',null,null,`class`,`col-md-6`);
let eltwdWo = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUHrpW.formHandler.addError(`name`, 'required', trans('validation.required'));}return elUHrpW.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`User name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eltwdWo.value = fval(component.formObject.name);
let cndD_1S = elUHrpW.formHandler.getError(`name`);
this.setState('stkyjAA', cndD_1S);
if (cndD_1S) { 
let elhtAWq = eo('div','ahXf',null,`class`,`alert alert-danger`);
text(elUHrpW.formHandler.getError(`name`));
ec('div');
}ec('div');
let elavXRQ = eo('div',null,null,`class`,`col-md-6`);
let ellIpe2 = eo('select',null,null, eventListeners, {oninput:[function(e) {component.formObject.accountType = this.value;}]},`value`,`${fval(component.formObject.accountType)}`,`name`,`${(`accountType`).toInputName()}`,`required`,``,`class`,`form-control`);
ellIpe2.value = fval(component.formObject.accountType);
for (let i in component.accountTypes) {
let type = component.accountTypes[i]; 
 let iidben = 'P8qfNZ8' + i;
let elQbZJo = eo('option','WdJXvicCSuWz' + i+iidben,null, eventListeners, {oninput:[function(e) {type = this.value;}]},`value`,`${fval(type)}`);
elQbZJo.value = fval(type);
text(type);
ec('option');
}
ec('select');
ec('div');
ec('div');
ec('div');
let elTwIkj = eo('div',null,null,`class`,`form-group`);
let elHaqiI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.password = this.value;},function(e) {let value = this.value.trim();if (value && value.length < 8) {return elUHrpW.formHandler.addError(`password`, 'minlength', trans('validation.minLength', 8));}return elUHrpW.formHandler.removeError(`password`);}]},`value`,`${fval(component.formObject.password)}`,`name`,`${(`password`).toInputName()}`,`placeholder`,`${trans(`Password`)}`,`type`,`password`,`class`,`form-control`,`id`,`password`);
elHaqiI.value = fval(component.formObject.password);
let cndn4rn = elUHrpW.formHandler.getError(`password`);
this.setState('st5BZMr', cndn4rn);
if (cndn4rn) { 
let elBukfk = eo('div','4NOf',null,`class`,`alert alert-danger`);
text(elUHrpW.formHandler.getError(`password`));
ec('div');
}ec('div');
let elgWn1g = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elFMB7_ = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stdQAGD'});
}let cndHDVN = component.rewardedUser;
this.setState('stCG5Yg', cndHDVN);
if (cndHDVN) { 
let cmpIe2t = this._lc('crBlfSx2i', {parent:component,events:{onclose:function(e) {let $el = this; component.rewardedUser = null}},content:(flkModal) => {let eld572f = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.giveReward($el)}]});

                if (! eld572f.formHandler) {
                    window.cfrmdlr = eld572f.formHandler = new FormHandler(eld572f, component);
                } else {
                    window.cfrmdlr = eld572f.formHandler;
                }
            let elYsmeB = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eld572f.formHandler.getError(`gold`) })}`);
let ela6GuD = eo('label',null,null,`for`,`gold`);
text(trans('Reward'));
let elzUlJ5 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elEeScS = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eld572f.formHandler.addError(`gold`, 'required', trans('validation.required'));}return eld572f.formHandler.removeError(`gold`);}]},`name`,`${(`gold`).toInputName()}`,`placeholder`,`${trans(`Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`gold`);
let cndJ2Eg = eld572f.formHandler.getError(`gold`);
this.setState('stPBNCj', cndJ2Eg);
if (cndJ2Eg) { 
let el2swRP = eo('div','2TRf',null,`class`,`alert alert-danger`);
text(eld572f.formHandler.getError(`gold`));
ec('div');
}ec('div');
let cmppLO_ = this._lc('cr42r7hti', {parent:component,parentTop:flkModal,props:{items:component.rewardsReasons},attrs:{name:`${(`for`).toInputName()}`,label:'For',required:''},state:'stCG5Yg'});
let elIKxax = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eld572f.formHandler.getError(`description`) })}`);
let elonhMm = eo('label',null,null,`for`,`description`);
text(trans('Description'));
let elZTQ1L = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZVHf8 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eld572f.formHandler.addError(`description`, 'required', trans('validation.required'));}return eld572f.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndtn9b = eld572f.formHandler.getError(`description`);
this.setState('stf9FLk', cndtn9b);
if (cndtn9b) { 
let elfmV7C = eo('div','8kaf',null,`class`,`alert alert-danger`);
text(eld572f.formHandler.getError(`description`));
ec('div');
}ec('div');
let elYpOst = eo('button',null,null, boolAttrs, {disabled:component.disableSubmit},`class`,`btn btn-success bold`);
text(`Give`);
let cmp_Fe5 = this._lc('cgLXRaBPa', {parent:component,parentTop:flkModal,state:'stCG5Yg'});
ec('button');
ec('form');
},attrs:{header:'Give a complement'},state:'stCG5Yg'});
}
                    this.isReadyToGo();
                }
        });