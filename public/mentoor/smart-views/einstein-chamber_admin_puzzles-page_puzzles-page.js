_Component({
                selector: 'puzzles-page',
                c: 'EinsteinAdminPuzzles', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','categoryId','formObject','isValidForm','submitting'],
                children: {cVO4GrP3r:'table-actions',cueYZhtIi:'admin-table',cqKcsbVZm:'flk-checkbox',cXEheL3Qo:'flk-modal'},
                render: function (component) {
                    let cmpm9Mg = this._lc('cueYZhtIi', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiugq1 = 'JG9239z' + index;
let el2im3A = eo('tr','WiD5WsAtvzd9' + index+iiugq1);
let el4Lbz6 = eo('td','_R3ff'+iiugq1);
text(record.id);
ec('td');
let elUrKin = eo('td','ilAff'+iiugq1);
text(record.title);
ec('td');
let elPWhfq = eo('td','g_Mff'+iiugq1);
text(record.level);
ec('td');
let elHt4Rz = eo('td','VYIff'+iiugq1);
text(Boolean(record.public));
ec('td');
let elnwkNF = eo('td','tfNff'+iiugq1);
text( Number(record.reward).format() );
ec('td');
let elSfIPq = eo('td','03aff'+iiugq1);
text(record.duration);
ec('td');
let el0TVXA = eo('td','TYeff'+iiugq1);
let cmp1x9s = this._lc('cVO4GrP3r', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiugq1});
ec('td');
ec('tr');
}
}});
let cndu82X = component.openModal;
this.setState('stFPB7W', cndu82X);
if (cndu82X) { 
let cmpewqv = this._lc('cXEheL3Qo', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal();}},content:(flkModal) => {let elXohSV = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elXohSV.formHandler) {
                    window.cfrmdlr = elXohSV.formHandler = new FormHandler(elXohSV, component);
                } else {
                    window.cfrmdlr = elXohSV.formHandler;
                }
            let el1VjBw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.categoryId = this.value;}]},`value`,`${fval(component.categoryId)}`,`name`,`${(`categoryId`).toInputName()}`,`type`,`hidden`);
el1VjBw.value = fval(component.categoryId);
let elKJL6N = eo('div',null,null,`class`,`form-group`);
let elfxX4c = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXohSV.formHandler.addError(`title`, 'required', trans('validation.required'));}return elXohSV.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elfxX4c.value = fval(component.formObject.title);
let cndkdhW = elXohSV.formHandler.getError(`title`);
this.setState('st9AOFS', cndkdhW);
if (cndkdhW) { 
let elJt6WJ = eo('div','HwFf',null,`class`,`alert alert-danger`);
text(elXohSV.formHandler.getError(`title`));
ec('div');
}ec('div');
let elxj35d = eo('div',null,null,`class`,`form-group`);
let el7eiRI = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.quest = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXohSV.formHandler.addError(`quest`, 'required', trans('validation.required'));}return elXohSV.formHandler.removeError(`quest`);}]},`value`,`${fval(component.formObject.quest)}`,`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`quest`);
el7eiRI.value = fval(component.formObject.quest);
ec('textarea');
let cndZIUb = elXohSV.formHandler.getError(`quest`);
this.setState('ste5EAn', cndZIUb);
if (cndZIUb) { 
let elA3nzS = eo('div','Luqf',null,`class`,`alert alert-danger`);
text(elXohSV.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elELKZn = eo('div',null,null,`class`,`form-group`);
let elvgaAv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.level = this.value;}]},`value`,`${fval(component.formObject.level)}`,`name`,`${(`level`).toInputName()}`,`placeholder`,`${trans(`level`)}`,`type`,`number`,`class`,`form-control`,`id`,`level`);
elvgaAv.value = fval(component.formObject.level);
ec('div');
let elDEzFB = eo('div',null,null,`class`,`form-group`);
let el3WO6m = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXohSV.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elXohSV.formHandler.removeError(`reward`);}]},`value`,`${fval(component.formObject.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`class`,`form-control`,`type`,`number`,`id`,`reward`);
el3WO6m.value = fval(component.formObject.reward);
let cndNEUV = elXohSV.formHandler.getError(`reward`);
this.setState('stuwy4d', cndNEUV);
if (cndNEUV) { 
let elVenGo = eo('div','wpVf',null,`class`,`alert alert-danger`);
text(elXohSV.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elxqqq1 = eo('div',null,null,`class`,`form-group`);
let elVZovM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.duration = this.value;}]},`value`,`${fval(component.formObject.duration)}`,`name`,`${(`duration`).toInputName()}`,`placeholder`,`${trans(`Duration in seconds`)}`,`class`,`form-control`,`type`,`number`,`id`,`duration`);
elVZovM.value = fval(component.formObject.duration);
ec('div');
let elj5x1Z = eo('div',null,null,`class`,`form-group`);
let cmpipdL = this._lc('cqKcsbVZm', {parent:component,parentTop:flkModal,props:{checked:component.formObject.public},events:{onchange:function(e) {let $el = this; component.formObject.public = ! component.formObject.public}},boolAttrs:{checked:component.formObject.public},attrs:{name:`${(`public`).toInputName()}`,label:'Public puzzle',value:1},state:'stFPB7W'});
ec('div');
let elrU2nX = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elfyOmC = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stFPB7W'});
}
                    this.isReadyToGo();
                }
        });