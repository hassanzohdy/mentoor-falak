_Component({
                selector: 'einstein-page',
                c: 'EinsteinPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {ceMcFeftG:'table-actions',c2_ienlUG:'admin-table',cRAWxhWyT:'flk-modal'},
                render: function (component) {
                    let cmpklyu = this._lc('c2_ienlUG', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii8uyu = 'zpfX9Dw' + index;
let elArs3B = eo('tr','14UBy4hRBf3t' + index+ii8uyu);
let elNm67s = eo('td','Tcfff'+ii8uyu);
text( record.id );
ec('td');
let elnQW6n = eo('td','6T5ff'+ii8uyu);
text(record.name);
ec('td');
let elKX1io = eo('td','e5Kff'+ii8uyu);
let ela5Y1o = ev('img','LZ5ff'+ii8uyu,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elNN4l6 = eo('td','FJCff'+ii8uyu);
let elK1TPc = eo('a','83Xff'+ii8uyu,null,`href`,`/admin/einstein/${ record.id }/puzzles`);
text(`${ record.puzzles.length.format() }
                puzzles`);
ec('a');
ec('td');
let elpzKKX = eo('td','fJqff'+ii8uyu);
text( Number(record.cost).format() );
ec('td');
let elR1oMC = eo('td','wfEff'+ii8uyu);
text(record.requiredAnswers);
ec('td');
let elEFhYw = eo('td','AOCff'+ii8uyu);
let cmpjhER = this._lc('ceMcFeftG', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii8uyu});
ec('td');
ec('tr');
}
}});
let cndAsRd = component.openModal;
this.setState('stoGkeu', cndAsRd);
if (cndAsRd) { 
let cmpHSZl = this._lc('cRAWxhWyT', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el2FOT1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el2FOT1.formHandler) {
                    window.cfrmdlr = el2FOT1.formHandler = new FormHandler(el2FOT1, component);
                } else {
                    window.cfrmdlr = el2FOT1.formHandler;
                }
            let el3D7rA = eo('div',null,null,`class`,`form-group`);
let elHXHQU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2FOT1.formHandler.addError(`name`, 'required', trans('validation.required'));}return el2FOT1.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`category`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elHXHQU.value = fval(component.formObject.name);
let cnd0Hw7 = el2FOT1.formHandler.getError(`name`);
this.setState('stGH1pZ', cnd0Hw7);
if (cnd0Hw7) { 
let elr2HRu = eo('div','7TEf',null,`class`,`alert alert-danger`);
text(el2FOT1.formHandler.getError(`name`));
ec('div');
}ec('div');
let elqSxHm = eo('div',null,null,`class`,`form-group`);
let elDSU3J = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2FOT1.formHandler.addError(`description`, 'required', trans('validation.required'));}return el2FOT1.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elDSU3J.value = fval(component.formObject.description);
ec('textarea');
let cndTxi9 = el2FOT1.formHandler.getError(`description`);
this.setState('stQwnYW', cndTxi9);
if (cndTxi9) { 
let elR23pH = eo('div','nInf',null,`class`,`alert alert-danger`);
text(el2FOT1.formHandler.getError(`description`));
ec('div');
}ec('div');
let ell147C = eo('div',null,null,`class`,`form-group`);
let elZ5HDJ = eo('div',null,null,`class`,`row`);
let elq4NOv = eo('div',null,null,`class`,`col-md-4`);
let elFxLdA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2FOT1.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el2FOT1.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elFxLdA.value = fval(component.formObject.cost);
let cndtqDO = el2FOT1.formHandler.getError(`cost`);
this.setState('sta_rqG', cndtqDO);
if (cndtqDO) { 
let el4jTaS = eo('div','EKjf',null,`class`,`alert alert-danger`);
text(el2FOT1.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elQIVWS = eo('div',null,null,`class`,`col-md-4`);
let elECPBN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.requiredAnswers = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2FOT1.formHandler.addError(`requiredAnswers`, 'required', trans('validation.required'));}return el2FOT1.formHandler.removeError(`requiredAnswers`);}]},`value`,`${fval(component.formObject.requiredAnswers)}`,`name`,`${(`requiredAnswers`).toInputName()}`,`placeholder`,`${trans(`required answers`)}`,`class`,`form-control`,`type`,`number`,`id`,`requiredAnswers`);
elECPBN.value = fval(component.formObject.requiredAnswers);
let cndBn6P = el2FOT1.formHandler.getError(`requiredAnswers`);
this.setState('stn7oN5', cndBn6P);
if (cndBn6P) { 
let ellqHAs = eo('div','isBf',null,`class`,`alert alert-danger`);
text(el2FOT1.formHandler.getError(`requiredAnswers`));
ec('div');
}ec('div');
ec('div');
ec('div');
let ellnPYi = eo('div',null,null,`class`,`form-group`);
let elGHHLx = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let elPpihy = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elWoWPQ = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stoGkeu'});
}
                    this.isReadyToGo();
                }
        });