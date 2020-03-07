_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cHz1mEtSu:'table-actions',cBEHdXR0o:'admin-table',cCBeI3E5f:'flk-checkbox',c2bvaGUMj:'flk-image-input',cS27ySMbJ:'flk-modal'},
                render: function (component) {
                    let cmpX09P = this._lc('cBEHdXR0o', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiYq7m = 'U1xxj_0' + index;
let elkPde7 = eo('tr','p0Gob1kUgArW' + index+iiYq7m);
let el9u_E1 = eo('td','zRHff'+iiYq7m);
text( record.id );
ec('td');
let elFkUJB = eo('td','GVdff'+iiYq7m);
text(record.name);
ec('td');
let elN9Wtr = eo('td','Dkrff'+iiYq7m);
let elDcVlk = ev('img','lj7ff'+iiYq7m,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let eltgMw5 = eo('td','FhGff'+iiYq7m);
text(record.sortOrder);
ec('td');
let elc_ud8 = eo('td','Omtff'+iiYq7m);
text(record.display);
ec('td');
let elVWh5v = eo('td','p48ff'+iiYq7m);
let cmpkq2c = this._lc('cHz1mEtSu', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiYq7m});
ec('td');
ec('tr');
}
}});
let cndGpTY = component.openModal;
this.setState('stKiV5m', cndGpTY);
if (cndGpTY) { 
let cmpUA11 = this._lc('cS27ySMbJ', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elvIPvG = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvIPvG.formHandler) {
                    window.cfrmdlr = elvIPvG.formHandler = new FormHandler(elvIPvG, component);
                } else {
                    window.cfrmdlr = elvIPvG.formHandler;
                }
            let elEm3XE = eo('div',null,null,`class`,`form-group`);
let elHIi3s = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvIPvG.formHandler.addError(`name`, 'required', trans('validation.required'));}return elvIPvG.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elHIi3s.value = fval(component.formObject.name);
let cndtOLr = elvIPvG.formHandler.getError(`name`);
this.setState('stoXJmp', cndtOLr);
if (cndtOLr) { 
let elii4Ph = eo('div','iDLf',null,`class`,`alert alert-danger`);
text(elvIPvG.formHandler.getError(`name`));
ec('div');
}ec('div');
let elSh_LD = eo('div',null,null,`class`,`form-group`);
let eljXrTF = eo('div',null,null,`class`,`row`);
let elqtwlO = eo('div',null,null,`class`,`col-md-4`);
let el9Ryb1 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elvIPvG.formHandler.getError(`sortOrder`) })}`);
let elxtO37 = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elhC3B6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elhC3B6.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elkEkyM = eo('div',null,null,`class`,`col-md-3`);
let cmp_5Z2 = this._lc('cCBeI3E5f', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stKiV5m'});
ec('div');
ec('div');
ec('div');
let elfw2as = eo('div',null,null,`class`,`form-group`);
let el9QCbz = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpPaen = this._lc('c2bvaGUMj', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stKiV5m'});
ec('div');
let elO0I7J = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elY0wvj = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stKiV5m'});
}
                    this.isReadyToGo();
                }
        });