_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {cFzJRTZzX:'tag-badge',cSKspBS_v:'table-actions',cI1zS0xBd:'admin-table',czseQxOPK:'flk-checkbox',cpKVZyaUx:'flk-dropdown-list',cqDel2RFp:'flk-dropdown-list',cduhpIrD6:'flk-dropdown-list',ck2tdSHC1:'flk-image-input',cboniv4kB:'flk-modal'},
                render: function (component) {
                    let cmp93bO = this._lc('cI1zS0xBd', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii6eiG = 'hPCGPDX' + index;
let el2vxnz = eo('tr','rYg4fWt4IJKj' + index+ii6eiG);
let elvbzg1 = eo('td','PQSff'+ii6eiG);
text( record.id );
ec('td');
let elOgmrI = eo('td','5yuff'+ii6eiG);
text(record.name);
ec('td');
let elqaDra = eo('td','N7Pff'+ii6eiG);
text(record.category.name);
ec('td');
let el3ZQlT = eo('td','7z1ff'+ii6eiG);
let elcNevD = ev('img','keiff'+ii6eiG,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let ele9sfV = eo('td','XsMff'+ii6eiG);
text(record.cost.format());
ec('td');
let el0kDzs = eo('td','Owlff'+ii6eiG);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiJqDV = '6LCeF4o' + i;
let elmrtVh = eo('div','ze_sa8dE5FoT' + i+ii6eiG+iiJqDV,null,`class`,`m-b-1`);
let cmpDaOF = this._lc('cFzJRTZzX', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +ii6eiG+iiJqDV});
ec('div');
}
ec('td');
let elRGkCW = eo('td','y0rff'+ii6eiG);
text(record.sortOrder);
ec('td');
let elV0XBV = eo('td','e9Pff'+ii6eiG);
text(record.display);
ec('td');
let elhEIjS = eo('td','to9ff'+ii6eiG);
let cmpzxUS = this._lc('cSKspBS_v', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii6eiG});
ec('td');
ec('tr');
}
}});
let cndNoMy = component.openModal;
this.setState('stDkSyk', cndNoMy);
if (cndNoMy) { 
let cmpzKxk = this._lc('cboniv4kB', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elRf6kO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elRf6kO.formHandler) {
                    window.cfrmdlr = elRf6kO.formHandler = new FormHandler(elRf6kO, component);
                } else {
                    window.cfrmdlr = elRf6kO.formHandler;
                }
            let elpa0cd = eo('div',null,null,`class`,`form-group`);
let elPTF3y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elRf6kO.formHandler.addError(`name`, 'required', trans('validation.required'));}return elRf6kO.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elPTF3y.value = fval(component.formObject.name);
let cndUXmk = elRf6kO.formHandler.getError(`name`);
this.setState('stD19kz', cndUXmk);
if (cndUXmk) { 
let elj3I_v = eo('div','SO6f',null,`class`,`alert alert-danger`);
text(elRf6kO.formHandler.getError(`name`));
ec('div');
}ec('div');
let elpIgNv = eo('div',null,null,`class`,`form-group`);
let eltKZ17 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elRf6kO.formHandler.addError(`description`, 'required', trans('validation.required'));}return elRf6kO.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
eltKZ17.value = fval(component.formObject.description);
ec('textarea');
let cndcthS = elRf6kO.formHandler.getError(`description`);
this.setState('st1oOVh', cndcthS);
if (cndcthS) { 
let elW3n3N = eo('div','PW6f',null,`class`,`alert alert-danger`);
text(elRf6kO.formHandler.getError(`description`));
ec('div');
}ec('div');
let elNLWw6 = eo('div',null,null,`class`,`form-group`);
let elvL4mi = eo('div',null,null,`class`,`row`);
let elULbkV = eo('div',null,null,`class`,`col-md-4`);
let elYscdF = eo('div',null,null,`class`,`form-group`);
elYscdF.cls = {'group-error': !!elRf6kO.formHandler.getError(`sortOrder`) };

            for (let className in elYscdF.cls) {
                elYscdF.classList.toggle(className, elYscdF.cls[className]);
            }  
            let elUxfmi = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elKTkUz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elKTkUz.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let eluBl5w = eo('div',null,null,`class`,`col-md-4`);
let elg467l = eo('div',null,null,`class`,`form-group`);
elg467l.cls = {'group-error': !!elRf6kO.formHandler.getError(`cost`) };

            for (let className in elg467l.cls) {
                elg467l.classList.toggle(className, elg467l.cls[className]);
            }  
            let elJc68j = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let elDy5LF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elXGSrE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elRf6kO.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elRf6kO.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elXGSrE.value = fval(component.formObject.cost);
let cndkeFH = elRf6kO.formHandler.getError(`cost`);
this.setState('stTsTYz', cndkeFH);
if (cndkeFH) { 
let ellGsUb = eo('div','UsLf',null,`class`,`alert alert-danger`);
text(elRf6kO.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elAcd3W = eo('div',null,null,`class`,`col-md-3`);
let cmpdLEm = this._lc('czseQxOPK', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stDkSyk'});
ec('div');
ec('div');
ec('div');
let elTllW5 = eo('div',null,null,`class`,`row`);
let elXIQpc = eo('div',null,null,`class`,`col-4`);
let cmpcahw = this._lc('cpKVZyaUx', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stDkSyk'});
ec('div');
let elZ9Si1 = eo('div',null,null,`class`,`col-4`);
let cmpArrP = this._lc('cqDel2RFp', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'stDkSyk'});
ec('div');
let elnH7Os = eo('div',null,null,`class`,`col-4`);
let cmp6LHE = this._lc('cduhpIrD6', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'stDkSyk'});
ec('div');
ec('div');
let elcCD6O = eo('div',null,null,`class`,`form-group`);
let el0FSra = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpMJYG = this._lc('ck2tdSHC1', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stDkSyk'});
ec('div');
let elSPGRs = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elajYYV = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stDkSyk'});
}
                    this.isReadyToGo();
                }
        });