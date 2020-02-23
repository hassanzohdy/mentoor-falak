_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {ck3kqE169:'table-actions',cc3FQ0BlH:'admin-table',czRlvy0A_:'flk-image-input',cnjYGTiEm:'flk-modal'},
                render: function (component) {
                    let cmphHl4 = this._lc('cc3FQ0BlH', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let iixoIh = 'h3sKoYa' + index;
let elViwbj = eo('tr','7_h2vvgfQOGg' + index+iixoIh);
let el9Fm9Z = eo('td','Rulff'+iixoIh);
text( tag.id );
ec('td');
let elWR4N_ = eo('td','vURff'+iixoIh);
let elX7cw0 = ev('img','rV6ff'+iixoIh,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let eleW8Me = eo('td','PqYff'+iixoIh);
text(tag.name);
ec('td');
let elgrwbX = eo('td','Axpff'+iixoIh);
let cmpruaF = this._lc('ck3kqE169', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +iixoIh});
ec('td');
ec('tr');
}
}});
let cndH_8j = component.openModal;
this.setState('stxOCOA', cndH_8j);
if (cndH_8j) { 
let cmpZVN1 = this._lc('cnjYGTiEm', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el3rOmj = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el3rOmj.formHandler) {
                    window.cfrmdlr = el3rOmj.formHandler = new FormHandler(el3rOmj, component);
                } else {
                    window.cfrmdlr = el3rOmj.formHandler;
                }
            let elRHByH = eo('div',null,null,`class`,`form-group`);
let el0Ycvx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3rOmj.formHandler.addError(`name`, 'required', trans('validation.required'));}return el3rOmj.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el0Ycvx.value = fval(component.formObject.name);
let cndn34I = el3rOmj.formHandler.getError(`name`);
this.setState('st3JUTm', cndn34I);
if (cndn34I) { 
let elXlD9h = eo('div','7_Bf',null,`class`,`alert alert-danger`);
text(el3rOmj.formHandler.getError(`name`));
ec('div');
}ec('div');
let elhbuc4 = eo('div',null,null,`class`,`form-group`);
let elWgFsO = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmp3k53 = this._lc('czRlvy0A_', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stxOCOA'});
ec('div');
let el1k9nd = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eld9Y4v = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stxOCOA'});
}
                    this.isReadyToGo();
                }
        });