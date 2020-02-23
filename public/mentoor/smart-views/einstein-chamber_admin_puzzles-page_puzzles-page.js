_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {crY0kQ_m_:'table-actions',cQWtLM49O:'admin-table',cckxOzp9b:'flk-checkbox',cxkSeMOba:'flk-modal'},
                render: function (component) {
                    let cmpneLL = this._lc('cQWtLM49O', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiVnTX = 'A9fAswp' + index;
let elL1S41 = eo('tr','GLbBVtstgICx' + index+iiVnTX);
let elFsLHr = eo('td','0cWff'+iiVnTX);
text(record.id);
ec('td');
let elhjJIj = eo('td','DSlff'+iiVnTX);
text(record.title);
ec('td');
let elDJeIH = eo('td','ITrff'+iiVnTX);
text(record.level);
ec('td');
let elCjTB7 = eo('td','6tjff'+iiVnTX);
text(Boolean(record.public));
ec('td');
let elAZEtE = eo('td','DAwff'+iiVnTX);
text( Number(record.reward).format() );
ec('td');
let elzV8So = eo('td','GzGff'+iiVnTX);
text(record.duration);
ec('td');
let elc9TuX = eo('td','QQBff'+iiVnTX);
let cmpMlPH = this._lc('crY0kQ_m_', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiVnTX});
ec('td');
ec('tr');
}
}});
let cnd4Lme = component.openModal;
this.setState('st1WMx7', cnd4Lme);
if (cnd4Lme) { 
let cmpDRVY = this._lc('cxkSeMOba', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elGAcRu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elGAcRu.formHandler) {
                    window.cfrmdlr = elGAcRu.formHandler = new FormHandler(elGAcRu, component);
                } else {
                    window.cfrmdlr = elGAcRu.formHandler;
                }
            let elgGhCl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elgGhCl.value = fval(component.categoryId);
let elnvvKm = eo('div',null,null,`class`,`form-group`);
let el1m9r6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGAcRu.formHandler.addError(`title`, 'required', trans('validation.required'));}return elGAcRu.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el1m9r6.value = fval(component.formObject.title);
let cndCK89 = elGAcRu.formHandler.getError(`title`);
this.setState('stRJbLp', cndCK89);
if (cndCK89) { 
let el4ir3e = eo('div','UArf',null,`class`,`alert alert-danger`);
text(elGAcRu.formHandler.getError(`title`));
ec('div');
}ec('div');
let el3WPR_ = eo('div',null,null,`class`,`form-group`);
let eln7PyJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGAcRu.formHandler.addError(`quest`, 'required', trans('validation.required'));}return elGAcRu.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
eln7PyJ.value = fval(component.formObject.quest);
ec('textarea');
let cndbNab = elGAcRu.formHandler.getError(`quest`);
this.setState('stzNvaf', cndbNab);
if (cndbNab) { 
let elQT_Fj = eo('div','2Pwf',null,`class`,`alert alert-danger`);
text(elGAcRu.formHandler.getError(`quest`));
ec('div');
}ec('div');
let el0oQHu = eo('div',null,null,`class`,`form-group`);
let elmd8a5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
elmd8a5.value = fval(component.formObject.level);
ec('div');
let elcANT0 = eo('div',null,null,`class`,`form-group`);
let elB5XWB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGAcRu.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elGAcRu.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elB5XWB.value = fval(component.formObject.reward);
let cndRtuD = elGAcRu.formHandler.getError(`reward`);
this.setState('stmcukS', cndRtuD);
if (cndRtuD) { 
let ely9eNX = eo('div','h8Jf',null,`class`,`alert alert-danger`);
text(elGAcRu.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elrzkB0 = eo('div',null,null,`class`,`form-group`);
let elpyvg4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
elpyvg4.value = fval(component.formObject.duration);
ec('div');
let el7kEbs = eo('div',null,null,`class`,`form-group`);
let cmplEzA = this._lc('cckxOzp9b', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'st1WMx7'});
ec('div');
let eltES3F = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let ellqxyw = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st1WMx7'});
}
                    this.isReadyToGo();
                }
        });