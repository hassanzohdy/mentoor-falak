_Component({
                selector: 'admin-cocktails-category-page',
                c: 'AdminCocktailsCategoryPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {coyo6vawI:'table-actions',ccDUiREtl:'admin-table',cIs01rgWI:'flk-checkbox',cL5updwRC:'flk-image-input',cNogYWqid:'flk-modal'},
                render: function (component) {
                    let cmpBriU = this._lc('ccDUiREtl', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii6VOK = 'dPN3kmD' + index;
let el3h0M_ = eo('tr','k_auzlocQs5d' + index+ii6VOK);
let elWrduK = eo('td','tqqff'+ii6VOK);
text( record.id );
ec('td');
let elvp2Im = eo('td','HzRff'+ii6VOK);
text(record.name);
ec('td');
let el7B2j0 = eo('td','jcBff'+ii6VOK);
let el3qx6H = ev('img','ntDff'+ii6VOK,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elEdf3u = eo('td','S8cff'+ii6VOK);
text(record.sortOrder);
ec('td');
let el1GDy4 = eo('td','Gfvff'+ii6VOK);
text(record.display);
ec('td');
let elXdQqy = eo('td','Uo1ff'+ii6VOK);
let cmpcPmV = this._lc('coyo6vawI', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii6VOK});
ec('td');
ec('tr');
}
}});
let cndTT1h = component.openModal;
this.setState('stgl1Sk', cndTT1h);
if (cndTT1h) { 
let cmpatVK = this._lc('cNogYWqid', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let ela8wZB = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! ela8wZB.formHandler) {
                    window.cfrmdlr = ela8wZB.formHandler = new FormHandler(ela8wZB, component);
                } else {
                    window.cfrmdlr = ela8wZB.formHandler;
                }
            let elgTT_v = eo('div',null,null,`class`,`form-group`);
let el4DLCh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ela8wZB.formHandler.addError(`name`, 'required', trans('validation.required'));}return ela8wZB.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el4DLCh.value = fval(component.formObject.name);
let cndbQId = ela8wZB.formHandler.getError(`name`);
this.setState('stMDu3b', cndbQId);
if (cndbQId) { 
let elrPLSm = eo('div','uxgf',null,`class`,`alert alert-danger`);
text(ela8wZB.formHandler.getError(`name`));
ec('div');
}ec('div');
let elJtv_n = eo('div',null,null,`class`,`form-group`);
let elyetOH = eo('div',null,null,`class`,`row`);
let el9acqB = eo('div',null,null,`class`,`col-md-4`);
let el8u4_p = eo('div',null,null,`class`,`form-group`);
el8u4_p.cls = {'group-error': !!ela8wZB.formHandler.getError(`sortOrder`) };

            for (let className in el8u4_p.cls) {
                el8u4_p.classList.toggle(className, el8u4_p.cls[className]);
            }  
            let ellmvqL = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elKsqXT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elKsqXT.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elc6qwj = eo('div',null,null,`class`,`col-md-3`);
let cmpwLYt = this._lc('cIs01rgWI', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stgl1Sk'});
ec('div');
ec('div');
ec('div');
let elTxauo = eo('div',null,null,`class`,`form-group`);
let elZxl3w = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpp32q = this._lc('cL5updwRC', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stgl1Sk'});
ec('div');
let eliwuNB = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elyR_HC = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stgl1Sk'});
}
                    this.isReadyToGo();
                }
        });