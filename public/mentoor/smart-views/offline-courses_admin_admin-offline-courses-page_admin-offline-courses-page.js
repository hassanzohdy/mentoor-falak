_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {c5hpnMzPb:'table-actions',cmxIHGUNT:'admin-table',c_ZEalLTA:'flk-dropdown-list',cTrXI9wLr:'flk-dropdown-list',cFqBw3YWP:'flk-datepicker',c_z4Q5O6s:'flk-modal'},
                render: function (component) {
                    let cmpRAVW = this._lc('cmxIHGUNT', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let ii8BHx = '79qpv3p' + index;
let elRqwEp = eo('tr','S_qWk3ZNuZ3T' + index+ii8BHx);
let elwNP7w = eo('td','sqNff'+ii8BHx);
text(course.id);
ec('td');
let elgRx1P = eo('td','vD3ff'+ii8BHx);
let elzGuOH = ev('img','wtkff'+ii8BHx,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let elFocj_ = eo('td','NR6ff'+ii8BHx);
text(course.name);
ec('td');
let elQ52fn = eo('td','lLFff'+ii8BHx);
text( Number(course.cost).format() );
ec('td');
let elaNzeD = eo('td','eUUff'+ii8BHx);
text(course.level);
ec('td');
let elneTCT = eo('td','Itpff'+ii8BHx);
text(course.sortOrder);
ec('td');
let elc5oke = eo('td','NzAff'+ii8BHx);
text(course.display);
ec('td');
let elyGspW = eo('td','Os5ff'+ii8BHx);
let cmp48jH = this._lc('c5hpnMzPb', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +ii8BHx});
ec('td');
ec('tr');
}
}});
let cndhGmd = component.openModal;
this.setState('stYorGc', cndhGmd);
if (cndhGmd) { 
let cmpMX1B = this._lc('c_z4Q5O6s', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el_EIcO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_EIcO.formHandler) {
                    window.cfrmdlr = el_EIcO.formHandler = new FormHandler(el_EIcO, component);
                } else {
                    window.cfrmdlr = el_EIcO.formHandler;
                }
            let elWcr65 = eo('div',null,null,`class`,`row`);
let elZ5xFr = eo('div',null,null,`class`,`col`);
let el8vLbG = eo('div',null,null,`class`,`form-group`);
let elR9KMx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`name`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elR9KMx.value = fval(component.formObject.name);
let cndFkEA = el_EIcO.formHandler.getError(`name`);
this.setState('stICE9F', cndFkEA);
if (cndFkEA) { 
let elDErYH = eo('div','XW6f',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let ele7AFp = eo('div',null,null,`class`,`col`);
let cmpJmIN = this._lc('c_ZEalLTA', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'stYorGc'});
ec('div');
ec('div');
let eli4sjI = eo('div',null,null,`class`,`form-group`);
let elsx0j7 = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmpufbS = this._lc('cTrXI9wLr', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'stYorGc'});
ec('div');
let elmVc4e = eo('div',null,null,`class`,`form-group`);
let el68U7i = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`address`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
el68U7i.value = fval(component.formObject.address);
let cndNEwr = el_EIcO.formHandler.getError(`address`);
this.setState('st08w_Q', cndNEwr);
if (cndNEwr) { 
let el3YKBF = eo('div','UAHf',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`address`));
ec('div');
}ec('div');
let elgNcVN = eo('div',null,null,`class`,`form-group`);
let elHfWYr = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`description`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elHfWYr.value = fval(component.formObject.description);
ec('textarea');
let cndvRU2 = el_EIcO.formHandler.getError(`description`);
this.setState('st4uVLL', cndvRU2);
if (cndvRU2) { 
let el28h4w = eo('div','pZvf',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`description`));
ec('div');
}ec('div');
let elZDNVw = eo('div',null,null,`class`,`form-group`);
let el4Ohc9 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`content`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
el4Ohc9.value = fval(component.formObject.content);
ec('textarea');
let cndrePt = el_EIcO.formHandler.getError(`content`);
this.setState('st9DGfC', cndrePt);
if (cndrePt) { 
let eljRuSw = eo('div','PZ7f',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`content`));
ec('div');
}ec('div');
let elHcej5 = eo('div',null,null,`class`,`form-group`);
let elTGm4m = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
elTGm4m.value = fval(component.formObject.requirements);
ec('textarea');
let cndNr54 = el_EIcO.formHandler.getError(`requirements`);
this.setState('stE2Er9', cndNr54);
if (cndNr54) { 
let elBDXeE = eo('div','fy3f',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let elqmz9x = eo('div',null,null,`class`,`form-group`);
let elANsQP = eo('div',null,null,`class`,`row`);
let elysDob = eo('div',null,null,`class`,`col-md-4`);
let el7peXg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el7peXg.value = fval(component.formObject.sortOrder);
ec('div');
let elKpu_Y = eo('div',null,null,`class`,`col-md-4`);
let elcVjam = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elcVjam.value = fval(component.formObject.cost);
let cnda_6I = el_EIcO.formHandler.getError(`cost`);
this.setState('stxfvtJ', cnda_6I);
if (cnda_6I) { 
let eliW4Ii = eo('div','lAaf',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elC2d1J = eo('div',null,null,`class`,`col-md-4`);
let el6pgA5 = eo('div',null,null,`class`,`form-check m-t-1`);
let elOAK1e = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elk9v9l = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elmDgSc = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let elRkBDg = eo('div',null,null,`class`,`row`);
let ellGQih = eo('div',null,null,`class`,`col-4`);
let cmpXS0S = this._lc('cFqBw3YWP', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'stYorGc'});
ec('div');
let el9Ft55 = eo('div',null,null,`class`,`col-4`);
let elQAmu8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
elQAmu8.value = fval(component.formObject.time.sessionsPerWeek);
let cndUUuy = el_EIcO.formHandler.getError(`time.sessionsPerWeek`);
this.setState('stdR_kV', cndUUuy);
if (cndUUuy) { 
let elDl95A = eo('div','e0rf',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let eleqrvj = eo('div',null,null,`class`,`col-2`);
let elW04nu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elW04nu.value = fval(component.formObject.time.length);
let cnd5BJQ = el_EIcO.formHandler.getError(`time.length`);
this.setState('stdkAU4', cnd5BJQ);
if (cnd5BJQ) { 
let elRY5PE = eo('div','s9Pf',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let el6F_zk = eo('div',null,null,`class`,`col-2`);
let elZjukQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
elZjukQ.value = fval(component.formObject.time.duration);
let cnddtkH = el_EIcO.formHandler.getError(`time.duration`);
this.setState('stdk3qg', cnddtkH);
if (cnddtkH) { 
let elpYKMn = eo('div','gecf',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let ii02PU = 'ZpA4j3N' + day;
let el0zjxW = eo('div','ut4autQfa_6c' + day+ii02PU,null,`class`,`row`);
let elTYZMg = eo('label','3xvff'+ii02PU,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let ele2UlF = eo('div','siRff'+ii02PU,null,`class`,`col-6`);
let elsjaI_ = ev('input','LC5ff'+ii02PU,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
elsjaI_.value = fval(component.formObject.time.days[day].from);
ec('div');
let elvovYH = eo('div','2MJff'+ii02PU,null,`class`,`col-6`);
let eli3Ty1 = ev('input','psGff'+ii02PU,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
eli3Ty1.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let elpIVxg = eo('div',null,null,`class`,`form-group`);
let elYaLPk = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
elYaLPk.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cnddmt3 = el_EIcO.formHandler.getError(`whenTo.subscribe`);
this.setState('stNGzN0', cnddmt3);
if (cnddmt3) { 
let elbr3XV = eo('div','c9of',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let elLazwz = eo('div',null,null,`class`,`form-group`);
let elAJaN3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_EIcO.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return el_EIcO.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
elAJaN3.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cndwwAB = el_EIcO.formHandler.getError(`whenTo.notSubscribe`);
this.setState('stBh8u9', cndwwAB);
if (cndwwAB) { 
let eluON01 = eo('div','P4Hf',null,`class`,`alert alert-danger`);
text(el_EIcO.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let elrWHI4 = eo('div',null,null,`class`,`form-group`);
let elJYUnu = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let elWjR5k = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let elt0Xcv = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elLmg0Y = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stYorGc'});
}
                    this.isReadyToGo();
                }
        });