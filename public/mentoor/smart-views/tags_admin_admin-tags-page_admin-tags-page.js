_Component({
                selector: 'admin-tags-page',
                c: 'AdminTagsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {c1_vQWhRr:'table-actions',cxak4AeNn:'admin-table',cif9kMcVd:'flk-image-input',cgT4JWc_2:'flk-modal'},
                render: function (component) {
                    let cmpRsFr = this._lc('cxak4AeNn', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let tag = component.items[index]; 
 let iis9gu = 'gaZpcfB' + index;
let elWl51_ = eo('tr','NDPDLQSDoEK2' + index+iis9gu);
let elLFSez = eo('td','AcQff'+iis9gu);
text( tag.id );
ec('td');
let elP0yys = eo('td','XdOff'+iis9gu);
let elKS_uj = ev('img','3Rjff'+iis9gu,null,`src`,`${tag.image}`,`class`,`tagImg small-image`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
ec('td');
let elYrSsB = eo('td','VMqff'+iis9gu);
text(tag.name);
ec('td');
let elifydf = eo('td','pR4ff'+iis9gu);
let cmpPy8G = this._lc('c1_vQWhRr', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(tag)},ondelete:function(e) {let $el = this; component.deleteItem(tag.id, index)}},insideLoop:true,index:"" +iis9gu});
ec('td');
ec('tr');
}
}});
let cndxSF3 = component.openModal;
this.setState('stA8QZl', cndxSF3);
if (cndxSF3) { 
let cmpseXx = this._lc('cgT4JWc_2', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elBjkNx = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elBjkNx.formHandler) {
                    window.cfrmdlr = elBjkNx.formHandler = new FormHandler(elBjkNx, component);
                } else {
                    window.cfrmdlr = elBjkNx.formHandler;
                }
            let elnOczW = eo('div',null,null,`class`,`form-group`);
let elk4RbZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBjkNx.formHandler.addError(`name`, 'required', trans('validation.required'));}return elBjkNx.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Tag name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elk4RbZ.value = fval(component.formObject.name);
let cndrxUi = elBjkNx.formHandler.getError(`name`);
this.setState('stEzdDa', cndrxUi);
if (cndrxUi) { 
let elQaxhI = eo('div','ZV4f',null,`class`,`alert alert-danger`);
text(elBjkNx.formHandler.getError(`name`));
ec('div');
}ec('div');
let elYzdMa = eo('div',null,null,`class`,`form-group`);
let el5zfcQ = eo('label',null,null,`for`,`image`);
text(`Tag image`);
ec('label');
let cmpDla0 = this._lc('cif9kMcVd', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stA8QZl'});
ec('div');
let elrwszt = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el5lf2k = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stA8QZl'});
}
                    this.isReadyToGo();
                }
        });