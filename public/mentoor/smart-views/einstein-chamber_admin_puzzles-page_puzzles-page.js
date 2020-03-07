_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {cXvCmpj6B:'table-actions',cxqzN9ZZW:'admin-table',copZMSrQP:'flk-checkbox',cTl8iAh0n:'flk-modal'},
                render: function (component) {
                    let cmpof0r = this._lc('cxqzN9ZZW', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iicklk = 'Z0x6MqN' + index;
let el08bP1 = eo('tr','JifDafwTXQxp' + index+iicklk);
let el7KnDy = eo('td','cy_ff'+iicklk);
text(record.id);
ec('td');
let elKBrY1 = eo('td','1h_ff'+iicklk);
text(record.title);
ec('td');
let elPe_d7 = eo('td','kyXff'+iicklk);
text(record.level);
ec('td');
let elM1seU = eo('td','SSUff'+iicklk);
text(Boolean(record.public));
ec('td');
let elujypL = eo('td','wPZff'+iicklk);
text( Number(record.reward).format() );
ec('td');
let elb92gD = eo('td','t9Cff'+iicklk);
text(record.duration);
ec('td');
let elWvqOw = eo('td','aA9ff'+iicklk);
let cmpxTFl = this._lc('cXvCmpj6B', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iicklk});
ec('td');
ec('tr');
}
}});
let cnd3YgD = component.openModal;
this.setState('stzAeSW', cnd3YgD);
if (cnd3YgD) { 
let cmpcleq = this._lc('cTl8iAh0n', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let el6yIaz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el6yIaz.formHandler) {
                    window.cfrmdlr = el6yIaz.formHandler = new FormHandler(el6yIaz, component);
                } else {
                    window.cfrmdlr = el6yIaz.formHandler;
                }
            let elLhNq7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elLhNq7.value = fval(component.categoryId);
let elDx4XJ = eo('div',null,null,`class`,`form-group`);
let elSWUJJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6yIaz.formHandler.addError(`title`, 'required', trans('validation.required'));}return el6yIaz.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elSWUJJ.value = fval(component.formObject.title);
let cndl9RV = el6yIaz.formHandler.getError(`title`);
this.setState('stlIf59', cndl9RV);
if (cndl9RV) { 
let el9dkAe = eo('div','4uIf',null,`class`,`alert alert-danger`);
text(el6yIaz.formHandler.getError(`title`));
ec('div');
}ec('div');
let elwxrVl = eo('div',null,null,`class`,`form-group`);
let elhpqJw = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6yIaz.formHandler.addError(`quest`, 'required', trans('validation.required'));}return el6yIaz.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
elhpqJw.value = fval(component.formObject.quest);
ec('textarea');
let cndOOGc = el6yIaz.formHandler.getError(`quest`);
this.setState('stD7I42', cndOOGc);
if (cndOOGc) { 
let elj5t8G = eo('div','0jjf',null,`class`,`alert alert-danger`);
text(el6yIaz.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elIl6WB = eo('div',null,null,`class`,`form-group`);
let elr2jwF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
elr2jwF.value = fval(component.formObject.level);
ec('div');
let el9c03D = eo('div',null,null,`class`,`form-group`);
let elUxia3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6yIaz.formHandler.addError(`reward`, 'required', trans('validation.required'));}return el6yIaz.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elUxia3.value = fval(component.formObject.reward);
let cndKmZ_ = el6yIaz.formHandler.getError(`reward`);
this.setState('stMRogO', cndKmZ_);
if (cndKmZ_) { 
let elBQMg6 = eo('div','8eff',null,`class`,`alert alert-danger`);
text(el6yIaz.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elEBsOh = eo('div',null,null,`class`,`form-group`);
let el2ufW5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
el2ufW5.value = fval(component.formObject.duration);
ec('div');
let elTY2Kl = eo('div',null,null,`class`,`form-group`);
let cmpIx89 = this._lc('copZMSrQP', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'stzAeSW'});
ec('div');
let elooZmx = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el98b8N = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stzAeSW'});
}
                    this.isReadyToGo();
                }
        });