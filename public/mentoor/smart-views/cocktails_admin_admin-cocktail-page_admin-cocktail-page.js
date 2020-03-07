_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {cGNKD0DJb:'tag-badge',cUTejUd72:'table-actions',ctOU9xMm6:'admin-table',ccPWqEF2W:'flk-checkbox',cr_KdkQwX:'flk-dropdown-list',cO9EcFKmy:'flk-dropdown-list',ccLeHh2nq:'flk-dropdown-list',cEeGgqqu7:'flk-image-input',cOeezZVfZ:'flk-modal'},
                render: function (component) {
                    let cmpj998 = this._lc('ctOU9xMm6', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiAbPE = 'kviKwrq' + index;
let eldynpz = eo('tr','haKqYRIM8f8X' + index+iiAbPE);
let elcsEGR = eo('td','WHEff'+iiAbPE);
text( record.id );
ec('td');
let elb9zSD = eo('td','6Xmff'+iiAbPE);
text(record.name);
ec('td');
let elevao0 = eo('td','766ff'+iiAbPE);
text(record.category.name);
ec('td');
let elWyvYz = eo('td','w9sff'+iiAbPE);
let elY1sEa = ev('img','6TMff'+iiAbPE,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let el2FN6B = eo('td','Plyff'+iiAbPE);
text(record.cost.format());
ec('td');
let elejHUU = eo('td','el4ff'+iiAbPE);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iisoYv = 'u_avhXp' + i;
let elQ_db4 = eo('div','zAP8Ct2vdUdX' + i+iiAbPE+iisoYv,null,`class`,`m-b-1`);
let cmpEQvU = this._lc('cGNKD0DJb', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiAbPE+iisoYv});
ec('div');
}
ec('td');
let elgPZ9c = eo('td','Ug2ff'+iiAbPE);
text(record.sortOrder);
ec('td');
let elQoSfb = eo('td','mWNff'+iiAbPE);
text(record.display);
ec('td');
let elcLEVV = eo('td','vWhff'+iiAbPE);
let cmpD67A = this._lc('cUTejUd72', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiAbPE});
ec('td');
ec('tr');
}
}});
let cnd6xlF = component.openModal;
this.setState('st1p2Fo', cnd6xlF);
if (cnd6xlF) { 
let cmpnisZ = this._lc('cOeezZVfZ', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elOSQxS = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elOSQxS.formHandler) {
                    window.cfrmdlr = elOSQxS.formHandler = new FormHandler(elOSQxS, component);
                } else {
                    window.cfrmdlr = elOSQxS.formHandler;
                }
            let el96ddM = eo('div',null,null,`class`,`form-group`);
let elliJfO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOSQxS.formHandler.addError(`name`, 'required', trans('validation.required'));}return elOSQxS.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elliJfO.value = fval(component.formObject.name);
let cndkarM = elOSQxS.formHandler.getError(`name`);
this.setState('stL3jhL', cndkarM);
if (cndkarM) { 
let elYlGcV = eo('div','ZiQf',null,`class`,`alert alert-danger`);
text(elOSQxS.formHandler.getError(`name`));
ec('div');
}ec('div');
let elRbbn7 = eo('div',null,null,`class`,`form-group`);
let elkC6LX = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOSQxS.formHandler.addError(`description`, 'required', trans('validation.required'));}return elOSQxS.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elkC6LX.value = fval(component.formObject.description);
ec('textarea');
let cndPM7H = elOSQxS.formHandler.getError(`description`);
this.setState('stB8sjm', cndPM7H);
if (cndPM7H) { 
let elE_DJV = eo('div','j4Cf',null,`class`,`alert alert-danger`);
text(elOSQxS.formHandler.getError(`description`));
ec('div');
}ec('div');
let el9VQJn = eo('div',null,null,`class`,`form-group`);
let elpZe_i = eo('div',null,null,`class`,`row`);
let elj9c9K = eo('div',null,null,`class`,`col-md-4`);
let el6emI9 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOSQxS.formHandler.getError(`sortOrder`) })}`);
let elk228O = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let eltjmfs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
eltjmfs.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elnSrCU = eo('div',null,null,`class`,`col-md-4`);
let elOtlvw = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOSQxS.formHandler.getError(`cost`) })}`);
let elnacqE = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let elcE1yL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaba4O = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOSQxS.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elOSQxS.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elaba4O.value = fval(component.formObject.cost);
let cndTSGk = elOSQxS.formHandler.getError(`cost`);
this.setState('st_M1Ko', cndTSGk);
if (cndTSGk) { 
let elXDhuX = eo('div','y2kf',null,`class`,`alert alert-danger`);
text(elOSQxS.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let els6uIP = eo('div',null,null,`class`,`col-md-3`);
let cmpJJfI = this._lc('ccPWqEF2W', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'st1p2Fo'});
ec('div');
ec('div');
ec('div');
let eljIbxi = eo('div',null,null,`class`,`row`);
let el06vFt = eo('div',null,null,`class`,`col-4`);
let cmp_Fcr = this._lc('cr_KdkQwX', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'st1p2Fo'});
ec('div');
let elfyqT2 = eo('div',null,null,`class`,`col-4`);
let cmpRvT3 = this._lc('cO9EcFKmy', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'st1p2Fo'});
ec('div');
let elkrUPn = eo('div',null,null,`class`,`col-4`);
let cmp1WeI = this._lc('ccLeHh2nq', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'st1p2Fo'});
ec('div');
ec('div');
let elUuJJT = eo('div',null,null,`class`,`form-group`);
let elSnEL7 = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpRpNn = this._lc('cEeGgqqu7', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'st1p2Fo'});
ec('div');
let elllVfe = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elkFC9P = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st1p2Fo'});
}
                    this.isReadyToGo();
                }
        });