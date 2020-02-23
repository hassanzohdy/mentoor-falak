_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {cxazMjA0_:'table-actions',crL8ySRxn:'admin-table',cgzCmhex5:'flk-checkbox',cAssjWhdl:'flk-modal'},
                render: function (component) {
                    let cmp1JyN = this._lc('crL8ySRxn', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii0lkY = 'VkFMg4G' + index;
let elYa0UW = eo('tr','grZaFdpCgBhS' + index+ii0lkY);
let elROwTR = eo('td','28Off'+ii0lkY);
text(record.id);
ec('td');
let ellbVOB = eo('td','dILff'+ii0lkY);
text(record.title);
ec('td');
let elAoy35 = eo('td','yTVff'+ii0lkY);
text(record.level);
ec('td');
let elEao_3 = eo('td','K3Yff'+ii0lkY);
text(Boolean(record.public));
ec('td');
let elyRYVT = eo('td','2SSff'+ii0lkY);
text( Number(record.reward).format() );
ec('td');
let elrgsr6 = eo('td','A2Wff'+ii0lkY);
text(record.duration);
ec('td');
let el4MAzT = eo('td','X3Lff'+ii0lkY);
let cmpV6es = this._lc('cxazMjA0_', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii0lkY});
ec('td');
ec('tr');
}
}});
let cndtzZJ = component.openModal;
this.setState('stBs3q6', cndtzZJ);
if (cndtzZJ) { 
let cmpAhOZ = this._lc('cAssjWhdl', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elphZ8D = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elphZ8D.formHandler) {
                    window.cfrmdlr = elphZ8D.formHandler = new FormHandler(elphZ8D, component);
                } else {
                    window.cfrmdlr = elphZ8D.formHandler;
                }
            let elFd3RM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elFd3RM.value = fval(component.categoryId);
let elmUhGQ = eo('div',null,null,`class`,`form-group`);
let elcgHS9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elphZ8D.formHandler.addError(`title`, 'required', trans('validation.required'));}return elphZ8D.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elcgHS9.value = fval(component.formObject.title);
let cndOllT = elphZ8D.formHandler.getError(`title`);
this.setState('stg6gsf', cndOllT);
if (cndOllT) { 
let el9YTo0 = eo('div','2_xf',null,`class`,`alert alert-danger`);
text(elphZ8D.formHandler.getError(`title`));
ec('div');
}ec('div');
let eli7fQ1 = eo('div',null,null,`class`,`form-group`);
let el1if7c = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elphZ8D.formHandler.addError(`quest`, 'required', trans('validation.required'));}return elphZ8D.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
el1if7c.value = fval(component.formObject.quest);
ec('textarea');
let cndUBMy = elphZ8D.formHandler.getError(`quest`);
this.setState('stA50g9', cndUBMy);
if (cndUBMy) { 
let elBV7Ck = eo('div','OLtf',null,`class`,`alert alert-danger`);
text(elphZ8D.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elWDbjb = eo('div',null,null,`class`,`form-group`);
let ela3x2P = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
ela3x2P.value = fval(component.formObject.level);
ec('div');
let elkNii_ = eo('div',null,null,`class`,`form-group`);
let elTX7td = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elphZ8D.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elphZ8D.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elTX7td.value = fval(component.formObject.reward);
let cndMwGL = elphZ8D.formHandler.getError(`reward`);
this.setState('sta69Fv', cndMwGL);
if (cndMwGL) { 
let elIq7xE = eo('div','hIEf',null,`class`,`alert alert-danger`);
text(elphZ8D.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elA7H5i = eo('div',null,null,`class`,`form-group`);
let eliYxCS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
eliYxCS.value = fval(component.formObject.duration);
ec('div');
let el28Uj9 = eo('div',null,null,`class`,`form-group`);
let cmpuVTA = this._lc('cgzCmhex5', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'stBs3q6'});
ec('div');
let elohRrn = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elfJmg5 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stBs3q6'});
}
                    this.isReadyToGo();
                }
        });