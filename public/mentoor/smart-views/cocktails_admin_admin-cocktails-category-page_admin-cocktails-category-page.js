_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {ca3dPPdv8:'table-actions',cLUoIBAva:'admin-table',ceNxAn9Uu:'flk-checkbox',cBDJcARqy:'flk-image-input',cOJAy4WDi:'flk-modal'},
                render: function (component) {
                    let cmpu_Ui = this._lc('cLUoIBAva', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iie2Dr = 'e8hbvY5' + index;
let el2LaH_ = eo('tr','azVgWhcKGO8e' + index+iie2Dr);
let el_ANCL = eo('td','kpcff'+iie2Dr);
text( record.id );
ec('td');
let eldZ8YQ = eo('td','yCmff'+iie2Dr);
text(record.name);
ec('td');
let elh4GRa = eo('td','_3Wff'+iie2Dr);
let elayLM2 = ev('img','uOuff'+iie2Dr,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elHvYi7 = eo('td','IXpff'+iie2Dr);
text(record.sortOrder);
ec('td');
let elkYFX1 = eo('td','iuvff'+iie2Dr);
text(record.display);
ec('td');
let el_bxUc = eo('td','jcQff'+iie2Dr);
let cmpRgcn = this._lc('ca3dPPdv8', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iie2Dr});
ec('td');
ec('tr');
}
}});
let cndzAlN = component.openModal;
this.setState('stUwcGH', cndzAlN);
if (cndzAlN) { 
let cmp92CX = this._lc('cOJAy4WDi', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el3qBIE = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el3qBIE.formHandler) {
                    window.cfrmdlr = el3qBIE.formHandler = new FormHandler(el3qBIE, component);
                } else {
                    window.cfrmdlr = el3qBIE.formHandler;
                }
            let elrEb3K = eo('div',null,null,`class`,`form-group`);
let eltJggz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el3qBIE.formHandler.addError(`name`, 'required', trans('validation.required'));}return el3qBIE.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eltJggz.value = fval(component.formObject.name);
let cndOl9M = el3qBIE.formHandler.getError(`name`);
this.setState('stZIKb4', cndOl9M);
if (cndOl9M) { 
let elyo0ob = eo('div','f_jf',null,`class`,`alert alert-danger`);
text(el3qBIE.formHandler.getError(`name`));
ec('div');
}ec('div');
let elM7rA4 = eo('div',null,null,`class`,`form-group`);
let el78v40 = eo('div',null,null,`class`,`row`);
let elow6IH = eo('div',null,null,`class`,`col-md-4`);
let elkk_qn = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el3qBIE.formHandler.getError(`sortOrder`) })}`);
let elKF3Wn = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elJfrK6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elJfrK6.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elQsJVq = eo('div',null,null,`class`,`col-md-3`);
let cmp22Iz = this._lc('ceNxAn9Uu', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stUwcGH'});
ec('div');
ec('div');
ec('div');
let elV8m8b = eo('div',null,null,`class`,`form-group`);
let elYT3pF = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpQAws = this._lc('cBDJcARqy', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stUwcGH'});
ec('div');
let eljwdov = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let ellV0nL = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stUwcGH'});
}
                    this.isReadyToGo();
                }
        });