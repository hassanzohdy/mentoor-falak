_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {cIU8BHLoW:'table-actions',cWVzZC70D:'admin-table',cLiBrsYmG:'flk-checkbox',ckDZBL0ci:'flk-modal'},
                render: function (component) {
                    let cmpNc7d = this._lc('cWVzZC70D', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iifVKq = 'cPFySyh' + index;
let elau9z5 = eo('tr','2hBrpeHQm1je' + index+iifVKq);
let elYzTbC = eo('td','8GAff'+iifVKq);
text(record.id);
ec('td');
let elCZ6JW = eo('td','o9Eff'+iifVKq);
text(record.title);
ec('td');
let elveoPd = eo('td','HqOff'+iifVKq);
text(record.level);
ec('td');
let elGFv4P = eo('td','eAfff'+iifVKq);
text(Boolean(record.public));
ec('td');
let elEn0gW = eo('td','Ogfff'+iifVKq);
text( Number(record.reward).format() );
ec('td');
let elOeOJO = eo('td','CiUff'+iifVKq);
text(record.duration);
ec('td');
let el3SGqv = eo('td','2IVff'+iifVKq);
let cmpdZEy = this._lc('cIU8BHLoW', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iifVKq});
ec('td');
ec('tr');
}
}});
let cnd5IMi = component.openModal;
this.setState('stDhSrs', cnd5IMi);
if (cnd5IMi) { 
let cmpdnQf = this._lc('ckDZBL0ci', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let el13KOC = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el13KOC.formHandler) {
                    window.cfrmdlr = el13KOC.formHandler = new FormHandler(el13KOC, component);
                } else {
                    window.cfrmdlr = el13KOC.formHandler;
                }
            let elD_HYC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
elD_HYC.value = fval(component.categoryId);
let elv2WhU = eo('div',null,null,`class`,`form-group`);
let elM5pU6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el13KOC.formHandler.addError(`title`, 'required', trans('validation.required'));}return el13KOC.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elM5pU6.value = fval(component.formObject.title);
let cndSrdJ = el13KOC.formHandler.getError(`title`);
this.setState('stgTAqV', cndSrdJ);
if (cndSrdJ) { 
let elujUMB = eo('div','toNf',null,`class`,`alert alert-danger`);
text(el13KOC.formHandler.getError(`title`));
ec('div');
}ec('div');
let el5OAzG = eo('div',null,null,`class`,`form-group`);
let elRsw69 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el13KOC.formHandler.addError(`quest`, 'required', trans('validation.required'));}return el13KOC.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
elRsw69.value = fval(component.formObject.quest);
ec('textarea');
let cndIeT8 = el13KOC.formHandler.getError(`quest`);
this.setState('strkvsm', cndIeT8);
if (cndIeT8) { 
let elzkJT1 = eo('div','Cd1f',null,`class`,`alert alert-danger`);
text(el13KOC.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elBAj_R = eo('div',null,null,`class`,`form-group`);
let el4ONkO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
el4ONkO.value = fval(component.formObject.level);
ec('div');
let elTzYJi = eo('div',null,null,`class`,`form-group`);
let elNTLos = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el13KOC.formHandler.addError(`reward`, 'required', trans('validation.required'));}return el13KOC.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
elNTLos.value = fval(component.formObject.reward);
let cndzT1m = el13KOC.formHandler.getError(`reward`);
this.setState('stuCtLF', cndzT1m);
if (cndzT1m) { 
let elb6tRf = eo('div','4ebf',null,`class`,`alert alert-danger`);
text(el13KOC.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elwYhdl = eo('div',null,null,`class`,`form-group`);
let elQFMtN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
elQFMtN.value = fval(component.formObject.duration);
ec('div');
let elprpTg = eo('div',null,null,`class`,`form-group`);
let cmpvrL3 = this._lc('cLiBrsYmG', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'stDhSrs'});
ec('div');
let el2khqx = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elLYkgw = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stDhSrs'});
}
                    this.isReadyToGo();
                }
        });