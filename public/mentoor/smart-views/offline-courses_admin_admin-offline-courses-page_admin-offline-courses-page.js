_Component({
                selector: 'admin-offline-courses-page',
                c: 'AdminOfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminUsersService','isValidForm','submitting'],
                children: {cVueOmePK:'table-actions',c_VxlZcTl:'admin-table',cvQTAr1j_:'flk-dropdown-list',cLBaTX9Zd:'flk-dropdown-list',cVrPm1_xS:'flk-datepicker',cPCP9f5mk:'flk-modal'},
                render: function (component) {
                    let cmpdmby = this._lc('c_VxlZcTl', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let course = component.items[index]; 
 let ii8nqG = 'cZt8Nob' + index;
let elihf0Z = eo('tr','TxFmPI3l4ATj' + index+ii8nqG);
let elJEaa7 = eo('td','GhFff'+ii8nqG);
text(course.id);
ec('td');
let elmCIU3 = eo('td','Qssff'+ii8nqG);
let elPS3Ak = ev('img','dLFff'+ii8nqG,null,`src`,`${course.image}`,`class`,`image`,`alt`,``);
ec('td');
let elLR1SC = eo('td','yaDff'+ii8nqG);
text(course.name);
ec('td');
let elSTbed = eo('td','_3Off'+ii8nqG);
text( Number(course.cost).format() );
ec('td');
let elaGVH2 = eo('td','pVAff'+ii8nqG);
text(course.level);
ec('td');
let elgJolN = eo('td','Sp_ff'+ii8nqG);
text(course.sortOrder);
ec('td');
let elY4Pyq = eo('td','XYFff'+ii8nqG);
text(course.display);
ec('td');
let elPWy2x = eo('td','ctwff'+ii8nqG);
let cmpLLoV = this._lc('cVueOmePK', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(course)},ondelete:function(e) {let $el = this; component.deleteItem(course.id, index)}},insideLoop:true,index:"" +ii8nqG});
ec('td');
ec('tr');
}
}});
let cndqYul = component.openModal;
this.setState('st7MjAh', cndqYul);
if (cndqYul) { 
let cmpgWZj = this._lc('cPCP9f5mk', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elYisEW = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elYisEW.formHandler) {
                    window.cfrmdlr = elYisEW.formHandler = new FormHandler(elYisEW, component);
                } else {
                    window.cfrmdlr = elYisEW.formHandler;
                }
            let elh0_81 = eo('div',null,null,`class`,`row`);
let elHLDK5 = eo('div',null,null,`class`,`col`);
let elmg9yf = eo('div',null,null,`class`,`form-group`);
let elHuwIL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`name`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Course name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elHuwIL.value = fval(component.formObject.name);
let cndnM5B = elYisEW.formHandler.getError(`name`);
this.setState('stkdZQa', cndnM5B);
if (cndnM5B) { 
let elTS1Gm = eo('div','2sbf',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`name`));
ec('div');
}ec('div');
ec('div');
let elkjEqC = eo('div',null,null,`class`,`col`);
let cmp1Fez = this._lc('cvQTAr1j_', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`,required:''},state:'st7MjAh'});
ec('div');
ec('div');
let elCz0wh = eo('div',null,null,`class`,`form-group`);
let elpszg_ = eo('label',null,null,`class`,`d-block my-1`);
text(`Instructor`);
ec('label');
let cmped1f = this._lc('cLBaTX9Zd', {parent:component,parentTop:flkModal,props:{service:component.adminUsersService,lazyLoading:true,value:component.formObject.instructor.id},attrs:{name:`${(`instructorId`).toInputName()}`,placeholder:`${trans(`Instructor`)}`,required:''},state:'st7MjAh'});
ec('div');
let elXOdBF = eo('div',null,null,`class`,`form-group`);
let elF0ckI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.address = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`address`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`address`);}]},`value`,`${fval(component.formObject.address)}`,`name`,`${(`address`).toInputName()}`,`placeholder`,`${trans(`Course Address`)}`,`type`,`text`,`class`,`form-control`,`id`,`address`);
elF0ckI.value = fval(component.formObject.address);
let cndbycg = elYisEW.formHandler.getError(`address`);
this.setState('stmlXzJ', cndbycg);
if (cndbycg) { 
let elBYmt9 = eo('div','FSQf',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`address`));
ec('div');
}ec('div');
let elNtyGw = eo('div',null,null,`class`,`form-group`);
let elHZh35 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`description`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elHZh35.value = fval(component.formObject.description);
ec('textarea');
let cnd7MzV = elYisEW.formHandler.getError(`description`);
this.setState('stvLl5V', cnd7MzV);
if (cnd7MzV) { 
let el1iDI8 = eo('div','5FXf',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`description`));
ec('div');
}ec('div');
let elq8XUv = eo('div',null,null,`class`,`form-group`);
let elusE8r = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`content`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`content`);}]},`value`,`${fval(component.formObject.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Content (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`content`);
elusE8r.value = fval(component.formObject.content);
ec('textarea');
let cndu8po = elYisEW.formHandler.getError(`content`);
this.setState('stRHKQA', cndu8po);
if (cndu8po) { 
let elSTxEF = eo('div','jr2f',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`content`));
ec('div');
}ec('div');
let eldfTau = eo('div',null,null,`class`,`form-group`);
let elmbdIa = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.requirements = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`requirements`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`requirements`);}]},`value`,`${fval(component.formObject.requirements)}`,`name`,`${(`requirements`).toInputName()}`,`placeholder`,`${trans(`Requirements (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`requirements`);
elmbdIa.value = fval(component.formObject.requirements);
ec('textarea');
let cndlXBo = elYisEW.formHandler.getError(`requirements`);
this.setState('stprh9e', cndlXBo);
if (cndlXBo) { 
let elLRO5Q = eo('div','tf1f',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`requirements`));
ec('div');
}ec('div');
let eliF4nc = eo('div',null,null,`class`,`form-group`);
let el9bo4z = eo('div',null,null,`class`,`row`);
let elanaiX = eo('div',null,null,`class`,`col-md-4`);
let elm24Fz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elm24Fz.value = fval(component.formObject.sortOrder);
ec('div');
let elFQmmd = eo('div',null,null,`class`,`col-md-4`);
let elu59iS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elu59iS.value = fval(component.formObject.cost);
let cndxIIF = elYisEW.formHandler.getError(`cost`);
this.setState('stPYMEO', cndxIIF);
if (cndxIIF) { 
let el41ahw = eo('div','ThUf',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elLGy9d = eo('div',null,null,`class`,`col-md-4`);
let el1POaf = eo('div',null,null,`class`,`form-check m-t-1`);
let elc_nV1 = eo('div',null,null,`class`,`custom-control custom-checkbox`);
let elJzLKV = ev('input',null,null, eventListeners, {onchange:[function(e) {var $el = this;component.formObject.display = ! component.formObject.display}]}, boolAttrs, {checked:component.formObject.display},`name`,`${(`display`).toInputName()}`,`type`,`checkbox`,`class`,`custom-control-input`,`value`,`1`,`id`,`display`);
let elr17zx = eo('label',null,null,`class`,`custom-control-label`,`for`,`display`);
text(`Display`);
ec('label');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
let ellaFng = eo('div',null,null,`class`,`row`);
let elOSj6a = eo('div',null,null,`class`,`col-4`);
let cmpgPre = this._lc('cVrPm1_xS', {parent:component,parentTop:flkModal,props:{value:component.formObject.time.startDate},events:{onchange:function(e) {let $el = this; component.formObject.time.startDate = e}},attrs:{name:`${(`time.startDate`).toInputName()}`,placeholder:`${trans(`Starting date`)}`,class:'form-control'},state:'st7MjAh'});
ec('div');
let elwd6Fb = eo('div',null,null,`class`,`col-4`);
let eltxwVP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.sessionsPerWeek = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`time.sessionsPerWeek`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`time.sessionsPerWeek`);}]},`value`,`${fval(component.formObject.time.sessionsPerWeek)}`,`name`,`${(`time.sessionsPerWeek`).toInputName()}`,`placeholder`,`${trans(`Sessions per week`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-sessionsPerWeek`);
eltxwVP.value = fval(component.formObject.time.sessionsPerWeek);
let cndTWgN = elYisEW.formHandler.getError(`time.sessionsPerWeek`);
this.setState('stebypt', cndTWgN);
if (cndTWgN) { 
let elTYl6r = eo('div','leSf',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`time.sessionsPerWeek`));
ec('div');
}ec('div');
let elj7tqD = eo('div',null,null,`class`,`col-2`);
let elWtULD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.length = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`time.length`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`time.length`);}]},`value`,`${fval(component.formObject.time.length)}`,`name`,`${(`time.length`).toInputName()}`,`placeholder`,`${trans(`Course length (In weeks)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-length`);
elWtULD.value = fval(component.formObject.time.length);
let cndpG0j = elYisEW.formHandler.getError(`time.length`);
this.setState('stbrB0f', cndpG0j);
if (cndpG0j) { 
let elj3GdZ = eo('div','KKEf',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`time.length`));
ec('div');
}ec('div');
let elwGpsh = eo('div',null,null,`class`,`col-2`);
let elXjQXg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.time.duration = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`time.duration`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`time.duration`);}]},`value`,`${fval(component.formObject.time.duration)}`,`name`,`${(`time.duration`).toInputName()}`,`placeholder`,`${trans(`Session duration (In hours)`)}`,`type`,`number`,`class`,`form-control`,`id`,`time-duration`);
elXjQXg.value = fval(component.formObject.time.duration);
let cndGkTe = elYisEW.formHandler.getError(`time.duration`);
this.setState('stFvmu2', cndGkTe);
if (cndGkTe) { 
let elYusx_ = eo('div','OzYf',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`time.duration`));
ec('div');
}ec('div');
ec('div');
for (let day in component.formObject.time.days) {
let value = component.formObject.time.days[day]; 
 let iimc5n = 'eEMwAld' + day;
let el9zDVh = eo('div','hJjU9fnKuOlz' + day+iimc5n,null,`class`,`row`);
let eldQ2eT = eo('label','P5_ff'+iimc5n,null,`class`,`col-12 m-t-1`);
text(day);
ec('label');
let el9dK2U = eo('div','lRzff'+iimc5n,null,`class`,`col-6`);
let el9uwCF = ev('input','82Vff'+iimc5n,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].from = this.value;}]},`value`,`${fval(component.formObject.time.days[day].from)}`,`name`,`${(`time.days.${ day }.from`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-from`);
el9uwCF.value = fval(component.formObject.time.days[day].from);
ec('div');
let elBkXoI = eo('div','4z5ff'+iimc5n,null,`class`,`col-6`);
let elVybTB = ev('input','u1pff'+iimc5n,null, eventListeners, {oninput:[function(e) {component.formObject.time.days[day].to = this.value;}]},`value`,`${fval(component.formObject.time.days[day].to)}`,`name`,`${(`time.days.${ day }.to`).toInputName()}`,`placeholder`,`${trans(`${ day } (HH:MM)`)}`,`type`,`text`,`class`,`form-control`,`id`,`time-days-${ day }-to`);
elVybTB.value = fval(component.formObject.time.days[day].to);
ec('div');
ec('div');
}
let elLhlU0 = eo('div',null,null,`class`,`form-group`);
let eltXASl = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.subscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`whenTo.subscribe`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`whenTo.subscribe`);}]},`value`,`${fval(component.formObject.whenTo.subscribe)}`,`name`,`${(`whenTo.subscribe`).toInputName()}`,`placeholder`,`${trans(`When to subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-subscribe`);
eltXASl.value = fval(component.formObject.whenTo.subscribe);
ec('textarea');
let cndyp6P = elYisEW.formHandler.getError(`whenTo.subscribe`);
this.setState('std2qZw', cndyp6P);
if (cndyp6P) { 
let el6PnKE = eo('div','j0Nf',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`whenTo.subscribe`));
ec('div');
}ec('div');
let elEgfDp = eo('div',null,null,`class`,`form-group`);
let eljgvly = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.whenTo.notSubscribe = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYisEW.formHandler.addError(`whenTo.notSubscribe`, 'required', trans('validation.required'));}return elYisEW.formHandler.removeError(`whenTo.notSubscribe`);}]},`value`,`${fval(component.formObject.whenTo.notSubscribe)}`,`name`,`${(`whenTo.notSubscribe`).toInputName()}`,`placeholder`,`${trans(`When to not subscribe (Markdown syntax)`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`whenTo-notSubscribe`);
eljgvly.value = fval(component.formObject.whenTo.notSubscribe);
ec('textarea');
let cnd0P4h = elYisEW.formHandler.getError(`whenTo.notSubscribe`);
this.setState('st4tl5o', cnd0P4h);
if (cnd0P4h) { 
let eljwp8L = eo('div','Y2af',null,`class`,`alert alert-danger`);
text(elYisEW.formHandler.getError(`whenTo.notSubscribe`));
ec('div');
}ec('div');
let elXa9SC = eo('div',null,null,`class`,`form-group`);
let elceQs5 = eo('label',null,null,`for`,`image`,`class`,`d-block m-t-1`);
text(`Course image`);
ec('label');
let elDtpUm = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`,`id`,`image`);
ec('div');
let elQ4ghq = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eluQ5y_ = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st7MjAh'});
}
                    this.isReadyToGo();
                }
        });