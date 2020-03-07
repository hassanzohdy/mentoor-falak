_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {c7Rk_v1tU:'table-actions',cObqhjCw1:'admin-table',caJQ2yYNx:'flk-dropdown-list',cuwrUKqzY:'flk-dropdown-list',cBwiezmyu:'flk-datepicker',csiqpnebR:'flk-modal'},
                render: function (component) {
                    let cmpmpgW = this._lc('cObqhjCw1', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let iih3Zy = 'a7svos9' + index;
let elOskRX = eo('tr','j4NOC5zMmqhp' + index+iih3Zy);
let el9xq4Y = eo('td','1xbff'+iih3Zy);
text(course.id);
ec('td');
let eljqIBt = eo('td','xjiff'+iih3Zy);
let elQvLt8 = ev('img','8Mlff'+iih3Zy,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let eltgo1A = eo('td','s8Fff'+iih3Zy);
text(course.name);
ec('td');
let elRiO7k = eo('td','6khff'+iih3Zy);
text( Number(course.cost).format() );
ec('td');
let elHRZJd = eo('td','Bm3ff'+iih3Zy);
text(course.level);
ec('td');
let eljckbr = eo('td','gVhff'+iih3Zy);
text(course.sortOrder);
ec('td');
let el1Tahc = eo('td','bwtff'+iih3Zy);
text(course.display);
ec('td');
let elABSzI = eo('td','f7cff'+iih3Zy);
let cmpluGI = this._lc('c7Rk_v1tU', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +iih3Zy});
ec('td');
ec('tr');
}
}});
let cndR78O = component.openModal;
this.setState('st2w4or', cndR78O);
if (cndR78O) { 
let cmpGK9K = this._lc('csiqpnebR', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elbIeJY = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elbIeJY.formHandler) {
                    window.cfrmdlr = elbIeJY.formHandler = new FormHandler(elbIeJY, component);
                } else {
                    window.cfrmdlr = elbIeJY.formHandler;
                }
            let el6kx7F = eo('div',null,null,`class`,`row`);
let el4XVZH = eo('div',null,null,`class`,`col`);
let elOI1KY = eo('div',null,null,`class`,`form-group`);
let elHLSdU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`name`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elHLSdU.value = fval(component.formObject.name);
let cndmieL = elbIeJY.formHandler.getError(`name`);
this.setState('stOgCVt', cndmieL);
if (cndmieL) { 
let elqnJcV = eo('div','baEf',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let el1DyB5 = eo('div',null,null,`class`,`col`);
let cmpOGiD = this._lc('caJQ2yYNx', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'st2w4or'});
ec('div');
ec('div');
let elLHkCi = eo('div',null,null,`class`,`form-group`);
let elcLAOQ = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmps4us = this._lc('cuwrUKqzY', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'st2w4or'});
ec('div');
let elHgeLS = eo('div',null,null,`class`,`form-group`);
let elhaPkM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`address`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elhaPkM.value = fval(component.formObject.address);
let cnd2fde = elbIeJY.formHandler.getError(`address`);
this.setState('stA0e96', cnd2fde);
if (cnd2fde) { 
let elvz17b = eo('div','7NFf',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`address`));
ec('div');
}ec('div');
let elLoxDA = eo('div',null,null,`class`,`form-group`);
let el_1CCL = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`description`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
el_1CCL.value = fval(component.formObject.description);
ec('textarea');
let cnd_aP_ = elbIeJY.formHandler.getError(`description`);
this.setState('stslztG', cnd_aP_);
if (cnd_aP_) { 
let elcSYWI = eo('div','ivxf',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`description`));
ec('div');
}ec('div');
let elyQ17c = eo('div',null,null,`class`,`form-group`);
let elDQjEW = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`content`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elDQjEW.value = fval(component.formObject.content);
ec('textarea');
let cndd1Jr = elbIeJY.formHandler.getError(`content`);
this.setState('stVH000', cndd1Jr);
if (cndd1Jr) { 
let eleMdeL = eo('div','5Q9f',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`content`));
ec('div');
}ec('div');
let elRI1C0 = eo('div',null,null,`class`,`form-group`);
let elXEO52 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
elXEO52.value = fval(component.formObject.requirements);
ec('textarea');
let cndsp4J = elbIeJY.formHandler.getError(`requirements`);
this.setState('stSJEil', cndsp4J);
if (cndsp4J) { 
let elIIypb = eo('div','QeYf',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let elMv5VX = eo('div',null,null,`class`,`form-group`);
let elJmsWW = eo('div',null,null,`class`,`row`);
let elyfhCa = eo('div',null,null,`class`,`col-md-4`);
let elBSXZ9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elBSXZ9.value = fval(component.formObject.sortOrder);
ec('div');
let el7un8Z = eo('div',null,null,`class`,`col-md-4`);
let elcHVPG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elcHVPG.value = fval(component.formObject.cost);
let cndVPfY = elbIeJY.formHandler.getError(`cost`);
this.setState('stwsUwe', cndVPfY);
if (cndVPfY) { 
let elEXm5s = eo('div','qt1f',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elRdmMk = eo('div',null,null,`class`,`col-md-4`);
let elcCBEL = eo('div',null,null,`class`,`form-check m-t-1`);
let elcy5Xn = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let el5ac5p = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elkOAVj = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let el_AMHw = eo('div',null,null,`class`,`row`);
let eljmGSj = eo('div',null,null,`class`,`col-4`);
let cmpiHhW = this._lc('cBwiezmyu', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'st2w4or'});
ec('div');
let el20H6q = eo('div',null,null,`class`,`col-4`);
let elNx5Zz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
elNx5Zz.value = fval(component.formObject.time.sessionsPerWeek);
let cndUPH6 = elbIeJY.formHandler.getError(`time.sessionsPerWeek`);
this.setState('stw0wJO', cndUPH6);
if (cndUPH6) { 
let ellhIb7 = eo('div','Jn7f',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let elbxH_5 = eo('div',null,null,`class`,`col-2`);
let elyY9oq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elyY9oq.value = fval(component.formObject.time.length);
let cndmC3o = elbIeJY.formHandler.getError(`time.length`);
this.setState('st23Yz1', cndmC3o);
if (cndmC3o) { 
let el38Sox = eo('div','jhtf',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let elVhMno = eo('div',null,null,`class`,`col-2`);
let elEVhVM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
elEVhVM.value = fval(component.formObject.time.duration);
let cndfdJS = elbIeJY.formHandler.getError(`time.duration`);
this.setState('stILHbw', cndfdJS);
if (cndfdJS) { 
let elkgsO0 = eo('div','L_Ef',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let ii14U3 = 'srFeqEj' + day;
let elZGaQr = eo('div','rI2qG2UHKHij' + day+ii14U3,null,`class`,`row`);
let elp0fPj = eo('label','4nbff'+ii14U3,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let elluZTb = eo('div','dT0ff'+ii14U3,null,`class`,`col-6`);
let elSUlf_ = ev('input','2Axff'+ii14U3,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
elSUlf_.value = fval(component.formObject.time.days[day].from);
ec('div');
let elwKM_X = eo('div','YLHff'+ii14U3,null,`class`,`col-6`);
let elfK40r = ev('input','XOuff'+ii14U3,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
elfK40r.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let elambYU = eo('div',null,null,`class`,`form-group`);
let elmx7Ms = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
elmx7Ms.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cndMaaf = elbIeJY.formHandler.getError(`whenTo.subscribe`);
this.setState('stxWiJi', cndMaaf);
if (cndMaaf) { 
let elyBdp3 = eo('div','JXPf',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let elHeSEu = eo('div',null,null,`class`,`form-group`);
let el6mTYk = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbIeJY.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return elbIeJY.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
el6mTYk.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cndLuIo = elbIeJY.formHandler.getError(`whenTo.notSubscribe`);
this.setState('stoTgOu', cndLuIo);
if (cndLuIo) { 
let elZyyBe = eo('div','LLGf',null,`class`,`alert alert-danger`);
text(elbIeJY.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let elba5CU = eo('div',null,null,`class`,`form-group`);
let eltbIZ_ = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let elWpHqm = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let elIlhSX = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el0pLPW = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st2w4or'});
}
                    this.isReadyToGo();
                }
        });