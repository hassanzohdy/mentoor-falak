_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {cqpvDpF7M:'tag-badge',cq4YnyIQz:'table-actions',c1ZSptSnI:'admin-table',c9fyhZrk5:'flk-checkbox',cW5GnE5lH:'flk-dropdown-list',cFUwdIEtD:'flk-dropdown-list',cjrYchubD:'flk-dropdown-list',cS6q_oI_y:'flk-image-input',cjwjAKIje:'flk-modal'},
                render: function (component) {
                    let cmpdP6j = this._lc('c1ZSptSnI', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiVuiU = 'lNBwHOL' + index;
let elJQH1Y = eo('tr','fQmblu_43fwt' + index+iiVuiU);
let elUXlkw = eo('td','Oloff'+iiVuiU);
text( record.id );
ec('td');
let elMXJKR = eo('td','0sPff'+iiVuiU);
text(record.name);
ec('td');
let elfbaK4 = eo('td','iwOff'+iiVuiU);
text(record.category.name);
ec('td');
let elzDL7q = eo('td','j7Kff'+iiVuiU);
let eltjP8k = ev('img','Lk1ff'+iiVuiU,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let elfTLKJ = eo('td','sGwff'+iiVuiU);
text(record.cost.format());
ec('td');
let elcf9Ge = eo('td','06Wff'+iiVuiU);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let ii1rur = 'RJKr8W4' + i;
let el2P7W5 = eo('div','REljaTyPTXZx' + i+iiVuiU+ii1rur,null,`class`,`m-b-1`);
let cmp1c5R = this._lc('cqpvDpF7M', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiVuiU+ii1rur});
ec('div');
}
ec('td');
let elExA80 = eo('td','pZYff'+iiVuiU);
text(record.sortOrder);
ec('td');
let elDwkXg = eo('td','W7eff'+iiVuiU);
text(record.display);
ec('td');
let ellMRBg = eo('td','TiNff'+iiVuiU);
let cmpF9fX = this._lc('cq4YnyIQz', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiVuiU});
ec('td');
ec('tr');
}
}});
let cnd9cxU = component.openModal;
this.setState('sthilp9', cnd9cxU);
if (cnd9cxU) { 
let cmptqc2 = this._lc('cjwjAKIje', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elhEFw9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elhEFw9.formHandler) {
                    window.cfrmdlr = elhEFw9.formHandler = new FormHandler(elhEFw9, component);
                } else {
                    window.cfrmdlr = elhEFw9.formHandler;
                }
            let elhkEwd = eo('div',null,null,`class`,`form-group`);
let elx5DJz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhEFw9.formHandler.addError(`name`, 'required', trans('validation.required'));}return elhEFw9.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elx5DJz.value = fval(component.formObject.name);
let cndY3qU = elhEFw9.formHandler.getError(`name`);
this.setState('stxP4av', cndY3qU);
if (cndY3qU) { 
let elucbuJ = eo('div','lnEf',null,`class`,`alert alert-danger`);
text(elhEFw9.formHandler.getError(`name`));
ec('div');
}ec('div');
let elMrrDQ = eo('div',null,null,`class`,`form-group`);
let ele518S = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhEFw9.formHandler.addError(`description`, 'required', trans('validation.required'));}return elhEFw9.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
ele518S.value = fval(component.formObject.description);
ec('textarea');
let cndtKjC = elhEFw9.formHandler.getError(`description`);
this.setState('stIiAjr', cndtKjC);
if (cndtKjC) { 
let eljvJlW = eo('div','oySf',null,`class`,`alert alert-danger`);
text(elhEFw9.formHandler.getError(`description`));
ec('div');
}ec('div');
let elQXK5B = eo('div',null,null,`class`,`form-group`);
let elAUkUp = eo('div',null,null,`class`,`row`);
let elXb3VV = eo('div',null,null,`class`,`col-md-4`);
let el2BLzW = eo('div',null,null,`class`,`form-group`);
el2BLzW.cls = {'group-error': !!elhEFw9.formHandler.getError(`sortOrder`) };

            for (let className in el2BLzW.cls) {
                el2BLzW.classList.toggle(className, el2BLzW.cls[className]);
            }  
            let elT5im1 = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elZKZGN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elZKZGN.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elLcbT3 = eo('div',null,null,`class`,`col-md-4`);
let elOZyKJ = eo('div',null,null,`class`,`form-group`);
elOZyKJ.cls = {'group-error': !!elhEFw9.formHandler.getError(`cost`) };

            for (let className in elOZyKJ.cls) {
                elOZyKJ.classList.toggle(className, elOZyKJ.cls[className]);
            }  
            let elYDqn7 = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let el7uLRB = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el7HCbf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhEFw9.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elhEFw9.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
el7HCbf.value = fval(component.formObject.cost);
let cndzZcQ = elhEFw9.formHandler.getError(`cost`);
this.setState('stn_biC', cndzZcQ);
if (cndzZcQ) { 
let elQPgha = eo('div','oMLf',null,`class`,`alert alert-danger`);
text(elhEFw9.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let el5uaNk = eo('div',null,null,`class`,`col-md-3`);
let cmpfCql = this._lc('c9fyhZrk5', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'sthilp9'});
ec('div');
ec('div');
ec('div');
let ely62Ua = eo('div',null,null,`class`,`row`);
let elcZeuF = eo('div',null,null,`class`,`col-4`);
let cmpR71Y = this._lc('cW5GnE5lH', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'sthilp9'});
ec('div');
let elDTkHZ = eo('div',null,null,`class`,`col-4`);
let cmpIHs0 = this._lc('cFUwdIEtD', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'sthilp9'});
ec('div');
let el4M1TG = eo('div',null,null,`class`,`col-4`);
let cmpjw9i = this._lc('cjrYchubD', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'sthilp9'});
ec('div');
ec('div');
let elmeUOb = eo('div',null,null,`class`,`form-group`);
let elTrnXA = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmppS8a = this._lc('cS6q_oI_y', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'sthilp9'});
ec('div');
let elZAzEI = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el6HJIO = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'sthilp9'});
}
                    this.isReadyToGo();
                }
        });