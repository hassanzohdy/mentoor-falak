_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {cFBlyCe5d:'tag-badge',cm5g_Z2DK:'table-actions',ckZT1AsD7:'admin-table',c2vtFr0QS:'flk-checkbox',cJr5cDwpS:'flk-dropdown-list',c_y2rZ3e_:'flk-dropdown-list',cuwEdfrP4:'flk-dropdown-list',cdP7I9Jp1:'flk-image-input',cabCjJSPB:'flk-modal'},
                render: function (component) {
                    let cmppgKo = this._lc('ckZT1AsD7', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii4U6B = 'GI688Cl' + index;
let elaplTI = eo('tr','7E9g2cRs8F_D' + index+ii4U6B);
let elC5bG8 = eo('td','gMTff'+ii4U6B);
text( record.id );
ec('td');
let elUI8Rk = eo('td','rfBff'+ii4U6B);
text(record.name);
ec('td');
let el5Em2e = eo('td','y8Sff'+ii4U6B);
text(record.category.name);
ec('td');
let elosHMU = eo('td','Dcmff'+ii4U6B);
let eld31X3 = ev('img','8ynff'+ii4U6B,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elNDtfJ = eo('td','rRNff'+ii4U6B);
text(record.cost.format());
ec('td');
let el1SIk_ = eo('td','y0aff'+ii4U6B);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiwUdV = 'oWCHDzu' + i;
let elDB29X = eo('div','1AMPwUBKZSwZ' + i+ii4U6B+iiwUdV,null,`class`,`m-b-1`);
let cmpyHxl = this._lc('cFBlyCe5d', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +ii4U6B+iiwUdV});
ec('div');
}
ec('td');
let el1iDtO = eo('td','wcNff'+ii4U6B);
text(record.sortOrder);
ec('td');
let elpkwRU = eo('td','z7Rff'+ii4U6B);
text(record.display);
ec('td');
let elyNSQX = eo('td','Tduff'+ii4U6B);
let cmpEk6a = this._lc('cm5g_Z2DK', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii4U6B});
ec('td');
ec('tr');
}
}});
let cndgIJs = component.openModal;
this.setState('stoXHTl', cndgIJs);
if (cndgIJs) { 
let cmpfcSg = this._lc('cabCjJSPB', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elLSPaH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elLSPaH.formHandler) {
                    window.cfrmdlr = elLSPaH.formHandler = new FormHandler(elLSPaH, component);
                } else {
                    window.cfrmdlr = elLSPaH.formHandler;
                }
            let elkrhxL = eo('div',null,null,`class`,`form-group`);
let elUDafU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elLSPaH.formHandler.addError(`name`, 'required', trans('validation.required'));}return elLSPaH.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elUDafU.value = fval(component.formObject.name);
let cndznkj = elLSPaH.formHandler.getError(`name`);
this.setState('stdciwa', cndznkj);
if (cndznkj) { 
let elbWBds = eo('div','YYyf',null,`class`,`alert alert-danger`);
text(elLSPaH.formHandler.getError(`name`));
ec('div');
}ec('div');
let elMRIxp = eo('div',null,null,`class`,`form-group`);
let elOCFFZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elLSPaH.formHandler.addError(`description`, 'required', trans('validation.required'));}return elLSPaH.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elOCFFZ.value = fval(component.formObject.description);
ec('textarea');
let cndhiil = elLSPaH.formHandler.getError(`description`);
this.setState('stv94L2', cndhiil);
if (cndhiil) { 
let elA8KXn = eo('div','JUrf',null,`class`,`alert alert-danger`);
text(elLSPaH.formHandler.getError(`description`));
ec('div');
}ec('div');
let elHfPTQ = eo('div',null,null,`class`,`form-group`);
let elDRuFD = eo('div',null,null,`class`,`row`);
let elb_HVL = eo('div',null,null,`class`,`col-md-4`);
let elPwvLI = eo('div',null,null,`class`,`form-group`);
elPwvLI.cls = {'group-error': !!elLSPaH.formHandler.getError(`sortOrder`) };

            for (let className in elPwvLI.cls) {
                elPwvLI.classList.toggle(className, elPwvLI.cls[className]);
            }  
            let ellA24b = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elmCEud = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elmCEud.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elCdJj6 = eo('div',null,null,`class`,`col-md-4`);
let elY2oOk = eo('div',null,null,`class`,`form-group`);
elY2oOk.cls = {'group-error': !!elLSPaH.formHandler.getError(`cost`) };

            for (let className in elY2oOk.cls) {
                elY2oOk.classList.toggle(className, elY2oOk.cls[className]);
            }  
            let el_yc8k = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let elw5ZyT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elLWybe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elLSPaH.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elLSPaH.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elLWybe.value = fval(component.formObject.cost);
let cndpc08 = elLSPaH.formHandler.getError(`cost`);
this.setState('stv0yZ9', cndpc08);
if (cndpc08) { 
let elXIuTL = eo('div','WR0f',null,`class`,`alert alert-danger`);
text(elLSPaH.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elH3xEq = eo('div',null,null,`class`,`col-md-3`);
let cmp5dDs = this._lc('c2vtFr0QS', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stoXHTl'});
ec('div');
ec('div');
ec('div');
let el9lutg = eo('div',null,null,`class`,`row`);
let elwPbA_ = eo('div',null,null,`class`,`col-4`);
let cmp389l = this._lc('cJr5cDwpS', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'stoXHTl'});
ec('div');
let elt0TJq = eo('div',null,null,`class`,`col-4`);
let cmpkyBn = this._lc('c_y2rZ3e_', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'stoXHTl'});
ec('div');
let elXsKW9 = eo('div',null,null,`class`,`col-4`);
let cmpfdig = this._lc('cuwEdfrP4', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'stoXHTl'});
ec('div');
ec('div');
let elnvITs = eo('div',null,null,`class`,`form-group`);
let el4jbkY = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpy641 = this._lc('cdP7I9Jp1', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'stoXHTl'});
ec('div');
let elrIZWM = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elxulpE = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stoXHTl'});
}
                    this.isReadyToGo();
                }
        });