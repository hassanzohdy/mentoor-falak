_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {cFIAsD6VK:'table-actions',cVkg5rvAv:'admin-table',czV6klEDP:'flk-dropdown-list',cDvQcI7NY:'flk-dropdown-list',c2tUux6XA:'flk-datepicker',crLExEfgg:'flk-modal'},
                render: function (component) {
                    let cmpnyyr = this._lc('cVkg5rvAv', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let iiwBAL = 'AjhmEaE' + index;
let elra_9E = eo('tr','cTaTI8Cd32Wr' + index+iiwBAL);
let elXRYOQ = eo('td','D97ff'+iiwBAL);
text(course.id);
ec('td');
let elBJtHO = eo('td','5dkff'+iiwBAL);
let elNGNWW = ev('img','BOXff'+iiwBAL,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let elbVqCS = eo('td','3ZQff'+iiwBAL);
text(course.name);
ec('td');
let elKZC8b = eo('td','1E7ff'+iiwBAL);
text( Number(course.cost).format() );
ec('td');
let elnjQhu = eo('td','JZJff'+iiwBAL);
text(course.level);
ec('td');
let elyaUEO = eo('td','BpFff'+iiwBAL);
text(course.sortOrder);
ec('td');
let elV7_A3 = eo('td','f8Nff'+iiwBAL);
text(course.display);
ec('td');
let el5IixX = eo('td','RnNff'+iiwBAL);
let cmpr2Z8 = this._lc('cFIAsD6VK', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +iiwBAL});
ec('td');
ec('tr');
}
}});
let cndRwBn = component.openModal;
this.setState('stLaORT', cndRwBn);
if (cndRwBn) { 
let cmphN_a = this._lc('crLExEfgg', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elDfNLk = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elDfNLk.formHandler) {
                    window.cfrmdlr = elDfNLk.formHandler = new FormHandler(elDfNLk, component);
                } else {
                    window.cfrmdlr = elDfNLk.formHandler;
                }
            let elezWfX = eo('div',null,null,`class`,`row`);
let elU3sa9 = eo('div',null,null,`class`,`col`);
let el9FgQT = eo('div',null,null,`class`,`form-group`);
let el5VdgJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`name`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el5VdgJ.value = fval(component.formObject.name);
let cndn0Zn = elDfNLk.formHandler.getError(`name`);
this.setState('sthv8FU', cndn0Zn);
if (cndn0Zn) { 
let elaJhBB = eo('div','lRNf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let elOdIPa = eo('div',null,null,`class`,`col`);
let cmpDusV = this._lc('czV6klEDP', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'stLaORT'});
ec('div');
ec('div');
let elhTuVR = eo('div',null,null,`class`,`form-group`);
let elC2yZ4 = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmpNzuQ = this._lc('cDvQcI7NY', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'stLaORT'});
ec('div');
let eleJcvW = eo('div',null,null,`class`,`form-group`);
let el8T3b9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`address`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
el8T3b9.value = fval(component.formObject.address);
let cndQ95B = elDfNLk.formHandler.getError(`address`);
this.setState('stU8HTQ', cndQ95B);
if (cndQ95B) { 
let el0WI2x = eo('div','AOnf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`address`));
ec('div');
}ec('div');
let elijI8Y = eo('div',null,null,`class`,`form-group`);
let elUxQMO = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`description`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elUxQMO.value = fval(component.formObject.description);
ec('textarea');
let cndMW9D = elDfNLk.formHandler.getError(`description`);
this.setState('stU5rHi', cndMW9D);
if (cndMW9D) { 
let eluoYOI = eo('div','hMpf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`description`));
ec('div');
}ec('div');
let elwhU3r = eo('div',null,null,`class`,`form-group`);
let elROEEQ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`content`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elROEEQ.value = fval(component.formObject.content);
ec('textarea');
let cndmRzN = elDfNLk.formHandler.getError(`content`);
this.setState('stycYYW', cndmRzN);
if (cndmRzN) { 
let elFDYZN = eo('div','AxCf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`content`));
ec('div');
}ec('div');
let ellDP9n = eo('div',null,null,`class`,`form-group`);
let el53bVz = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
el53bVz.value = fval(component.formObject.requirements);
ec('textarea');
let cndAi3a = elDfNLk.formHandler.getError(`requirements`);
this.setState('stR2y1R', cndAi3a);
if (cndAi3a) { 
let ell3xNU = eo('div','dKCf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let eliRqwI = eo('div',null,null,`class`,`form-group`);
let eluK6ho = eo('div',null,null,`class`,`row`);
let el0FnN1 = eo('div',null,null,`class`,`col-md-4`);
let elnYC1R = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elnYC1R.value = fval(component.formObject.sortOrder);
ec('div');
let elRDk_S = eo('div',null,null,`class`,`col-md-4`);
let elMWEM5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elMWEM5.value = fval(component.formObject.cost);
let cndPsix = elDfNLk.formHandler.getError(`cost`);
this.setState('st3pkSd', cndPsix);
if (cndPsix) { 
let elwO1nV = eo('div','kJJf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elZsuag = eo('div',null,null,`class`,`col-md-4`);
let elmqXq_ = eo('div',null,null,`class`,`form-check m-t-1`);
let elI8QaX = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let el2Yv0I = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elW6Zj0 = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let eldhyQx = eo('div',null,null,`class`,`row`);
let elBgr__ = eo('div',null,null,`class`,`col-4`);
let cmpZ4TO = this._lc('c2tUux6XA', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'stLaORT'});
ec('div');
let elOrPsd = eo('div',null,null,`class`,`col-4`);
let el7dXpo = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
el7dXpo.value = fval(component.formObject.time.sessionsPerWeek);
let cndYqEX = elDfNLk.formHandler.getError(`time.sessionsPerWeek`);
this.setState('stLswio', cndYqEX);
if (cndYqEX) { 
let elvHuE4 = eo('div','65Xf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let elOsBXc = eo('div',null,null,`class`,`col-2`);
let elzPM4i = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elzPM4i.value = fval(component.formObject.time.length);
let cnd7b_Q = elDfNLk.formHandler.getError(`time.length`);
this.setState('st1l1h8', cnd7b_Q);
if (cnd7b_Q) { 
let elZnxgO = eo('div','n0yf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let elcgc0S = eo('div',null,null,`class`,`col-2`);
let elPacWc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
elPacWc.value = fval(component.formObject.time.duration);
let cndP4EQ = elDfNLk.formHandler.getError(`time.duration`);
this.setState('stZv3e6', cndP4EQ);
if (cndP4EQ) { 
let el9D3sS = eo('div','V3Hf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let iiD5hu = 'D5VD2dy' + day;
let elYkrK_ = eo('div','EMmeBZVEHIUR' + day+iiD5hu,null,`class`,`row`);
let elQLP9R = eo('label','mlzff'+iiD5hu,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let el5JHs7 = eo('div','8nuff'+iiD5hu,null,`class`,`col-6`);
let elFqAMz = ev('input','nveff'+iiD5hu,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
elFqAMz.value = fval(component.formObject.time.days[day].from);
ec('div');
let el_jWo_ = eo('div','UqIff'+iiD5hu,null,`class`,`col-6`);
let elRIXIV = ev('input','iwFff'+iiD5hu,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
elRIXIV.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let elnpAn_ = eo('div',null,null,`class`,`form-group`);
let eldsPCH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
eldsPCH.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cndb5jw = elDfNLk.formHandler.getError(`whenTo.subscribe`);
this.setState('stVir6K', cndb5jw);
if (cndb5jw) { 
let elPg4vM = eo('div','BLHf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let elJyDJb = eo('div',null,null,`class`,`form-group`);
let el1vcrU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDfNLk.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return elDfNLk.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
el1vcrU.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cndXkPg = elDfNLk.formHandler.getError(`whenTo.notSubscribe`);
this.setState('steMc4K', cndXkPg);
if (cndXkPg) { 
let el35p8j = eo('div','xNpf',null,`class`,`alert alert-danger`);
text(elDfNLk.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let el1T0lX = eo('div',null,null,`class`,`form-group`);
let elrkX5J = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let elU8oEf = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let el2bicr = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el5zTsW = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stLaORT'});
}
                    this.isReadyToGo();
                }
        });