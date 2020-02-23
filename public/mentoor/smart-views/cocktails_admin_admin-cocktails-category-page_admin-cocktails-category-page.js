_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cY3kmn81I:'table-actions',cYeiuJoCw:'admin-table',cVu3dWEsa:'flk-checkbox',clYeSQPbc:'flk-image-input',cNqVzSV7v:'flk-modal'},
                render: function (component) {
                    let cmpX7k3 = this._lc('cYeiuJoCw', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iijl1Q = 'h_Kebmj' + index;
let elTXBiX = eo('tr','vsgomTCtGE2G' + index+iijl1Q);
let ele0vmj = eo('td','K7Gff'+iijl1Q);
text( record.id );
ec('td');
let eleASc3 = eo('td','j7off'+iijl1Q);
text(record.name);
ec('td');
let els7vz0 = eo('td','Wxfff'+iijl1Q);
let elF1GEZ = ev('img','nzhff'+iijl1Q,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elaHn2s = eo('td','tDdff'+iijl1Q);
text(record.sortOrder);
ec('td');
let elj9jy8 = eo('td','AGGff'+iijl1Q);
text(record.display);
ec('td');
let elhvnxu = eo('td','5Seff'+iijl1Q);
let cmpisjQ = this._lc('cY3kmn81I', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iijl1Q});
ec('td');
ec('tr');
}
}});
let cndNpy9 = component.openModal;
this.setState('stq0oBH', cndNpy9);
if (cndNpy9) { 
let cmphH0T = this._lc('cNqVzSV7v', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let eloQcwY = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eloQcwY.formHandler) {
                    window.cfrmdlr = eloQcwY.formHandler = new FormHandler(eloQcwY, component);
                } else {
                    window.cfrmdlr = eloQcwY.formHandler;
                }
            let elu6OL7 = eo('div',null,null,`class`,`form-group`);
let elMfBe7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eloQcwY.formHandler.addError(`name`, 'required', trans('validation.required'));}return eloQcwY.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elMfBe7.value = fval(component.formObject.name);
let cndUshN = eloQcwY.formHandler.getError(`name`);
this.setState('stBWGur', cndUshN);
if (cndUshN) { 
let elN6QWX = eo('div','ifRf',null,`class`,`alert alert-danger`);
text(eloQcwY.formHandler.getError(`name`));
ec('div');
}ec('div');
let eleYEbI = eo('div',null,null,`class`,`form-group`);
let elyWMpn = eo('div',null,null,`class`,`row`);
let elVTRJ3 = eo('div',null,null,`class`,`col-md-4`);
let elioSFq = eo('div',null,null,`class`,`form-group`);
elioSFq.cls = {'group-error': !!eloQcwY.formHandler.getError(`sortOrder`) };

            for (let className in elioSFq.cls) {
                elioSFq.classList.toggle(className, elioSFq.cls[className]);
            }  
            let eltv85_ = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elhG37D = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elhG37D.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elUgoU_ = eo('div',null,null,`class`,`col-md-3`);
let cmp5cnM = this._lc('cVu3dWEsa', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stq0oBH'});
ec('div');
ec('div');
ec('div');
let el1dMGX = eo('div',null,null,`class`,`form-group`);
let elv2FQH = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpm3ch = this._lc('clYeSQPbc', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stq0oBH'});
ec('div');
let elu8TXv = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el1yELr = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stq0oBH'});
}
                    this.isReadyToGo();
                }
        });