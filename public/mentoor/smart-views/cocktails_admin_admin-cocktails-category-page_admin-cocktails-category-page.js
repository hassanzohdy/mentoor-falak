_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {c9OtYb_bH:'table-actions',cYlGY1rrt:'admin-table',c55f9Hcxl:'flk-checkbox',cZu3ac1Fi:'flk-image-input',c1dgV5GnL:'flk-modal'},
                render: function (component) {
                    let cmpMpZq = this._lc('cYlGY1rrt', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiL4vE = '9Y3kV2B' + index;
let elGMdSe = eo('tr','25BI9MF9YhSd' + index+iiL4vE);
let elfEzIO = eo('td','qH6ff'+iiL4vE);
text( record.id );
ec('td');
let elFLFKh = eo('td','g7Off'+iiL4vE);
text(record.name);
ec('td');
let el9yZtU = eo('td','JrMff'+iiL4vE);
let elKz28w = ev('img','_o_ff'+iiL4vE,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elgb44b = eo('td','UjNff'+iiL4vE);
text(record.sortOrder);
ec('td');
let elk8sEn = eo('td','fAXff'+iiL4vE);
text(record.display);
ec('td');
let el99nl7 = eo('td','YZFff'+iiL4vE);
let cmpbccS = this._lc('c9OtYb_bH', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiL4vE});
ec('td');
ec('tr');
}
}});
let cndDZ9p = component.openModal;
this.setState('stBLf2_', cndDZ9p);
if (cndDZ9p) { 
let cmpm2gc = this._lc('c1dgV5GnL', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elksFW5 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elksFW5.formHandler) {
                    window.cfrmdlr = elksFW5.formHandler = new FormHandler(elksFW5, component);
                } else {
                    window.cfrmdlr = elksFW5.formHandler;
                }
            let elGSTEG = eo('div',null,null,`class`,`form-group`);
let elASTvr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elksFW5.formHandler.addError(`name`, 'required', trans('validation.required'));}return elksFW5.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elASTvr.value = fval(component.formObject.name);
let cndqQjp = elksFW5.formHandler.getError(`name`);
this.setState('stDoBly', cndqQjp);
if (cndqQjp) { 
let elNF375 = eo('div','lEEf',null,`class`,`alert alert-danger`);
text(elksFW5.formHandler.getError(`name`));
ec('div');
}ec('div');
let ell04rv = eo('div',null,null,`class`,`form-group`);
let elAF0DN = eo('div',null,null,`class`,`row`);
let elsf53D = eo('div',null,null,`class`,`col-md-4`);
let elvTsUT = eo('div',null,null,`class`,`form-group`);
elvTsUT.cls = {'group-error': !!elksFW5.formHandler.getError(`sortOrder`) };

            for (let className in elvTsUT.cls) {
                elvTsUT.classList.toggle(className, elvTsUT.cls[className]);
            }  
            let elmESgK = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elE3Y0Z = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elE3Y0Z.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elYynn6 = eo('div',null,null,`class`,`col-md-3`);
let cmpBZYX = this._lc('c55f9Hcxl', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stBLf2_'});
ec('div');
ec('div');
ec('div');
let elTVye0 = eo('div',null,null,`class`,`form-group`);
let elLW2A2 = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmp0QXF = this._lc('cZu3ac1Fi', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stBLf2_'});
ec('div');
let eliHJHc = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elvrmNS = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stBLf2_'});
}
                    this.isReadyToGo();
                }
        });