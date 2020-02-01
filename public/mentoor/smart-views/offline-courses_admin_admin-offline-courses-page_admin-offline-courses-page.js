_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {c4E5qMHlc:'table-actions',cWB_TN9Se:'admin-table',cgFV1lmY8:'flk-dropdown-list',cD_b1A0bt:'flk-dropdown-list',cAuVKgBsT:'flk-datepicker',cu9onPbaR:'flk-modal'},
                render: function (component) {
                    let cmp3KK5 = this._lc('cWB_TN9Se', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let ii9HKK = 'RYYh4bY' + index;
let elEepCz = eo('tr','_78iX6ub7IlG' + index+ii9HKK);
let elW2GyH = eo('td','o0Sff'+ii9HKK);
text(course.id);
ec('td');
let eldSaK9 = eo('td','zcYff'+ii9HKK);
let ellHh1g = ev('img','Bqzff'+ii9HKK,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let elKc8yC = eo('td','Tthff'+ii9HKK);
text(course.name);
ec('td');
let elbHoY1 = eo('td','VRNff'+ii9HKK);
text( Number(course.cost).format() );
ec('td');
let el8BmF_ = eo('td','KI1ff'+ii9HKK);
text(course.level);
ec('td');
let elGGgt6 = eo('td','1Rsff'+ii9HKK);
text(course.sortOrder);
ec('td');
let elANfFN = eo('td','ufGff'+ii9HKK);
text(course.display);
ec('td');
let elQBKqY = eo('td','D09ff'+ii9HKK);
let cmpgsls = this._lc('c4E5qMHlc', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +ii9HKK});
ec('td');
ec('tr');
}
}});
let cnde_jS = component.openModal;
this.setState('stbA37u', cnde_jS);
if (cnde_jS) { 
let cmpjQWh = this._lc('cu9onPbaR', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elTEfW9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elTEfW9.formHandler) {
                    window.cfrmdlr = elTEfW9.formHandler = new FormHandler(elTEfW9, component);
                } else {
                    window.cfrmdlr = elTEfW9.formHandler;
                }
            let elhHemt = eo('div',null,null,`class`,`row`);
let eliLo9y = eo('div',null,null,`class`,`col`);
let el7QpR7 = eo('div',null,null,`class`,`form-group`);
let elqzN9L = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`name`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elqzN9L.value = fval(component.formObject.name);
let cndFHiE = elTEfW9.formHandler.getError(`name`);
this.setState('stK8HIP', cndFHiE);
if (cndFHiE) { 
let el_NLos = eo('div','rPnf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let elOqeM7 = eo('div',null,null,`class`,`col`);
let cmpQU_8 = this._lc('cgFV1lmY8', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'stbA37u'});
ec('div');
ec('div');
let elvcXvN = eo('div',null,null,`class`,`form-group`);
let elx8V6S = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmpHlft = this._lc('cD_b1A0bt', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'stbA37u'});
ec('div');
let elNh3cz = eo('div',null,null,`class`,`form-group`);
let elX8azz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`address`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elX8azz.value = fval(component.formObject.address);
let cndCi1j = elTEfW9.formHandler.getError(`address`);
this.setState('stl9j7Y', cndCi1j);
if (cndCi1j) { 
let elat7C4 = eo('div','w7mf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`address`));
ec('div');
}ec('div');
let elB7_79 = eo('div',null,null,`class`,`form-group`);
let el8aHk9 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`description`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
el8aHk9.value = fval(component.formObject.description);
ec('textarea');
let cndtP3x = elTEfW9.formHandler.getError(`description`);
this.setState('stOfcyw', cndtP3x);
if (cndtP3x) { 
let el31fRF = eo('div','pbaf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`description`));
ec('div');
}ec('div');
let el8O9k6 = eo('div',null,null,`class`,`form-group`);
let elP6NgH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`content`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elP6NgH.value = fval(component.formObject.content);
ec('textarea');
let cndYijK = elTEfW9.formHandler.getError(`content`);
this.setState('stPBLaZ', cndYijK);
if (cndYijK) { 
let eluThnq = eo('div','IJ2f',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`content`));
ec('div');
}ec('div');
let elATzJ3 = eo('div',null,null,`class`,`form-group`);
let elrczXg = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
elrczXg.value = fval(component.formObject.requirements);
ec('textarea');
let cndqoKb = elTEfW9.formHandler.getError(`requirements`);
this.setState('stSoWeh', cndqoKb);
if (cndqoKb) { 
let el5qhie = eo('div','vDpf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let elSkvDD = eo('div',null,null,`class`,`form-group`);
let elFHgt5 = eo('div',null,null,`class`,`row`);
let elcULfp = eo('div',null,null,`class`,`col-md-4`);
let elPnJOT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elPnJOT.value = fval(component.formObject.sortOrder);
ec('div');
let el11EAY = eo('div',null,null,`class`,`col-md-4`);
let elKfm6_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elKfm6_.value = fval(component.formObject.cost);
let cndxpLQ = elTEfW9.formHandler.getError(`cost`);
this.setState('stuC0y9', cndxpLQ);
if (cndxpLQ) { 
let elkuIdV = eo('div','aVEf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elUSG6X = eo('div',null,null,`class`,`col-md-4`);
let elHhoug = eo('div',null,null,`class`,`form-check m-t-1`);
let eluy1b4 = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elHBNRT = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let el1rZO2 = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let elZ5qv1 = eo('div',null,null,`class`,`row`);
let elNLLi_ = eo('div',null,null,`class`,`col-4`);
let cmponpv = this._lc('cAuVKgBsT', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'stbA37u'});
ec('div');
let elxF4mz = eo('div',null,null,`class`,`col-4`);
let elYW1l6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
elYW1l6.value = fval(component.formObject.time.sessionsPerWeek);
let cnduo_S = elTEfW9.formHandler.getError(`time.sessionsPerWeek`);
this.setState('stIpHtE', cnduo_S);
if (cnduo_S) { 
let elkmcwz = eo('div','Vegf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let elfnDD3 = eo('div',null,null,`class`,`col-2`);
let elpT18_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elpT18_.value = fval(component.formObject.time.length);
let cndPROV = elTEfW9.formHandler.getError(`time.length`);
this.setState('stjNP8m', cndPROV);
if (cndPROV) { 
let elsY6CM = eo('div','0NSf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let el1bSPD = eo('div',null,null,`class`,`col-2`);
let elr49YM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
elr49YM.value = fval(component.formObject.time.duration);
let cndJKRY = elTEfW9.formHandler.getError(`time.duration`);
this.setState('stqmdla', cndJKRY);
if (cndJKRY) { 
let elTsHWh = eo('div','FMGf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let iijGQc = 'u_1F_gL' + day;
let el3nNU7 = eo('div','ETDj2XxVZW73' + day+iijGQc,null,`class`,`row`);
let elEFUm5 = eo('label','IMdff'+iijGQc,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let elHuy6c = eo('div','BBfff'+iijGQc,null,`class`,`col-6`);
let el1mKo7 = ev('input','ZO7ff'+iijGQc,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
el1mKo7.value = fval(component.formObject.time.days[day].from);
ec('div');
let el22l7h = eo('div','sKYff'+iijGQc,null,`class`,`col-6`);
let el0g3D2 = ev('input','BBKff'+iijGQc,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
el0g3D2.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let el5hvF5 = eo('div',null,null,`class`,`form-group`);
let el3BLVK = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
el3BLVK.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cndefrj = elTEfW9.formHandler.getError(`whenTo.subscribe`);
this.setState('st2qMBN', cndefrj);
if (cndefrj) { 
let elCZ9TX = eo('div','v8gf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let el5DWfD = eo('div',null,null,`class`,`form-group`);
let elyIVna = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTEfW9.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return elTEfW9.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
elyIVna.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cnd7Nu6 = elTEfW9.formHandler.getError(`whenTo.notSubscribe`);
this.setState('st_kPKb', cnd7Nu6);
if (cnd7Nu6) { 
let elUWDsi = eo('div','GBZf',null,`class`,`alert alert-danger`);
text(elTEfW9.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let elcJiYq = eo('div',null,null,`class`,`form-group`);
let elraXWv = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let el3jgkq = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let elCdvpp = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elrzzQA = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stbA37u'});
}
                    this.isReadyToGo();
                }
        });