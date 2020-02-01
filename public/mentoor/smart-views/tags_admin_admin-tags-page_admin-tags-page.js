_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cDiURdckV:'table-actions',cjy3iCEh9:'admin-table',cTXN0wgnR:'flk-image-input',cQESBwE9v:'flk-modal'},
                render: function (component) {
                    let cmppJbs = this._lc('cjy3iCEh9', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let iiqFgV = 'R8IGDml' + index;
let ely4PWX = eo('tr','vdr5MH9l8yLc' + index+iiqFgV);
let elNWlyv = eo('td','O56ff'+iiqFgV);
text( tag.id );
ec('td');
let elZUuSw = eo('td','L6Uff'+iiqFgV);
let elYMH7O = ev('img','2T5ff'+iiqFgV,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let elWXdE3 = eo('td','OuZff'+iiqFgV);
text(tag.name);
ec('td');
let elGULYE = eo('td','ydmff'+iiqFgV);
let cmp6Bs7 = this._lc('cDiURdckV', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +iiqFgV});
ec('td');
ec('tr');
}
}});
let cndJuQe = component.openModal;
this.setState('st17a_d', cndJuQe);
if (cndJuQe) { 
let cmpY1x6 = this._lc('cQESBwE9v', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elxfgjf = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elxfgjf.formHandler) {
                    window.cfrmdlr = elxfgjf.formHandler = new FormHandler(elxfgjf, component);
                } else {
                    window.cfrmdlr = elxfgjf.formHandler;
                }
            let elydC3d = eo('div',null,null,`class`,`form-group`);
let elpqaLI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxfgjf.formHandler.addError(`name`, 'required', trans('validation.required'));}return elxfgjf.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elpqaLI.value = fval(component.formObject.name);
let cndhGiU = elxfgjf.formHandler.getError(`name`);
this.setState('stqHPv9', cndhGiU);
if (cndhGiU) { 
let elxIigy = eo('div','4eaf',null,`class`,`alert alert-danger`);
text(elxfgjf.formHandler.getError(`name`));
ec('div');
}ec('div');
let elhTztf = eo('div',null,null,`class`,`form-group`);
let elP74dz = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmpZI8P = this._lc('cTXN0wgnR', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'st17a_d'});
ec('div');
let elHPnBQ = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elgQvK6 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st17a_d'});
}
                    this.isReadyToGo();
                }
        });