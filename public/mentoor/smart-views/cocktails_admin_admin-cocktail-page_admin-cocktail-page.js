_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {c8MtxXknl:'tag-badge',cgJ4brPD6:'table-actions',cb4pJCEdH:'admin-table',c47aQLGSc:'flk-checkbox',cPqCVARXz:'flk-dropdown-list',cIa4mWfk7:'flk-dropdown-list',c8klYJdKW:'flk-dropdown-list',cfuuGrND1:'flk-image-input',c5sfRawwo:'flk-modal'},
                render: function (component) {
                    let cmpEHqW = this._lc('cb4pJCEdH', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iicD_h = '2WA4F5n' + index;
let elnqHFT = eo('tr','OKp8PmdNn3FL' + index+iicD_h);
let elWwlrN = eo('td','q9kff'+iicD_h);
text( record.id );
ec('td');
let el5kW48 = eo('td','xAuff'+iicD_h);
text(record.name);
ec('td');
let elJp_rJ = eo('td','dPYff'+iicD_h);
text(record.category.name);
ec('td');
let elYV0vQ = eo('td','5p9ff'+iicD_h);
let elaeC4u = ev('img','CCsff'+iicD_h,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elAqgGy = eo('td','ekvff'+iicD_h);
text(record.cost.format());
ec('td');
let elVGl1f = eo('td','OwCff'+iicD_h);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiLsLs = 'p3kvlOV' + i;
let elgTB2L = eo('div','a05ERAXFpIuI' + i+iicD_h+iiLsLs,null,`class`,`m-b-1`);
let cmpBa_M = this._lc('c8MtxXknl', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iicD_h+iiLsLs});
ec('div');
}
ec('td');
let el2JrPl = eo('td','kB1ff'+iicD_h);
text(record.sortOrder);
ec('td');
let elV_hk8 = eo('td','Kduff'+iicD_h);
text(record.display);
ec('td');
let elFRAMB = eo('td','n4Jff'+iicD_h);
let cmp2gb_ = this._lc('cgJ4brPD6', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iicD_h});
ec('td');
ec('tr');
}
}});
let cnd0bBx = component.openModal;
this.setState('stmlSV5', cnd0bBx);
if (cnd0bBx) { 
let cmp_Rar = this._lc('c5sfRawwo', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elSwVkc = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elSwVkc.formHandler) {
                    window.cfrmdlr = elSwVkc.formHandler = new FormHandler(elSwVkc, component);
                } else {
                    window.cfrmdlr = elSwVkc.formHandler;
                }
            let elTzHe8 = eo('div',null,null,`class`,`form-group`);
let elNdOQf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwVkc.formHandler.addError(`name`, 'required', trans('validation.required'));}return elSwVkc.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elNdOQf.value = fval(component.formObject.name);
let cndQt7u = elSwVkc.formHandler.getError(`name`);
this.setState('stlRkV9', cndQt7u);
if (cndQt7u) { 
let elKLEak = eo('div','wHcf',null,`class`,`alert alert-danger`);
text(elSwVkc.formHandler.getError(`name`));
ec('div');
}ec('div');
let el9xR6L = eo('div',null,null,`class`,`form-group`);
let els3qc_ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwVkc.formHandler.addError(`description`, 'required', trans('validation.required'));}return elSwVkc.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
els3qc_.value = fval(component.formObject.description);
ec('textarea');
let cnd3Te2 = elSwVkc.formHandler.getError(`description`);
this.setState('stJu9ab', cnd3Te2);
if (cnd3Te2) { 
let elOL_Oe = eo('div','8gdf',null,`class`,`alert alert-danger`);
text(elSwVkc.formHandler.getError(`description`));
ec('div');
}ec('div');
let elLhtCx = eo('div',null,null,`class`,`form-group`);
let elxTsDX = eo('div',null,null,`class`,`row`);
let elVmKGT = eo('div',null,null,`class`,`col-md-4`);
let elhtdQq = eo('div',null,null,`class`,`form-group`);
elhtdQq.cls = {'group-error': !!elSwVkc.formHandler.getError(`sortOrder`) };

            for (let className in elhtdQq.cls) {
                elhtdQq.classList.toggle(className, elhtdQq.cls[className]);
            }  
            let elT0Cni = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let el6zLDX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el6zLDX.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elxwKg1 = eo('div',null,null,`class`,`col-md-4`);
let eltS5x5 = eo('div',null,null,`class`,`form-group`);
eltS5x5.cls = {'group-error': !!elSwVkc.formHandler.getError(`cost`) };

            for (let className in eltS5x5.cls) {
                eltS5x5.classList.toggle(className, eltS5x5.cls[className]);
            }  
            let elgL8Km = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let el5BYVD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWPJ9j = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwVkc.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elSwVkc.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elWPJ9j.value = fval(component.formObject.cost);
let cndWfi8 = elSwVkc.formHandler.getError(`cost`);
this.setState('stiiAFf', cndWfi8);
if (cndWfi8) { 
let elNySUp = eo('div','S4Mf',null,`class`,`alert alert-danger`);
text(elSwVkc.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let el9p5Zx = eo('div',null,null,`class`,`col-md-3`);
let cmp4jrA = this._lc('c47aQLGSc', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stmlSV5'});
ec('div');
ec('div');
ec('div');
let elM47Wo = eo('div',null,null,`class`,`row`);
let elk4Iah = eo('div',null,null,`class`,`col-4`);
let cmpaMgb = this._lc('cPqCVARXz', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stmlSV5'});
ec('div');
let eleJF8V = eo('div',null,null,`class`,`col-4`);
let cmpJ10R = this._lc('cIa4mWfk7', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'stmlSV5'});
ec('div');
let elJFHOr = eo('div',null,null,`class`,`col-4`);
let cmpvQfJ = this._lc('c8klYJdKW', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'stmlSV5'});
ec('div');
ec('div');
let el8XVOV = eo('div',null,null,`class`,`form-group`);
let elF86eG = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpYylN = this._lc('cfuuGrND1', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stmlSV5'});
ec('div');
let elvMsDY = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elIraU_ = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stmlSV5'});
}
                    this.isReadyToGo();
                }
        });