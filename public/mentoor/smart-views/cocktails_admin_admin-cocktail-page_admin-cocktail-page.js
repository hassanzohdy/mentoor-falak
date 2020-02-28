_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {c1eSteAm5:'tag-badge',cmw_KNPbr:'table-actions',cIIHhosUX:'admin-table',cvGMRUMDE:'flk-checkbox',c2oh3NMn_:'flk-dropdown-list',cv0ZCdTe1:'flk-dropdown-list',cngFTfHdl:'flk-dropdown-list',c2OcVOI7N:'flk-image-input',cohJ3WGG0:'flk-modal'},
                render: function (component) {
                    let cmpFU84 = this._lc('cIIHhosUX', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii8XDZ = 'eH8a_wU' + index;
let elZFH_O = eo('tr','X9uKr_3KjEPr' + index+ii8XDZ);
let elrQetW = eo('td','lOtff'+ii8XDZ);
text( record.id );
ec('td');
let elDQDL1 = eo('td','GUhff'+ii8XDZ);
text(record.name);
ec('td');
let eliZ7L1 = eo('td','ktoff'+ii8XDZ);
text(record.category.name);
ec('td');
let elSvH7I = eo('td','hNoff'+ii8XDZ);
let el02snI = ev('img','3abff'+ii8XDZ,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elXZMgN = eo('td','_Odff'+ii8XDZ);
text(record.cost.format());
ec('td');
let elzp2on = eo('td','WNmff'+ii8XDZ);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiEpuD = 't05mXH4' + i;
let elHy3bC = eo('div','3E1SLLp_xwSw' + i+ii8XDZ+iiEpuD,null,`class`,`m-b-1`);
let cmpK22y = this._lc('c1eSteAm5', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +ii8XDZ+iiEpuD});
ec('div');
}
ec('td');
let elts6P3 = eo('td','voHff'+ii8XDZ);
text(record.sortOrder);
ec('td');
let elFvXMo = eo('td','T0gff'+ii8XDZ);
text(record.display);
ec('td');
let elvNwQI = eo('td','S9eff'+ii8XDZ);
let cmp26tu = this._lc('cmw_KNPbr', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii8XDZ});
ec('td');
ec('tr');
}
}});
let cndz4tn = component.openModal;
this.setState('st0XJZQ', cndz4tn);
if (cndz4tn) { 
let cmp_tp6 = this._lc('cohJ3WGG0', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elc4_3C = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elc4_3C.formHandler) {
                    window.cfrmdlr = elc4_3C.formHandler = new FormHandler(elc4_3C, component);
                } else {
                    window.cfrmdlr = elc4_3C.formHandler;
                }
            let el5p5I2 = eo('div',null,null,`class`,`form-group`);
let elhdVG6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elc4_3C.formHandler.addError(`name`, 'required', trans('validation.required'));}return elc4_3C.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elhdVG6.value = fval(component.formObject.name);
let cndMmGX = elc4_3C.formHandler.getError(`name`);
this.setState('stbmQPv', cndMmGX);
if (cndMmGX) { 
let elc7LfB = eo('div','Ksff',null,`class`,`alert alert-danger`);
text(elc4_3C.formHandler.getError(`name`));
ec('div');
}ec('div');
let elnMDnI = eo('div',null,null,`class`,`form-group`);
let elB4Myo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elc4_3C.formHandler.addError(`description`, 'required', trans('validation.required'));}return elc4_3C.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elB4Myo.value = fval(component.formObject.description);
ec('textarea');
let cndAqTh = elc4_3C.formHandler.getError(`description`);
this.setState('stLC9yr', cndAqTh);
if (cndAqTh) { 
let elrbvq3 = eo('div','UCQf',null,`class`,`alert alert-danger`);
text(elc4_3C.formHandler.getError(`description`));
ec('div');
}ec('div');
let elUH7bM = eo('div',null,null,`class`,`form-group`);
let el6lkeH = eo('div',null,null,`class`,`row`);
let eliiukw = eo('div',null,null,`class`,`col-md-4`);
let elLAVwN = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elc4_3C.formHandler.getError(`sortOrder`) })}`);
let elofYGx = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elvkVNt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elvkVNt.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elkiQ7b = eo('div',null,null,`class`,`col-md-4`);
let elAwoTg = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elc4_3C.formHandler.getError(`cost`) })}`);
let ela3B4d = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let elB9rBi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elI7HIT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elc4_3C.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elc4_3C.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elI7HIT.value = fval(component.formObject.cost);
let cndCgdO = elc4_3C.formHandler.getError(`cost`);
this.setState('st3bn5A', cndCgdO);
if (cndCgdO) { 
let elVl0IW = eo('div','pd2f',null,`class`,`alert alert-danger`);
text(elc4_3C.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let ellPWyY = eo('div',null,null,`class`,`col-md-3`);
let cmpvKn2 = this._lc('cvGMRUMDE', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'st0XJZQ'});
ec('div');
ec('div');
ec('div');
let elAluO1 = eo('div',null,null,`class`,`row`);
let elIfija = eo('div',null,null,`class`,`col-4`);
let cmpXOwT = this._lc('c2oh3NMn_', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'st0XJZQ'});
ec('div');
let el5faMZ = eo('div',null,null,`class`,`col-4`);
let cmpVxp_ = this._lc('cv0ZCdTe1', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'st0XJZQ'});
ec('div');
let elODhgf = eo('div',null,null,`class`,`col-4`);
let cmpOvd6 = this._lc('cngFTfHdl', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'st0XJZQ'});
ec('div');
ec('div');
let elCP_m5 = eo('div',null,null,`class`,`form-group`);
let elNZStd = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpGFsK = this._lc('c2OcVOI7N', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'st0XJZQ'});
ec('div');
let elg5mq5 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elyP2Mb = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st0XJZQ'});
}
                    this.isReadyToGo();
                }
        });