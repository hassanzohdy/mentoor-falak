_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {c1mIEbypd:'tag-badge',cI2klSc5G:'table-actions',cYyn0BSjk:'admin-table',c7QyWoK7k:'flk-checkbox',cfOoo7NV8:'flk-dropdown-list',c64Oqsz_7:'flk-dropdown-list',cdhR6mxOl:'flk-dropdown-list',cZeusB0B5:'flk-image-input',cpsBiHkPS:'flk-modal'},
                render: function (component) {
                    let cmp8Qi5 = this._lc('cYyn0BSjk', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiKoWc = 'qb3bRbR' + index;
let elggol8 = eo('tr','KbO8gLMTBbVl' + index+iiKoWc);
let elyLfoi = eo('td','m0Nff'+iiKoWc);
text( record.id );
ec('td');
let elzp2ST = eo('td','k9xff'+iiKoWc);
text(record.name);
ec('td');
let elTMGDk = eo('td','2Rfff'+iiKoWc);
text(record.category.name);
ec('td');
let ellrPKv = eo('td','tIgff'+iiKoWc);
let elhPaKB = ev('img','SEXff'+iiKoWc,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let el04779 = eo('td','Yfeff'+iiKoWc);
text(record.cost.format());
ec('td');
let elHTn3d = eo('td','g__ff'+iiKoWc);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iie28P = 'qDp1Xvl' + i;
let elgW1b4 = eo('div','7jrDPCz9VYEA' + i+iiKoWc+iie28P,null,`class`,`m-b-1`);
let cmpM8gt = this._lc('c1mIEbypd', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiKoWc+iie28P});
ec('div');
}
ec('td');
let elySwbm = eo('td','QFEff'+iiKoWc);
text(record.sortOrder);
ec('td');
let eljsa0Q = eo('td','R9Zff'+iiKoWc);
text(record.display);
ec('td');
let elGSYIU = eo('td','K0vff'+iiKoWc);
let cmpLq4L = this._lc('cI2klSc5G', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiKoWc});
ec('td');
ec('tr');
}
}});
let cndHrH0 = component.openModal;
this.setState('stUpgbk', cndHrH0);
if (cndHrH0) { 
let cmpYBZU = this._lc('cpsBiHkPS', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el5qbzr = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el5qbzr.formHandler) {
                    window.cfrmdlr = el5qbzr.formHandler = new FormHandler(el5qbzr, component);
                } else {
                    window.cfrmdlr = el5qbzr.formHandler;
                }
            let elgYp7r = eo('div',null,null,`class`,`form-group`);
let eluMopa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5qbzr.formHandler.addError(`name`, 'required', trans('validation.required'));}return el5qbzr.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eluMopa.value = fval(component.formObject.name);
let cndKzgu = el5qbzr.formHandler.getError(`name`);
this.setState('stUdjD0', cndKzgu);
if (cndKzgu) { 
let el7f5IL = eo('div','VRZf',null,`class`,`alert alert-danger`);
text(el5qbzr.formHandler.getError(`name`));
ec('div');
}ec('div');
let el2WF6m = eo('div',null,null,`class`,`form-group`);
let elFcC6Y = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5qbzr.formHandler.addError(`description`, 'required', trans('validation.required'));}return el5qbzr.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elFcC6Y.value = fval(component.formObject.description);
ec('textarea');
let cndoQJZ = el5qbzr.formHandler.getError(`description`);
this.setState('stjwY0l', cndoQJZ);
if (cndoQJZ) { 
let elbrjXI = eo('div','TzAf',null,`class`,`alert alert-danger`);
text(el5qbzr.formHandler.getError(`description`));
ec('div');
}ec('div');
let elRVXp8 = eo('div',null,null,`class`,`form-group`);
let elKtAa7 = eo('div',null,null,`class`,`row`);
let elvqW75 = eo('div',null,null,`class`,`col-md-4`);
let eltFUq9 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el5qbzr.formHandler.getError(`sortOrder`) })}`);
let eliBBDw = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elquyQY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elquyQY.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let el0fmVZ = eo('div',null,null,`class`,`col-md-4`);
let el4UUBd = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el5qbzr.formHandler.getError(`cost`) })}`);
let elswiyc = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let elAifW2 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elgXUxV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5qbzr.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el5qbzr.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elgXUxV.value = fval(component.formObject.cost);
let cndW4gF = el5qbzr.formHandler.getError(`cost`);
this.setState('stSP27d', cndW4gF);
if (cndW4gF) { 
let eli6OKF = eo('div','9ppf',null,`class`,`alert alert-danger`);
text(el5qbzr.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let el1Sb81 = eo('div',null,null,`class`,`col-md-3`);
let cmpwsaH = this._lc('c7QyWoK7k', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stUpgbk'});
ec('div');
ec('div');
ec('div');
let elNXnDI = eo('div',null,null,`class`,`row`);
let el9Ixkx = eo('div',null,null,`class`,`col-4`);
let cmp_Pvm = this._lc('cfOoo7NV8', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stUpgbk'});
ec('div');
let ela4q84 = eo('div',null,null,`class`,`col-4`);
let cmpnDop = this._lc('c64Oqsz_7', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'stUpgbk'});
ec('div');
let elbER2C = eo('div',null,null,`class`,`col-4`);
let cmpBlZp = this._lc('cdhR6mxOl', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'stUpgbk'});
ec('div');
ec('div');
let elffoUG = eo('div',null,null,`class`,`form-group`);
let eldRmQC = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpAVOk = this._lc('cZeusB0B5', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stUpgbk'});
ec('div');
let ely0nlX = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elo_x2k = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stUpgbk'});
}
                    this.isReadyToGo();
                }
        });