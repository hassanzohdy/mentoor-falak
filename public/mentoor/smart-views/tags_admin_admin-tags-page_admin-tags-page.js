_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cjz8qnkcH:'table-actions',cvcBFOe8R:'admin-table',cQA_QMVPc:'flk-image-input',cJKmD3R01:'flk-modal'},
                render: function (component) {
                    let cmpk_qL = this._lc('cvcBFOe8R', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let iiZY4k = 'xcsoZUL' + index;
let elzrs26 = eo('tr','b3hw5mXnXjKq' + index+iiZY4k);
let elbbr46 = eo('td','P6cff'+iiZY4k);
text( tag.id );
ec('td');
let elH1fWg = eo('td','3Hyff'+iiZY4k);
let ell4ycz = ev('img','IHJff'+iiZY4k,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let elcEuAw = eo('td','10Nff'+iiZY4k);
text(tag.name);
ec('td');
let eljJuWj = eo('td','mxWff'+iiZY4k);
let cmphUqH = this._lc('cjz8qnkcH', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +iiZY4k});
ec('td');
ec('tr');
}
}});
let cndekSD = component.openModal;
this.setState('stxmHso', cndekSD);
if (cndekSD) { 
let cmp3F_t = this._lc('cJKmD3R01', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elrGpOn = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elrGpOn.formHandler) {
                    window.cfrmdlr = elrGpOn.formHandler = new FormHandler(elrGpOn, component);
                } else {
                    window.cfrmdlr = elrGpOn.formHandler;
                }
            let eluVEum = eo('div',null,null,`class`,`form-group`);
let elmQGuH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrGpOn.formHandler.addError(`name`, 'required', trans('validation.required'));}return elrGpOn.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elmQGuH.value = fval(component.formObject.name);
let cndV82f = elrGpOn.formHandler.getError(`name`);
this.setState('stjK1FA', cndV82f);
if (cndV82f) { 
let el2SJej = eo('div','yR_f',null,`class`,`alert alert-danger`);
text(elrGpOn.formHandler.getError(`name`));
ec('div');
}ec('div');
let eloqR2s = eo('div',null,null,`class`,`form-group`);
let el_MI51 = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmpipTs = this._lc('cQA_QMVPc', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stxmHso'});
ec('div');
let elk6j8G = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el2BvY5 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stxmHso'});
}
                    this.isReadyToGo();
                }
        });