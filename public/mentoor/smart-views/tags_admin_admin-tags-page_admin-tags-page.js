_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cHOAh7oHK:'table-actions',cjF3J6cHk:'admin-table',coTSV_TTi:'flk-image-input',cYENfPBy_:'flk-modal'},
                render: function (component) {
                    let cmph1Qf = this._lc('cjF3J6cHk', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let iidcWV = 'hngXI_N' + index;
let el_etjF = eo('tr','DJ8XrIhy06Zl' + index+iidcWV);
let el2WrJ0 = eo('td','uNCff'+iidcWV);
text( tag.id );
ec('td');
let elgazSr = eo('td','Knsff'+iidcWV);
let elss8l1 = ev('img','NhGff'+iidcWV,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let elYOlli = eo('td','KTjff'+iidcWV);
text(tag.name);
ec('td');
let eldf0oF = eo('td','WCaff'+iidcWV);
let cmpoEJn = this._lc('cHOAh7oHK', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +iidcWV});
ec('td');
ec('tr');
}
}});
let cndQqMj = component.openModal;
this.setState('st5yBR6', cndQqMj);
if (cndQqMj) { 
let cmpiGUw = this._lc('cYENfPBy_', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elw_sC2 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elw_sC2.formHandler) {
                    window.cfrmdlr = elw_sC2.formHandler = new FormHandler(elw_sC2, component);
                } else {
                    window.cfrmdlr = elw_sC2.formHandler;
                }
            let elz3GSb = eo('div',null,null,`class`,`form-group`);
let elRGxKs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elw_sC2.formHandler.addError(`name`, 'required', trans('validation.required'));}return elw_sC2.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elRGxKs.value = fval(component.formObject.name);
let cndSZhE = elw_sC2.formHandler.getError(`name`);
this.setState('stdh6or', cndSZhE);
if (cndSZhE) { 
let elGs5Sd = eo('div','FKdf',null,`class`,`alert alert-danger`);
text(elw_sC2.formHandler.getError(`name`));
ec('div');
}ec('div');
let elGxMTa = eo('div',null,null,`class`,`form-group`);
let elTPe5R = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmp3AFQ = this._lc('coTSV_TTi', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'st5yBR6'});
ec('div');
let elfdskm = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elYQ8Rl = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st5yBR6'});
}
                    this.isReadyToGo();
                }
        });