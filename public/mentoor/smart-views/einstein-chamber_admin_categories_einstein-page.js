_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {c7HZw3xun:'table-actions',cIxWZwh2I:'admin-table',cOl_foaFw:'flk-modal'},
                render: function (component) {
                    let cmpEl16 = this._lc('cIxWZwh2I', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iitYrM = 'd_ax3u5' + index;
let elJrUxX = eo('tr','trvqLUWZW_xj' + index+iitYrM);
let el3Q6eu = eo('td','vBWff'+iitYrM);
text( record.id );
ec('td');
let el9Mciz = eo('td','Nofff'+iitYrM);
text(record.name);
ec('td');
let elORKPS = eo('td','rXsff'+iitYrM);
let elYl0OQ = ev('img','qcLff'+iitYrM,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elg7y1B = eo('td','_Kiff'+iitYrM);
let elcjX3u = eo('a','ffoff'+iitYrM,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let elS4HdX = eo('td','0C_ff'+iitYrM);
text( Number(record.cost).format() );
ec('td');
let elaAepH = eo('td','OmJff'+iitYrM);
text(record.requiredAnswers);
ec('td');
let elsv44D = eo('td','Imyff'+iitYrM);
let cmp9h7d = this._lc('c7HZw3xun', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iitYrM});
ec('td');
ec('tr');
}
}});
let cndZPVi = component.openModal;
this.setState('stJMa8o', cndZPVi);
if (cndZPVi) { 
let cmpRQgl = this._lc('cOl_foaFw', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el1bUPC = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el1bUPC.formHandler) {
                    window.cfrmdlr = el1bUPC.formHandler = new FormHandler(el1bUPC, component);
                } else {
                    window.cfrmdlr = el1bUPC.formHandler;
                }
            let elQF8FW = eo('div',null,null,`class`,`form-group`);
let elBRY_f = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1bUPC.formHandler.addError(`name`, 'required', trans('validation.required'));}return el1bUPC.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elBRY_f.value = fval(component.formObject.name);
let cnd4cdC = el1bUPC.formHandler.getError(`name`);
this.setState('stzHAUS', cnd4cdC);
if (cnd4cdC) { 
let elh1b_F = eo('div','fbAf',null,`class`,`alert alert-danger`);
text(el1bUPC.formHandler.getError(`name`));
ec('div');
}ec('div');
let elLcAfI = eo('div',null,null,`class`,`form-group`);
let elUvB4r = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1bUPC.formHandler.addError(`description`, 'required', trans('validation.required'));}return el1bUPC.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elUvB4r.value = fval(component.formObject.description);
ec('textarea');
let cndmH3U = el1bUPC.formHandler.getError(`description`);
this.setState('stxeZdE', cndmH3U);
if (cndmH3U) { 
let elPQo1i = eo('div','adKf',null,`class`,`alert alert-danger`);
text(el1bUPC.formHandler.getError(`description`));
ec('div');
}ec('div');
let elNiH4c = eo('div',null,null,`class`,`form-group`);
let ele_qdS = eo('div',null,null,`class`,`row`);
let el0Yh9E = eo('div',null,null,`class`,`col-md-4`);
let el1_pXy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1bUPC.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el1bUPC.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
el1_pXy.value = fval(component.formObject.cost);
let cndY9Vr = el1bUPC.formHandler.getError(`cost`);
this.setState('stETOlz', cndY9Vr);
if (cndY9Vr) { 
let elRj1vg = eo('div','e14f',null,`class`,`alert alert-danger`);
text(el1bUPC.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elE5Ee7 = eo('div',null,null,`class`,`col-md-4`);
let el9KkD1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1bUPC.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return el1bUPC.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
el9KkD1.value = fval(component.formObject.requiredAnswers);
let cndBqDR = el1bUPC.formHandler.getError(`requiredAnswers`);
this.setState('stf3J25', cndBqDR);
if (cndBqDR) { 
let el8KWaV = eo('div','DKBf',null,`class`,`alert alert-danger`);
text(el1bUPC.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elYrH1J = eo('div',null,null,`class`,`form-group`);
let el_NrBM = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let el5Y9Zz = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el7Mdnq = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stJMa8o'});
}
                    this.isReadyToGo();
                }
        });