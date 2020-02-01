_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {cnyvIMvRk:'tag-badge',cWoo98tPN:'table-actions',ciLPrGFhG:'admin-table',cy5kF1mLg:'flk-checkbox',c0rkn037F:'flk-dropdown-list',cPoYjVCwu:'flk-dropdown-list',ckNx9IyL7:'flk-dropdown-list',cAnCKV_tJ:'flk-image-input',cTHYeHiEy:'flk-modal'},
                render: function (component) {
                    let cmpkFuW = this._lc('ciLPrGFhG', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iizDLi = 'SepyWo3' + index;
let elPXIAo = eo('tr','P6ZDVeWb1uqZ' + index+iizDLi);
let el3yYie = eo('td','Z7vff'+iizDLi);
text( record.id );
ec('td');
let elBXizK = eo('td','KjSff'+iizDLi);
text(record.name);
ec('td');
let elEA0V1 = eo('td','JhQff'+iizDLi);
text(record.category.name);
ec('td');
let ely9P5b = eo('td','F_Hff'+iizDLi);
let elmAL2M = ev('img','Ah2ff'+iizDLi,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let el22ehv = eo('td','wEHff'+iizDLi);
text(record.cost.format());
ec('td');
let el3d2q1 = eo('td','QQzff'+iizDLi);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiH_5I = 'qu53yQM' + i;
let eldDeBy = eo('div','ckeQF9x1QmNw' + i+iizDLi+iiH_5I,null,`class`,`m-b-1`);
let cmp3AdN = this._lc('cnyvIMvRk', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iizDLi+iiH_5I});
ec('div');
}
ec('td');
let ellRDS2 = eo('td','Gaxff'+iizDLi);
text(record.sortOrder);
ec('td');
let eliaIkh = eo('td','l5Uff'+iizDLi);
text(record.display);
ec('td');
let elKbF0T = eo('td','Biiff'+iizDLi);
let cmpuJzU = this._lc('cWoo98tPN', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iizDLi});
ec('td');
ec('tr');
}
}});
let cndAT1S = component.openModal;
this.setState('stjX1zl', cndAT1S);
if (cndAT1S) { 
let cmpNlF1 = this._lc('cTHYeHiEy', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let eloEJhL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eloEJhL.formHandler) {
                    window.cfrmdlr = eloEJhL.formHandler = new FormHandler(eloEJhL, component);
                } else {
                    window.cfrmdlr = eloEJhL.formHandler;
                }
            let elsIUvc = eo('div',null,null,`class`,`form-group`);
let elAo5bY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eloEJhL.formHandler.addError(`name`, 'required', trans('validation.required'));}return eloEJhL.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elAo5bY.value = fval(component.formObject.name);
let cndHsWU = eloEJhL.formHandler.getError(`name`);
this.setState('stn880B', cndHsWU);
if (cndHsWU) { 
let elpFy8P = eo('div','r5_f',null,`class`,`alert alert-danger`);
text(eloEJhL.formHandler.getError(`name`));
ec('div');
}ec('div');
let elH6eQd = eo('div',null,null,`class`,`form-group`);
let elcJAkW = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eloEJhL.formHandler.addError(`description`, 'required', trans('validation.required'));}return eloEJhL.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elcJAkW.value = fval(component.formObject.description);
ec('textarea');
let cndxdJL = eloEJhL.formHandler.getError(`description`);
this.setState('stXnelf', cndxdJL);
if (cndxdJL) { 
let eleL96d = eo('div','UDWf',null,`class`,`alert alert-danger`);
text(eloEJhL.formHandler.getError(`description`));
ec('div');
}ec('div');
let el88aDH = eo('div',null,null,`class`,`form-group`);
let eloMa4M = eo('div',null,null,`class`,`row`);
let elP07wt = eo('div',null,null,`class`,`col-md-4`);
let el6MNdP = eo('div',null,null,`class`,`form-group`);
el6MNdP.cls = {'group-error': !!eloEJhL.formHandler.getError(`sortOrder`) };

            for (let className in el6MNdP.cls) {
                el6MNdP.classList.toggle(className, el6MNdP.cls[className]);
            }  
            let els0Gu8 = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elcD5sz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elcD5sz.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let ela3jh3 = eo('div',null,null,`class`,`col-md-4`);
let elS_d_0 = eo('div',null,null,`class`,`form-group`);
elS_d_0.cls = {'group-error': !!eloEJhL.formHandler.getError(`cost`) };

            for (let className in elS_d_0.cls) {
                elS_d_0.classList.toggle(className, elS_d_0.cls[className]);
            }  
            let elCgLdm = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let el9oN7x = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elvVZQN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eloEJhL.formHandler.addError(`cost`, 'required', trans('validation.required'));}return eloEJhL.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elvVZQN.value = fval(component.formObject.cost);
let cnd1VzF = eloEJhL.formHandler.getError(`cost`);
this.setState('stwTYAB', cnd1VzF);
if (cnd1VzF) { 
let elQPgB9 = eo('div','YTNf',null,`class`,`alert alert-danger`);
text(eloEJhL.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let eltnQsw = eo('div',null,null,`class`,`col-md-3`);
let cmpIdJD = this._lc('cy5kF1mLg', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stjX1zl'});
ec('div');
ec('div');
ec('div');
let elRs0BA = eo('div',null,null,`class`,`row`);
let elXsOH9 = eo('div',null,null,`class`,`col-4`);
let cmpuL1k = this._lc('c0rkn037F', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stjX1zl'});
ec('div');
let eleL21w = eo('div',null,null,`class`,`col-4`);
let cmpzOOm = this._lc('cPoYjVCwu', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'stjX1zl'});
ec('div');
let elVcoKB = eo('div',null,null,`class`,`col-4`);
let cmpVPpm = this._lc('ckNx9IyL7', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'stjX1zl'});
ec('div');
ec('div');
let elaFMyX = eo('div',null,null,`class`,`form-group`);
let elYq223 = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpYcYo = this._lc('cAnCKV_tJ', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stjX1zl'});
ec('div');
let elB_vSL = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el4AUTa = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stjX1zl'});
}
                    this.isReadyToGo();
                }
        });