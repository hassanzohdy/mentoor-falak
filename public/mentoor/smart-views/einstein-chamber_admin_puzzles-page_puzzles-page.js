_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {cJWWeKfyJ:'table-actions',cV4OAtmlw:'admin-table',cV_a0FXHb:'flk-checkbox',ceakGzmW_:'flk-modal'},
                render: function (component) {
                    let cmpWel5 = this._lc('cV4OAtmlw', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iij1XC = 'aft7NEc' + index;
let el0Jfxd = eo('tr','goyx0l8u6FLH' + index+iij1XC);
let elSKpkM = eo('td','VZ_ff'+iij1XC);
text(record.id);
ec('td');
let elL914O = eo('td','XFqff'+iij1XC);
text(record.title);
ec('td');
let el8x4BO = eo('td','03xff'+iij1XC);
text(record.level);
ec('td');
let el7R1gx = eo('td','O7Aff'+iij1XC);
text(Boolean(record.public));
ec('td');
let elpoqsX = eo('td','uyAff'+iij1XC);
text( Number(record.reward).format() );
ec('td');
let elq_nxU = eo('td','wJMff'+iij1XC);
text(record.duration);
ec('td');
let elriKxd = eo('td','mDNff'+iij1XC);
let cmpfx0R = this._lc('cJWWeKfyJ', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iij1XC});
ec('td');
ec('tr');
}
}});
let cnd_mG_ = component.openModal;
this.setState('stxv0AG', cnd_mG_);
if (cnd_mG_) { 
let cmpCH_7 = this._lc('ceakGzmW_', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let eld5Sff = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eld5Sff.formHandler) {
                    window.cfrmdlr = eld5Sff.formHandler = new FormHandler(eld5Sff, component);
                } else {
                    window.cfrmdlr = eld5Sff.formHandler;
                }
            let elWTJcI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elWTJcI.value = fval(component.categoryId);
let el6QoIL = eo('div',null,null,`class`,`form-group`);
let elEHkrE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eld5Sff.formHandler.addError(`title`, 'required', trans('validation.required'));}return eld5Sff.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elEHkrE.value = fval(component.formObject.title);
let cndBCTB = eld5Sff.formHandler.getError(`title`);
this.setState('stTLFRE', cndBCTB);
if (cndBCTB) { 
let elX64ld = eo('div','AY6f',null,`class`,`alert alert-danger`);
text(eld5Sff.formHandler.getError(`title`));
ec('div');
}ec('div');
let elvZufB = eo('div',null,null,`class`,`form-group`);
let eld__o1 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eld5Sff.formHandler.addError(`quest`, 'required', trans('validation.required'));}return eld5Sff.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
eld__o1.value = fval(component.formObject.quest);
ec('textarea');
let cndGWuH = eld5Sff.formHandler.getError(`quest`);
this.setState('sttOxxH', cndGWuH);
if (cndGWuH) { 
let el4B46P = eo('div','46Uf',null,`class`,`alert alert-danger`);
text(eld5Sff.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elFTZaJ = eo('div',null,null,`class`,`form-group`);
let el7nlxg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
el7nlxg.value = fval(component.formObject.level);
ec('div');
let elINMsN = eo('div',null,null,`class`,`form-group`);
let elFysgM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eld5Sff.formHandler.addError(`reward`, 'required', trans('validation.required'));}return eld5Sff.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elFysgM.value = fval(component.formObject.reward);
let cndHZDG = eld5Sff.formHandler.getError(`reward`);
this.setState('stopsuV', cndHZDG);
if (cndHZDG) { 
let elneVHy = eo('div','Ytuf',null,`class`,`alert alert-danger`);
text(eld5Sff.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elmXrjp = eo('div',null,null,`class`,`form-group`);
let eljlKvL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
eljlKvL.value = fval(component.formObject.duration);
ec('div');
let elaNItu = eo('div',null,null,`class`,`form-group`);
let cmp4zEy = this._lc('cV_a0FXHb', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'stxv0AG'});
ec('div');
let elFKApC = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elkrLrC = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stxv0AG'});
}
                    this.isReadyToGo();
                }
        });