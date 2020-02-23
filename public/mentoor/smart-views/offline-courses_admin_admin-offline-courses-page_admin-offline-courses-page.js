_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {cD2RokvBQ:'table-actions',c22vSoNyZ:'admin-table',cRlKaaq5U:'flk-dropdown-list',c4NvH4Lt7:'flk-dropdown-list',cSNJT6xrH:'flk-datepicker',cPKLovtm4:'flk-modal'},
                render: function (component) {
                    let cmp7qC0 = this._lc('c22vSoNyZ', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let iibWdR = '1S94C2C' + index;
let el7a8zd = eo('tr','2MPYegmNl_OR' + index+iibWdR);
let el1PmIT = eo('td','FpIff'+iibWdR);
text(course.id);
ec('td');
let elVUk2d = eo('td','UdDff'+iibWdR);
let elkEbah = ev('img','UVhff'+iibWdR,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let elqxdlq = eo('td','JF6ff'+iibWdR);
text(course.name);
ec('td');
let elnpYgY = eo('td','aDFff'+iibWdR);
text( Number(course.cost).format() );
ec('td');
let el6eXuw = eo('td','F1Fff'+iibWdR);
text(course.level);
ec('td');
let el883df = eo('td','BYiff'+iibWdR);
text(course.sortOrder);
ec('td');
let elkmUss = eo('td','E5kff'+iibWdR);
text(course.display);
ec('td');
let elObEgl = eo('td','lqIff'+iibWdR);
let cmpEymu = this._lc('cD2RokvBQ', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +iibWdR});
ec('td');
ec('tr');
}
}});
let cndLcwB = component.openModal;
this.setState('stnpbdq', cndLcwB);
if (cndLcwB) { 
let cmpZcBw = this._lc('cPKLovtm4', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el7SatX = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7SatX.formHandler) {
                    window.cfrmdlr = el7SatX.formHandler = new FormHandler(el7SatX, component);
                } else {
                    window.cfrmdlr = el7SatX.formHandler;
                }
            let el0PdwZ = eo('div',null,null,`class`,`row`);
let elaOwkK = eo('div',null,null,`class`,`col`);
let elF1PnV = eo('div',null,null,`class`,`form-group`);
let elOj2ta = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`name`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elOj2ta.value = fval(component.formObject.name);
let cndz7NV = el7SatX.formHandler.getError(`name`);
this.setState('stctjo9', cndz7NV);
if (cndz7NV) { 
let elwyKwA = eo('div','bLAf',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let elrYdZj = eo('div',null,null,`class`,`col`);
let cmpT8xf = this._lc('cRlKaaq5U', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'stnpbdq'});
ec('div');
ec('div');
let el0DuR4 = eo('div',null,null,`class`,`form-group`);
let elVeQZW = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmptXkO = this._lc('c4NvH4Lt7', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'stnpbdq'});
ec('div');
let elBfpBp = eo('div',null,null,`class`,`form-group`);
let el6a3rc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`address`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
el6a3rc.value = fval(component.formObject.address);
let cndi3_w = el7SatX.formHandler.getError(`address`);
this.setState('strDFpW', cndi3_w);
if (cndi3_w) { 
let elO6ADe = eo('div','S_Gf',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`address`));
ec('div');
}ec('div');
let elS2Dgr = eo('div',null,null,`class`,`form-group`);
let elfBOzV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`description`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elfBOzV.value = fval(component.formObject.description);
ec('textarea');
let cndEeBm = el7SatX.formHandler.getError(`description`);
this.setState('st7RLLD', cndEeBm);
if (cndEeBm) { 
let elBiMj_ = eo('div','LVlf',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`description`));
ec('div');
}ec('div');
let elFG9lQ = eo('div',null,null,`class`,`form-group`);
let eltid90 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`content`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
eltid90.value = fval(component.formObject.content);
ec('textarea');
let cndr6Dl = el7SatX.formHandler.getError(`content`);
this.setState('stLqJ_G', cndr6Dl);
if (cndr6Dl) { 
let el9jXTT = eo('div','IH2f',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`content`));
ec('div');
}ec('div');
let elrB2xV = eo('div',null,null,`class`,`form-group`);
let el9a9mA = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
el9a9mA.value = fval(component.formObject.requirements);
ec('textarea');
let cnd6_Fw = el7SatX.formHandler.getError(`requirements`);
this.setState('st211h9', cnd6_Fw);
if (cnd6_Fw) { 
let elB5YDB = eo('div','iC4f',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let elsSHwb = eo('div',null,null,`class`,`form-group`);
let elwXhzV = eo('div',null,null,`class`,`row`);
let el8mkBs = eo('div',null,null,`class`,`col-md-4`);
let el0Xwpr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el0Xwpr.value = fval(component.formObject.sortOrder);
ec('div');
let el1liI9 = eo('div',null,null,`class`,`col-md-4`);
let elQ5mDz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elQ5mDz.value = fval(component.formObject.cost);
let cndb8b2 = el7SatX.formHandler.getError(`cost`);
this.setState('stlVIzA', cndb8b2);
if (cndb8b2) { 
let elnjoxZ = eo('div','Slxf',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`cost`));
ec('div');
}ec('div');
let els95SR = eo('div',null,null,`class`,`col-md-4`);
let elQkhqs = eo('div',null,null,`class`,`form-check m-t-1`);
let elTWvV3 = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elQgWaX = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elUppHD = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let elXYsJd = eo('div',null,null,`class`,`row`);
let eljbj4s = eo('div',null,null,`class`,`col-4`);
let cmpreNF = this._lc('cSNJT6xrH', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'stnpbdq'});
ec('div');
let elqNaxp = eo('div',null,null,`class`,`col-4`);
let elKZV_3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
elKZV_3.value = fval(component.formObject.time.sessionsPerWeek);
let cndMtxi = el7SatX.formHandler.getError(`time.sessionsPerWeek`);
this.setState('stj7wxB', cndMtxi);
if (cndMtxi) { 
let elPLWjJ = eo('div','iXBf',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let elK5IwL = eo('div',null,null,`class`,`col-2`);
let elXMQYd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elXMQYd.value = fval(component.formObject.time.length);
let cndc7Hl = el7SatX.formHandler.getError(`time.length`);
this.setState('stUlEnd', cndc7Hl);
if (cndc7Hl) { 
let el2ZX7U = eo('div','6Swf',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let eljaBqP = eo('div',null,null,`class`,`col-2`);
let elzfNvV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
elzfNvV.value = fval(component.formObject.time.duration);
let cndhewp = el7SatX.formHandler.getError(`time.duration`);
this.setState('stePlU0', cndhewp);
if (cndhewp) { 
let el5w6Ky = eo('div','Htgf',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let iiQdp1 = 'dVSMSXV' + day;
let elx_ADf = eo('div','MDBXjBIoV1Kk' + day+iiQdp1,null,`class`,`row`);
let elCoSMy = eo('label','fJMff'+iiQdp1,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let elDUFec = eo('div','kneff'+iiQdp1,null,`class`,`col-6`);
let elAst7y = ev('input','93Jff'+iiQdp1,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
elAst7y.value = fval(component.formObject.time.days[day].from);
ec('div');
let eljUQFc = eo('div','zU6ff'+iiQdp1,null,`class`,`col-6`);
let elx2_9H = ev('input','XlJff'+iiQdp1,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
elx2_9H.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let elIHRn5 = eo('div',null,null,`class`,`form-group`);
let el1SlsV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
el1SlsV.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cndIeJe = el7SatX.formHandler.getError(`whenTo.subscribe`);
this.setState('stFRyv9', cndIeJe);
if (cndIeJe) { 
let elmnbxR = eo('div','Ib8f',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let el6WsFk = eo('div',null,null,`class`,`form-group`);
let elBxukH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7SatX.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return el7SatX.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
elBxukH.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cndXqKO = el7SatX.formHandler.getError(`whenTo.notSubscribe`);
this.setState('st2jOT3', cndXqKO);
if (cndXqKO) { 
let elVyTSe = eo('div','Inzf',null,`class`,`alert alert-danger`);
text(el7SatX.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let elJ2WzK = eo('div',null,null,`class`,`form-group`);
let el1Wv2T = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let elfofi9 = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let elwE428 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elzPcrw = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stnpbdq'});
}
                    this.isReadyToGo();
                }
        });