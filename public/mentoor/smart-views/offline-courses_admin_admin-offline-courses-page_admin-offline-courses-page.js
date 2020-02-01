_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {cw1TdZiy7:'table-actions',ceINgOI2Y:'admin-table',cVOzT8bMq:'flk-dropdown-list',cCH80Lz3N:'flk-dropdown-list',cFWYPnFSz:'flk-datepicker',cdtoAnpal:'flk-modal'},
                render: function (component) {
                    let cmpzFN4 = this._lc('ceINgOI2Y', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let iiSBvI = '_ZOwwPZ' + index;
let elKkLQ4 = eo('tr','FDPjbzJzts7o' + index+iiSBvI);
let elxtljL = eo('td','Kcpff'+iiSBvI);
text(course.id);
ec('td');
let elM8gNt = eo('td','gtQff'+iiSBvI);
let elUf9oz = ev('img','E3Fff'+iiSBvI,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let elznKAD = eo('td','2Eaff'+iiSBvI);
text(course.name);
ec('td');
let el1Pil8 = eo('td','VsVff'+iiSBvI);
text( Number(course.cost).format() );
ec('td');
let el58_Yz = eo('td','FGMff'+iiSBvI);
text(course.level);
ec('td');
let elXhDty = eo('td','2NWff'+iiSBvI);
text(course.sortOrder);
ec('td');
let elWeLO_ = eo('td','Nlxff'+iiSBvI);
text(course.display);
ec('td');
let el1Qh8i = eo('td','BrMff'+iiSBvI);
let cmpx_gJ = this._lc('cw1TdZiy7', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +iiSBvI});
ec('td');
ec('tr');
}
}});
let cndmvG3 = component.openModal;
this.setState('stVQu8C', cndmvG3);
if (cndmvG3) { 
let cmpuOZk = this._lc('cdtoAnpal', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elTUsTm = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elTUsTm.formHandler) {
                    window.cfrmdlr = elTUsTm.formHandler = new FormHandler(elTUsTm, component);
                } else {
                    window.cfrmdlr = elTUsTm.formHandler;
                }
            let el2FZ03 = eo('div',null,null,`class`,`row`);
let elg1GbI = eo('div',null,null,`class`,`col`);
let el4jUMu = eo('div',null,null,`class`,`form-group`);
let elOsdtl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`name`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elOsdtl.value = fval(component.formObject.name);
let cnd_sBI = elTUsTm.formHandler.getError(`name`);
this.setState('stiLtwH', cnd_sBI);
if (cnd_sBI) { 
let elMVLgJ = eo('div','TxDf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let elQBs63 = eo('div',null,null,`class`,`col`);
let cmpZ1Yd = this._lc('cVOzT8bMq', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'stVQu8C'});
ec('div');
ec('div');
let eloYGTc = eo('div',null,null,`class`,`form-group`);
let elKAgf6 = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmpPBA4 = this._lc('cCH80Lz3N', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'stVQu8C'});
ec('div');
let elyFHZW = eo('div',null,null,`class`,`form-group`);
let elHpsZ7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`address`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elHpsZ7.value = fval(component.formObject.address);
let cnd0J0q = elTUsTm.formHandler.getError(`address`);
this.setState('stmbb0Y', cnd0J0q);
if (cnd0J0q) { 
let elvVmBK = eo('div','EHTf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`address`));
ec('div');
}ec('div');
let elMOjzL = eo('div',null,null,`class`,`form-group`);
let elIc9Vn = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`description`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elIc9Vn.value = fval(component.formObject.description);
ec('textarea');
let cndyiD0 = elTUsTm.formHandler.getError(`description`);
this.setState('stDE5qM', cndyiD0);
if (cndyiD0) { 
let el35zMX = eo('div','tMMf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`description`));
ec('div');
}ec('div');
let elGhfYI = eo('div',null,null,`class`,`form-group`);
let elV_tRm = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`content`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elV_tRm.value = fval(component.formObject.content);
ec('textarea');
let cndHAhR = elTUsTm.formHandler.getError(`content`);
this.setState('styMNIF', cndHAhR);
if (cndHAhR) { 
let elMoEZo = eo('div','kAUf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`content`));
ec('div');
}ec('div');
let elEzU_Z = eo('div',null,null,`class`,`form-group`);
let elEeyVZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
elEeyVZ.value = fval(component.formObject.requirements);
ec('textarea');
let cnd7Ijv = elTUsTm.formHandler.getError(`requirements`);
this.setState('stHf1AS', cnd7Ijv);
if (cnd7Ijv) { 
let elDZsIq = eo('div','Zq0f',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let elKThJI = eo('div',null,null,`class`,`form-group`);
let eliO9Lv = eo('div',null,null,`class`,`row`);
let el6aF2l = eo('div',null,null,`class`,`col-md-4`);
let elSB47u = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elSB47u.value = fval(component.formObject.sortOrder);
ec('div');
let elhIbEL = eo('div',null,null,`class`,`col-md-4`);
let el6yOq6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
el6yOq6.value = fval(component.formObject.cost);
let cndaa7H = elTUsTm.formHandler.getError(`cost`);
this.setState('stpJ9bb', cndaa7H);
if (cndaa7H) { 
let el6jDXX = eo('div','sMKf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elEwD6G = eo('div',null,null,`class`,`col-md-4`);
let eljXqgl = eo('div',null,null,`class`,`form-check m-t-1`);
let elZjSra = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let el7Imt0 = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elEJ5PB = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let elLitmr = eo('div',null,null,`class`,`row`);
let elk1tPz = eo('div',null,null,`class`,`col-4`);
let cmpdwrx = this._lc('cFWYPnFSz', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'stVQu8C'});
ec('div');
let ellXy_t = eo('div',null,null,`class`,`col-4`);
let ela1iCH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
ela1iCH.value = fval(component.formObject.time.sessionsPerWeek);
let cndAauG = elTUsTm.formHandler.getError(`time.sessionsPerWeek`);
this.setState('stxgK8j', cndAauG);
if (cndAauG) { 
let elihDjR = eo('div','HLVf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let elW2nQF = eo('div',null,null,`class`,`col-2`);
let elv0SuG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elv0SuG.value = fval(component.formObject.time.length);
let cndOuEJ = elTUsTm.formHandler.getError(`time.length`);
this.setState('stRd0vv', cndOuEJ);
if (cndOuEJ) { 
let ellPMUX = eo('div','3Tff',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let el4IDuj = eo('div',null,null,`class`,`col-2`);
let elS6Mbl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
elS6Mbl.value = fval(component.formObject.time.duration);
let cndY1Yd = elTUsTm.formHandler.getError(`time.duration`);
this.setState('stX3JsX', cndY1Yd);
if (cndY1Yd) { 
let elM1cta = eo('div','gjlf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let iis8AK = '5tXHNo6' + day;
let elBV6ra = eo('div','cExCXGUNNf0Q' + day+iis8AK,null,`class`,`row`);
let elnutbt = eo('label','5hXff'+iis8AK,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let el8avDW = eo('div','xbDff'+iis8AK,null,`class`,`col-6`);
let eli0MrO = ev('input','8Toff'+iis8AK,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
eli0MrO.value = fval(component.formObject.time.days[day].from);
ec('div');
let elNmvzU = eo('div','cpGff'+iis8AK,null,`class`,`col-6`);
let elwy46A = ev('input','G67ff'+iis8AK,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
elwy46A.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let el6sStE = eo('div',null,null,`class`,`form-group`);
let el5RcI3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
el5RcI3.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cndhBZh = elTUsTm.formHandler.getError(`whenTo.subscribe`);
this.setState('stuGxSj', cndhBZh);
if (cndhBZh) { 
let el1s5CO = eo('div','APFf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let elWJazB = eo('div',null,null,`class`,`form-group`);
let elraHkn = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTUsTm.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return elTUsTm.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
elraHkn.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cndAjZx = elTUsTm.formHandler.getError(`whenTo.notSubscribe`);
this.setState('staKhvt', cndAjZx);
if (cndAjZx) { 
let elHz6c_ = eo('div','cVQf',null,`class`,`alert alert-danger`);
text(elTUsTm.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let elRSKOq = eo('div',null,null,`class`,`form-group`);
let el_Iutt = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let elaCB5B = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let elNqlEg = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elvqrN5 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stVQu8C'});
}
                    this.isReadyToGo();
                }
        });