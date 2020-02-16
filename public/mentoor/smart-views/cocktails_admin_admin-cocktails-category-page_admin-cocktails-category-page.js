_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cmO92q8GQ:'table-actions',c8VxTENkj:'admin-table',cOXM_wq6V:'flk-checkbox',ct3EYWBR7:'flk-image-input',cXU4W7rwr:'flk-modal'},
                render: function (component) {
                    let cmpluhl = this._lc('c8VxTENkj', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiDoTV = 'c4UbW3I' + index;
let elbFI8n = eo('tr','264Hb4sfMrqf' + index+iiDoTV);
let elS8Kmr = eo('td','LHIff'+iiDoTV);
text( record.id );
ec('td');
let elMUP4g = eo('td','Wmkff'+iiDoTV);
text(record.name);
ec('td');
let elfJ9dv = eo('td','DWdff'+iiDoTV);
let el3Td6v = ev('img','wYbff'+iiDoTV,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let el_86x4 = eo('td','5lvff'+iiDoTV);
text(record.sortOrder);
ec('td');
let elYm7uq = eo('td','5Kjff'+iiDoTV);
text(record.display);
ec('td');
let elr6jh_ = eo('td','q1eff'+iiDoTV);
let cmpmhTo = this._lc('cmO92q8GQ', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiDoTV});
ec('td');
ec('tr');
}
}});
let cnd4WHs = component.openModal;
this.setState('stwj_F3', cnd4WHs);
if (cnd4WHs) { 
let cmp_qcw = this._lc('cXU4W7rwr', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el1b0ar = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el1b0ar.formHandler) {
                    window.cfrmdlr = el1b0ar.formHandler = new FormHandler(el1b0ar, component);
                } else {
                    window.cfrmdlr = el1b0ar.formHandler;
                }
            let elSD0Wv = eo('div',null,null,`class`,`form-group`);
let elikvRt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1b0ar.formHandler.addError(`name`, 'required', trans('validation.required'));}return el1b0ar.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elikvRt.value = fval(component.formObject.name);
let cndNo6f = el1b0ar.formHandler.getError(`name`);
this.setState('stLx6ZB', cndNo6f);
if (cndNo6f) { 
let elKBTO8 = eo('div','9Aof',null,`class`,`alert alert-danger`);
text(el1b0ar.formHandler.getError(`name`));
ec('div');
}ec('div');
let elCx31e = eo('div',null,null,`class`,`form-group`);
let el1YlBh = eo('div',null,null,`class`,`row`);
let elZbXv2 = eo('div',null,null,`class`,`col-md-4`);
let elQIGHP = eo('div',null,null,`class`,`form-group`);
elQIGHP.cls = {'group-error': !!el1b0ar.formHandler.getError(`sortOrder`) };

            for (let className in elQIGHP.cls) {
                elQIGHP.classList.toggle(className, elQIGHP.cls[className]);
            }  
            let elUvDmG = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let el_qKLM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el_qKLM.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elCsgCW = eo('div',null,null,`class`,`col-md-3`);
let cmpd179 = this._lc('cOXM_wq6V', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stwj_F3'});
ec('div');
ec('div');
ec('div');
let el3XH_W = eo('div',null,null,`class`,`form-group`);
let elBdQMG = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpCY3h = this._lc('ct3EYWBR7', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stwj_F3'});
ec('div');
let elsNqNH = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elEd1Qz = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stwj_F3'});
}
                    this.isReadyToGo();
                }
        });