_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {csRh7hMRG:'table-actions',ctwYtzRyB:'admin-table',c4v6aUnEM:'flk-dropdown-list',cVQ95jNjf:'flk-dropdown-list',cGUYHL4cm:'flk-datepicker',cdnRcFEy9:'flk-modal'},
                render: function (component) {
                    let cmpUgt0 = this._lc('ctwYtzRyB', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let iiMgqC = 'J3sq6W9' + index;
let elXJcf5 = eo('tr','5OX0p8Qrzrv2' + index+iiMgqC);
let elLEJVk = eo('td','YJ2ff'+iiMgqC);
text(course.id);
ec('td');
let elvm6hx = eo('td','fgRff'+iiMgqC);
let elj1BRp = ev('img','VjNff'+iiMgqC,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let eleDbES = eo('td','h3Dff'+iiMgqC);
text(course.name);
ec('td');
let el2GrLr = eo('td','WJvff'+iiMgqC);
text( Number(course.cost).format() );
ec('td');
let elskyei = eo('td','qlaff'+iiMgqC);
text(course.level);
ec('td');
let elMv5QQ = eo('td','P1off'+iiMgqC);
text(course.sortOrder);
ec('td');
let elhzPeE = eo('td','5iLff'+iiMgqC);
text(course.display);
ec('td');
let elUxdqd = eo('td','eWNff'+iiMgqC);
let cmpdfMR = this._lc('csRh7hMRG', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +iiMgqC});
ec('td');
ec('tr');
}
}});
let cndrmVr = component.openModal;
this.setState('stjERpb', cndrmVr);
if (cndrmVr) { 
let cmpD1P9 = this._lc('cdnRcFEy9', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let eleCELE = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eleCELE.formHandler) {
                    window.cfrmdlr = eleCELE.formHandler = new FormHandler(eleCELE, component);
                } else {
                    window.cfrmdlr = eleCELE.formHandler;
                }
            let elrpUyd = eo('div',null,null,`class`,`row`);
let eldAK7q = eo('div',null,null,`class`,`col`);
let el3h9lG = eo('div',null,null,`class`,`form-group`);
let elNfboi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`name`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elNfboi.value = fval(component.formObject.name);
let cndYjAL = eleCELE.formHandler.getError(`name`);
this.setState('stn8m5j', cndYjAL);
if (cndYjAL) { 
let elib7tl = eo('div','oKFf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let elqmbAe = eo('div',null,null,`class`,`col`);
let cmpc8p6 = this._lc('c4v6aUnEM', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'stjERpb'});
ec('div');
ec('div');
let elcJeUe = eo('div',null,null,`class`,`form-group`);
let elpcX_z = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmpiKKM = this._lc('cVQ95jNjf', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'stjERpb'});
ec('div');
let elYNFQx = eo('div',null,null,`class`,`form-group`);
let el0JVZX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`address`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
el0JVZX.value = fval(component.formObject.address);
let cndZNZv = eleCELE.formHandler.getError(`address`);
this.setState('stIe2Cz', cndZNZv);
if (cndZNZv) { 
let elUpyQg = eo('div','wRUf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`address`));
ec('div');
}ec('div');
let el9WHO8 = eo('div',null,null,`class`,`form-group`);
let elbkEsQ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`description`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elbkEsQ.value = fval(component.formObject.description);
ec('textarea');
let cndBsBl = eleCELE.formHandler.getError(`description`);
this.setState('stw0l71', cndBsBl);
if (cndBsBl) { 
let elik31E = eo('div','IWzf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`description`));
ec('div');
}ec('div');
let elpjF_S = eo('div',null,null,`class`,`form-group`);
let elPUUfI = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`content`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elPUUfI.value = fval(component.formObject.content);
ec('textarea');
let cndH4dp = eleCELE.formHandler.getError(`content`);
this.setState('st7gLdg', cndH4dp);
if (cndH4dp) { 
let el5CO8o = eo('div','oD5f',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`content`));
ec('div');
}ec('div');
let elAkvc2 = eo('div',null,null,`class`,`form-group`);
let el8vrPE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
el8vrPE.value = fval(component.formObject.requirements);
ec('textarea');
let cndTjVh = eleCELE.formHandler.getError(`requirements`);
this.setState('stczL8c', cndTjVh);
if (cndTjVh) { 
let elQ2Rmg = eo('div','_Kef',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let elsVTVT = eo('div',null,null,`class`,`form-group`);
let elDwsO0 = eo('div',null,null,`class`,`row`);
let elZoozR = eo('div',null,null,`class`,`col-md-4`);
let elqKx1P = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elqKx1P.value = fval(component.formObject.sortOrder);
ec('div');
let elXoa9s = eo('div',null,null,`class`,`col-md-4`);
let eli0Ync = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`cost`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
eli0Ync.value = fval(component.formObject.cost);
let cndgPZs = eleCELE.formHandler.getError(`cost`);
this.setState('stqSe0r', cndgPZs);
if (cndgPZs) { 
let elGPrBM = eo('div','LlKf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elOMuH2 = eo('div',null,null,`class`,`col-md-4`);
let elGol2S = eo('div',null,null,`class`,`form-check m-t-1`);
let ell44au = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elcSYTR = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elAlMAH = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let el0Bxpd = eo('div',null,null,`class`,`row`);
let elW7VOb = eo('div',null,null,`class`,`col-4`);
let cmpA8PH = this._lc('cGUYHL4cm', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'stjERpb'});
ec('div');
let el_Cvmd = eo('div',null,null,`class`,`col-4`);
let elBx92f = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
elBx92f.value = fval(component.formObject.time.sessionsPerWeek);
let cndB0wF = eleCELE.formHandler.getError(`time.sessionsPerWeek`);
this.setState('st4nhta', cndB0wF);
if (cndB0wF) { 
let el92IDZ = eo('div','y9Wf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let el28vnj = eo('div',null,null,`class`,`col-2`);
let elp71OH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elp71OH.value = fval(component.formObject.time.length);
let cndVHBG = eleCELE.formHandler.getError(`time.length`);
this.setState('stneefy', cndVHBG);
if (cndVHBG) { 
let el7Zyis = eo('div','d3gf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let elrM4Ud = eo('div',null,null,`class`,`col-2`);
let elwqOXE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
elwqOXE.value = fval(component.formObject.time.duration);
let cndGjnX = eleCELE.formHandler.getError(`time.duration`);
this.setState('st7mIae', cndGjnX);
if (cndGjnX) { 
let elCQsr3 = eo('div','FyCf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let iixRVj = 'DrIewDF' + day;
let elK_p5G = eo('div','h7ia9UOskfhM' + day+iixRVj,null,`class`,`row`);
let elu3lOH = eo('label','U0eff'+iixRVj,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let el2nrwZ = eo('div','Wszff'+iixRVj,null,`class`,`col-6`);
let elvoVyZ = ev('input','suUff'+iixRVj,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
elvoVyZ.value = fval(component.formObject.time.days[day].from);
ec('div');
let elGqd4v = eo('div','XSYff'+iixRVj,null,`class`,`col-6`);
let elXkXjK = ev('input','h_Eff'+iixRVj,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
elXkXjK.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let elFc6Ed = eo('div',null,null,`class`,`form-group`);
let elTwaCj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
elTwaCj.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cndHDS_ = eleCELE.formHandler.getError(`whenTo.subscribe`);
this.setState('stSxA3R', cndHDS_);
if (cndHDS_) { 
let el6YNqH = eo('div','UMdf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let elEMOqB = eo('div',null,null,`class`,`form-group`);
let elj08ME = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eleCELE.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return eleCELE.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
elj08ME.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cndrvZG = eleCELE.formHandler.getError(`whenTo.notSubscribe`);
this.setState('sttZ2CS', cndrvZG);
if (cndrvZG) { 
let el0yWzi = eo('div','XfYf',null,`class`,`alert alert-danger`);
text(eleCELE.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let elsvejU = eo('div',null,null,`class`,`form-group`);
let el2EUVB = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let elBdD75 = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let elymKGG = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elrNR8h = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stjERpb'});
}
                    this.isReadyToGo();
                }
        });