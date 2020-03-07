_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {c6lKYOsIw:'table-actions',cWQ5fsuKI:'admin-table',celwOLFOL:'flk-checkbox',ciAxUI1h5:'flk-image-input',cly2r3MTa:'flk-modal'},
                render: function (component) {
                    let cmpx4aR = this._lc('cWQ5fsuKI', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiOjGK = 'lZfhS3t' + index;
let el5yJsb = eo('tr','nKmXUDkwqr5u' + index+iiOjGK);
let el6QQk3 = eo('td','v6yff'+iiOjGK);
text( record.id );
ec('td');
let eldZ5Zh = eo('td','jYeff'+iiOjGK);
text(record.name);
ec('td');
let eleUEYG = eo('td','_Vuff'+iiOjGK);
let elxdeH5 = ev('img','Yi3ff'+iiOjGK,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let el1CBbt = eo('td','SzEff'+iiOjGK);
text(record.sortOrder);
ec('td');
let elM2KXj = eo('td','_Eeff'+iiOjGK);
text(record.display);
ec('td');
let el0aGkA = eo('td','PkKff'+iiOjGK);
let cmpIBRf = this._lc('c6lKYOsIw', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiOjGK});
ec('td');
ec('tr');
}
}});
let cndTuCq = component.openModal;
this.setState('stv6Mmj', cndTuCq);
if (cndTuCq) { 
let cmpHcgq = this._lc('cly2r3MTa', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elzDLeQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elzDLeQ.formHandler) {
                    window.cfrmdlr = elzDLeQ.formHandler = new FormHandler(elzDLeQ, component);
                } else {
                    window.cfrmdlr = elzDLeQ.formHandler;
                }
            let elDVb_q = eo('div',null,null,`class`,`form-group`);
let elTQRYK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzDLeQ.formHandler.addError(`name`, 'required', trans('validation.required'));}return elzDLeQ.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elTQRYK.value = fval(component.formObject.name);
let cndofCo = elzDLeQ.formHandler.getError(`name`);
this.setState('stbtgt5', cndofCo);
if (cndofCo) { 
let elVE8y7 = eo('div','Fj0f',null,`class`,`alert alert-danger`);
text(elzDLeQ.formHandler.getError(`name`));
ec('div');
}ec('div');
let elJ1iQ6 = eo('div',null,null,`class`,`form-group`);
let el7ngdR = eo('div',null,null,`class`,`row`);
let elrVkkZ = eo('div',null,null,`class`,`col-md-4`);
let elOb6zo = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elzDLeQ.formHandler.getError(`sortOrder`) })}`);
let elbcysn = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let eleIFs_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
eleIFs_.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elrU9T7 = eo('div',null,null,`class`,`col-md-3`);
let cmpwX8R = this._lc('celwOLFOL', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stv6Mmj'});
ec('div');
ec('div');
ec('div');
let ely0cOq = eo('div',null,null,`class`,`form-group`);
let elaSK09 = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpsXAQ = this._lc('ciAxUI1h5', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stv6Mmj'});
ec('div');
let elkAdLa = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eliStPY = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stv6Mmj'});
}
                    this.isReadyToGo();
                }
        });