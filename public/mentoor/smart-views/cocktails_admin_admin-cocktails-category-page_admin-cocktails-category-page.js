_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cmIwDciyo:'table-actions',ceBSlYG9z:'admin-table',cmCXps7hw:'flk-checkbox',c4N6kwTww:'flk-image-input',c5Wt0Gtx4:'flk-modal'},
                render: function (component) {
                    let cmpDYhy = this._lc('ceBSlYG9z', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iitCH5 = 'oGvnng6' + index;
let elg_Knq = eo('tr','gGMJyZhPYLv0' + index+iitCH5);
let elP6aH4 = eo('td','uPsff'+iitCH5);
text( record.id );
ec('td');
let elWvZI1 = eo('td','YYVff'+iitCH5);
text(record.name);
ec('td');
let elaNDSM = eo('td','D_Gff'+iitCH5);
let ell3hIT = ev('img','hJBff'+iitCH5,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elMDy1M = eo('td','G6bff'+iitCH5);
text(record.sortOrder);
ec('td');
let elibS4K = eo('td','lXMff'+iitCH5);
text(record.display);
ec('td');
let elWRNIt = eo('td','aa0ff'+iitCH5);
let cmpsNXi = this._lc('cmIwDciyo', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iitCH5});
ec('td');
ec('tr');
}
}});
let cndYbB8 = component.openModal;
this.setState('stC_UMQ', cndYbB8);
if (cndYbB8) { 
let cmpMd3J = this._lc('c5Wt0Gtx4', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elR4hnO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elR4hnO.formHandler) {
                    window.cfrmdlr = elR4hnO.formHandler = new FormHandler(elR4hnO, component);
                } else {
                    window.cfrmdlr = elR4hnO.formHandler;
                }
            let elpZoxX = eo('div',null,null,`class`,`form-group`);
let elZXio9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elR4hnO.formHandler.addError(`name`, 'required', trans('validation.required'));}return elR4hnO.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elZXio9.value = fval(component.formObject.name);
let cndHxO4 = elR4hnO.formHandler.getError(`name`);
this.setState('stwq6mj', cndHxO4);
if (cndHxO4) { 
let el0ijrc = eo('div','G0yf',null,`class`,`alert alert-danger`);
text(elR4hnO.formHandler.getError(`name`));
ec('div');
}ec('div');
let elHrggj = eo('div',null,null,`class`,`form-group`);
let elc7ZCa = eo('div',null,null,`class`,`row`);
let el9fI4B = eo('div',null,null,`class`,`col-md-4`);
let elQsEDh = eo('div',null,null,`class`,`form-group`);
elQsEDh.cls = {'group-error': !!elR4hnO.formHandler.getError(`sortOrder`) };

            for (let className in elQsEDh.cls) {
                elQsEDh.classList.toggle(className, elQsEDh.cls[className]);
            }  
            let elG68f4 = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elr775U = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elr775U.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elyLfq6 = eo('div',null,null,`class`,`col-md-3`);
let cmpyPBb = this._lc('cmCXps7hw', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stC_UMQ'});
ec('div');
ec('div');
ec('div');
let elBVRPm = eo('div',null,null,`class`,`form-group`);
let elMarAR = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpf87c = this._lc('c4N6kwTww', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stC_UMQ'});
ec('div');
let elAPAHO = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elekcfI = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stC_UMQ'});
}
                    this.isReadyToGo();
                }
        });