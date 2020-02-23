_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cNUDTK_Qe:'table-actions',cSBgdwItH:'admin-table',cxuY_XS1O:'flk-checkbox',cdqI_E8Rk:'flk-image-input',cbVia6zgN:'flk-modal'},
                render: function (component) {
                    let cmpJqhy = this._lc('cSBgdwItH', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iixO5U = 'fhdtvSI' + index;
let elpjeBR = eo('tr','4ARW9TQBSbWH' + index+iixO5U);
let el7wIxM = eo('td','MhAff'+iixO5U);
text( record.id );
ec('td');
let eli0H9R = eo('td','lRtff'+iixO5U);
text(record.name);
ec('td');
let elDkbHR = eo('td','og5ff'+iixO5U);
let elJx5z1 = ev('img','3fhff'+iixO5U,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elwxJP2 = eo('td','UDjff'+iixO5U);
text(record.sortOrder);
ec('td');
let elPwUOo = eo('td','RsMff'+iixO5U);
text(record.display);
ec('td');
let eld1iOv = eo('td','3juff'+iixO5U);
let cmpJR1Q = this._lc('cNUDTK_Qe', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iixO5U});
ec('td');
ec('tr');
}
}});
let cndsDaW = component.openModal;
this.setState('stBwVaV', cndsDaW);
if (cndsDaW) { 
let cmp7YOZ = this._lc('cbVia6zgN', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elnWzwG = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elnWzwG.formHandler) {
                    window.cfrmdlr = elnWzwG.formHandler = new FormHandler(elnWzwG, component);
                } else {
                    window.cfrmdlr = elnWzwG.formHandler;
                }
            let elL7unQ = eo('div',null,null,`class`,`form-group`);
let elIBQKK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnWzwG.formHandler.addError(`name`, 'required', trans('validation.required'));}return elnWzwG.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elIBQKK.value = fval(component.formObject.name);
let cnd0yso = elnWzwG.formHandler.getError(`name`);
this.setState('stjA_zd', cnd0yso);
if (cnd0yso) { 
let elVpxWr = eo('div','358f',null,`class`,`alert alert-danger`);
text(elnWzwG.formHandler.getError(`name`));
ec('div');
}ec('div');
let elTBXBq = eo('div',null,null,`class`,`form-group`);
let elnFOl9 = eo('div',null,null,`class`,`row`);
let eleGqlx = eo('div',null,null,`class`,`col-md-4`);
let eleA0ze = eo('div',null,null,`class`,`form-group`);
eleA0ze.cls = {'group-error': !!elnWzwG.formHandler.getError(`sortOrder`) };

            for (let className in eleA0ze.cls) {
                eleA0ze.classList.toggle(className, eleA0ze.cls[className]);
            }  
            let elajlqA = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elG7ZvG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elG7ZvG.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elDMZrr = eo('div',null,null,`class`,`col-md-3`);
let cmpaJN8 = this._lc('cxuY_XS1O', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stBwVaV'});
ec('div');
ec('div');
ec('div');
let eleZsAC = eo('div',null,null,`class`,`form-group`);
let elC2W72 = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpfMrI = this._lc('cdqI_E8Rk', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stBwVaV'});
ec('div');
let el2uEIU = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elIPaW8 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stBwVaV'});
}
                    this.isReadyToGo();
                }
        });