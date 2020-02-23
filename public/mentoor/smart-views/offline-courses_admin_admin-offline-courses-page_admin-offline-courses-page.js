_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {cgDyvjAiq:'table-actions',coa5mS286:'admin-table',cVqnYVdbW:'flk-dropdown-list',c026Tchjo:'flk-dropdown-list',cubyqyu26:'flk-datepicker',cGNdqL6Dg:'flk-modal'},
                render: function (component) {
                    let cmpkXVF = this._lc('coa5mS286', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let iiDwEK = 'dOlt69T' + index;
let elQSs8S = eo('tr','WqPPcKuNynTT' + index+iiDwEK);
let elmokBk = eo('td','3Itff'+iiDwEK);
text(course.id);
ec('td');
let elnG7ML = eo('td','jXIff'+iiDwEK);
let elfVggh = ev('img','B6Lff'+iiDwEK,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let elOlZ5h = eo('td','iBoff'+iiDwEK);
text(course.name);
ec('td');
let el6LsOx = eo('td','ANYff'+iiDwEK);
text( Number(course.cost).format() );
ec('td');
let elHzt6X = eo('td','BjYff'+iiDwEK);
text(course.level);
ec('td');
let elwKwew = eo('td','_sIff'+iiDwEK);
text(course.sortOrder);
ec('td');
let elKScpH = eo('td','cDZff'+iiDwEK);
text(course.display);
ec('td');
let elny2sT = eo('td','faPff'+iiDwEK);
let cmpo3gt = this._lc('cgDyvjAiq', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +iiDwEK});
ec('td');
ec('tr');
}
}});
let cndGXKw = component.openModal;
this.setState('stlfjEc', cndGXKw);
if (cndGXKw) { 
let cmpMrqb = this._lc('cGNdqL6Dg', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elZIt4p = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elZIt4p.formHandler) {
                    window.cfrmdlr = elZIt4p.formHandler = new FormHandler(elZIt4p, component);
                } else {
                    window.cfrmdlr = elZIt4p.formHandler;
                }
            let elolsXV = eo('div',null,null,`class`,`row`);
let elkvS9m = eo('div',null,null,`class`,`col`);
let elsd879 = eo('div',null,null,`class`,`form-group`);
let elAKlB2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`name`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elAKlB2.value = fval(component.formObject.name);
let cndfsSn = elZIt4p.formHandler.getError(`name`);
this.setState('stvAugh', cndfsSn);
if (cndfsSn) { 
let el0BGCg = eo('div','bQnf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let elCsYrK = eo('div',null,null,`class`,`col`);
let cmp9G32 = this._lc('cVqnYVdbW', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'stlfjEc'});
ec('div');
ec('div');
let els4tVx = eo('div',null,null,`class`,`form-group`);
let el1XS0Q = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmp3d9L = this._lc('c026Tchjo', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'stlfjEc'});
ec('div');
let elrhovA = eo('div',null,null,`class`,`form-group`);
let elIQmuB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`address`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elIQmuB.value = fval(component.formObject.address);
let cndIIFU = elZIt4p.formHandler.getError(`address`);
this.setState('stnHr9n', cndIIFU);
if (cndIIFU) { 
let elcWcdK = eo('div','Gf8f',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`address`));
ec('div');
}ec('div');
let eluEox8 = eo('div',null,null,`class`,`form-group`);
let elYwliD = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`description`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elYwliD.value = fval(component.formObject.description);
ec('textarea');
let cndObHR = elZIt4p.formHandler.getError(`description`);
this.setState('stLbY8Z', cndObHR);
if (cndObHR) { 
let eli9XB4 = eo('div','gl8f',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`description`));
ec('div');
}ec('div');
let elqfiYK = eo('div',null,null,`class`,`form-group`);
let elkYe1_ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`content`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elkYe1_.value = fval(component.formObject.content);
ec('textarea');
let cnd8wBA = elZIt4p.formHandler.getError(`content`);
this.setState('st4KaWU', cnd8wBA);
if (cnd8wBA) { 
let elX2BjD = eo('div','35Uf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`content`));
ec('div');
}ec('div');
let el_yEg1 = eo('div',null,null,`class`,`form-group`);
let elB3U69 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
elB3U69.value = fval(component.formObject.requirements);
ec('textarea');
let cnduePz = elZIt4p.formHandler.getError(`requirements`);
this.setState('st3xrRJ', cnduePz);
if (cnduePz) { 
let elOsF86 = eo('div','1BJf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let elQ8xCR = eo('div',null,null,`class`,`form-group`);
let eltn2vi = eo('div',null,null,`class`,`row`);
let elxrrC0 = eo('div',null,null,`class`,`col-md-4`);
let elsCiiV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elsCiiV.value = fval(component.formObject.sortOrder);
ec('div');
let elpIFSb = eo('div',null,null,`class`,`col-md-4`);
let elMQuEF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elMQuEF.value = fval(component.formObject.cost);
let cndB4AQ = elZIt4p.formHandler.getError(`cost`);
this.setState('stUadHy', cndB4AQ);
if (cndB4AQ) { 
let elVJrvy = eo('div','EUOf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elMqoCq = eo('div',null,null,`class`,`col-md-4`);
let eljJapl = eo('div',null,null,`class`,`form-check m-t-1`);
let elfEAt2 = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elxyWdL = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elei4RQ = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let elMpksW = eo('div',null,null,`class`,`row`);
let elng8qR = eo('div',null,null,`class`,`col-4`);
let cmpDjfh = this._lc('cubyqyu26', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'stlfjEc'});
ec('div');
let elZ_6Ij = eo('div',null,null,`class`,`col-4`);
let el_Gh9Z = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
el_Gh9Z.value = fval(component.formObject.time.sessionsPerWeek);
let cndB3ga = elZIt4p.formHandler.getError(`time.sessionsPerWeek`);
this.setState('st1Z_1Y', cndB3ga);
if (cndB3ga) { 
let elrZ4SY = eo('div','nigf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let eltWB_S = eo('div',null,null,`class`,`col-2`);
let elDmVgQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elDmVgQ.value = fval(component.formObject.time.length);
let cndooMX = elZIt4p.formHandler.getError(`time.length`);
this.setState('stqHrO9', cndooMX);
if (cndooMX) { 
let elBwjIi = eo('div','P8xf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let el8MGFe = eo('div',null,null,`class`,`col-2`);
let els8daK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
els8daK.value = fval(component.formObject.time.duration);
let cnde4BN = elZIt4p.formHandler.getError(`time.duration`);
this.setState('stfRVvQ', cnde4BN);
if (cnde4BN) { 
let elsKQB5 = eo('div','LcYf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let iippdX = 'Xh5Mo_6' + day;
let elOdDCZ = eo('div','7zqoIhMKAoNv' + day+iippdX,null,`class`,`row`);
let elVhd47 = eo('label','WsJff'+iippdX,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let el_ZC1Z = eo('div','hZ4ff'+iippdX,null,`class`,`col-6`);
let elKIRaO = ev('input','dPQff'+iippdX,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
elKIRaO.value = fval(component.formObject.time.days[day].from);
ec('div');
let elNDH64 = eo('div','M1jff'+iippdX,null,`class`,`col-6`);
let elO3e18 = ev('input','1Eaff'+iippdX,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
elO3e18.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let elk69XU = eo('div',null,null,`class`,`form-group`);
let elxGkV3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
elxGkV3.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cnd_LNn = elZIt4p.formHandler.getError(`whenTo.subscribe`);
this.setState('stmoS1N', cnd_LNn);
if (cnd_LNn) { 
let elSGDVk = eo('div','YnLf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let elEUHLh = eo('div',null,null,`class`,`form-group`);
let elHxtAs = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZIt4p.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return elZIt4p.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
elHxtAs.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cndInpS = elZIt4p.formHandler.getError(`whenTo.notSubscribe`);
this.setState('stHT3vN', cndInpS);
if (cndInpS) { 
let elnnw2t = eo('div','nApf',null,`class`,`alert alert-danger`);
text(elZIt4p.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let eljM8Ho = eo('div',null,null,`class`,`form-group`);
let elaBINJ = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let elazgcG = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let elH8Ayo = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elmaL2N = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stlfjEc'});
}
                    this.isReadyToGo();
                }
        });