_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','taskLevels','tasksService','isSending'],
                children: {c4UyO_ePN:'flk-dropdown-list',cN73OiXcd:'flk-dropdown-list',c521tnV_b:'flk-dropdown-list',ckB1CNord:'flk-dropdown-list',c6Wx4lD3u:'flk-dropdown-list',cX11QZaWn:'flk-dropdown-list',ckChWNy5B:'flk-dropdown-list',cD3sp0RVP:'flk-dropdown-list',cMfpAxCyF:'markdown-input',cSl1Rzerg:'flk-datepicker',cVSXeehC_:'flk-dropdown-list',cx0vXUw9y:'flk-dropdown-list',cJFWqgO9z:'record-audio-input',cP442UEjf:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cP442UEjf', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let el_XSU4 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_XSU4.formHandler) {
                    window.cfrmdlr = el_XSU4.formHandler = new FormHandler(el_XSU4, component);
                } else {
                    window.cfrmdlr = el_XSU4.formHandler;
                }
            let elG4HzA = eo('div',null,null,`class`,`row`);
let el_owmQ = eo('div',null,null,`class`,`col`);
let cndM3VT = component.project;
this.setState('styOfCH', cndM3VT);
let cndNKyY = !(cndM3VT);
this.setState('stMWkKs', cndNKyY);
if (cndM3VT) { 
let elxSF5R = ev('input','gmGf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elxSF5R.value = fval(component.project.id);
}let cndx1FP = ! Is.empty(component.participants);
this.setState('st0QNsE', cndx1FP);
let cndoc4p = !(cndx1FP);
this.setState('stBEK82', cndoc4p);
if (cndx1FP) { 
let cmpJ0vV = this._lc('c4UyO_ePN', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'st0QNsE'});
}else { 
let cmpK7JA = this._lc('cN73OiXcd', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'stBEK82'});
}ec('div');
let elNVprh = eo('div',null,null,`class`,`col`);
let cndWZPI = ! Is.empty(component.supervisors);
this.setState('stw7nSI', cndWZPI);
let cndiA34 = !(cndWZPI);
this.setState('styu4Qp', cndiA34);
if (cndWZPI) { 
let cmpFoTr = this._lc('c521tnV_b', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'stw7nSI'});
}else { 
let cmpSXn6 = this._lc('ckB1CNord', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'styu4Qp'});
}ec('div');
let cndhBpb = component.statuses;
this.setState('stV0Syf', cndhBpb);
if (cndhBpb) { 
let elktiYl = eo('div','HOpf',null,`class`,`col`);
let cmproCZ = this._lc('c6Wx4lD3u', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'stV0Syf'});
ec('div');
}ec('div');
let cndf34B = component.project;
this.setState('stjFlKJ', cndf34B);
if (cndf34B) { 
let el8uZSs = eo('div','X3ff',null,`class`,`row m-y-1`);
let el0p0Et = eo('div','C4vf',null,`class`,`col`);
let cmp4khq = this._lc('cX11QZaWn', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'stjFlKJ'});
ec('div');
let el5_Sol = eo('div','o1Df',null,`class`,`col`);
let cmpsQLY = this._lc('ckChWNy5B', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stjFlKJ'});
ec('div');
let elktZ1W = eo('div','2mTf',null,`class`,`col`);
let cmpVgon = this._lc('cD3sp0RVP', {parent:component,parentTop:flkModal,props:{required:true,items:component.taskLevels},attrs:{name:`${(`priority`).toInputName()}`,label:'Task priority',required:''},state:'stjFlKJ'});
ec('div');
ec('div');
}let el_mwBi = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_XSU4.formHandler.getError(`title`) })}`);
let elDIiCE = eo('label',null,null,`for`,`title`);
text(trans('title'));
let eltjTxr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCBjGi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_XSU4.formHandler.addError(`title`, 'required', trans('validation.required'));}return el_XSU4.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elCBjGi.value = fval(component.data.title);
let cndQ2My = el_XSU4.formHandler.getError(`title`);
this.setState('stEmMYJ', cndQ2My);
if (cndQ2My) { 
let el2cJOv = eo('div','I3Vf',null,`class`,`alert alert-danger`);
text(el_XSU4.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpPQeP = this._lc('cMfpAxCyF', {parent:component,parentTop:flkModal,props:{value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,placeholder:`${trans(`Description`)}`,label:'Description'}});
let eloBiNs = eo('div',null,null,`class`,`row`);
let elxUe_E = eo('div',null,null,`class`,`col-6`);
let elTC7yG = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_XSU4.formHandler.getError(`reward`) })}`);
let elN2jcZ = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let elXDbS_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elBqOfZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_XSU4.formHandler.addError(`reward`, 'required', trans('validation.required'));}return el_XSU4.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elBqOfZ.value = fval(component.data.reward);
let cndaTNy = el_XSU4.formHandler.getError(`reward`);
this.setState('stEU0ew', cndaTNy);
if (cndaTNy) { 
let el964Ca = eo('div','tN4f',null,`class`,`alert alert-danger`);
text(el_XSU4.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let elvNk7q = eo('div',null,null,`class`,`col-6`);
let elOnDJh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_XSU4.formHandler.getError(`penaltyRatio`) })}`);
let elFLQ37 = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let elVI81t = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqHUTG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_XSU4.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return el_XSU4.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
elqHUTG.value = fval(component.data.penaltyRatio);
let cndZGbO = el_XSU4.formHandler.getError(`penaltyRatio`);
this.setState('st3TcVc', cndZGbO);
if (cndZGbO) { 
let elhzqsW = eo('div','t6gf',null,`class`,`alert alert-danger`);
text(el_XSU4.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elY_g7_ = eo('div',null,null,`class`,`row m-t-1`);
let eldDctG = eo('div',null,null,`class`,`col-sm-6`);
let elVgY3P = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
elVgY3P.value = fval(component.data.startsAt);
let el2DTsY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
el2DTsY.value = fval(component.data.endsAt);
let cmpeIP_ = this._lc('cSl1Rzerg', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let elIkyI6 = eo('div',null,null,`class`,`col-sm-6`);
let cndcA8C = ! component.project;
this.setState('stWi8eR', cndcA8C);
let cndCoRn = !(cndcA8C);
this.setState('st949Yg', cndCoRn);
if (cndcA8C) { 
let cmpl0wJ = this._lc('cVSXeehC_', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'stWi8eR'});
}else { 
let cmpoON6 = this._lc('cx0vXUw9y', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'st949Yg'});
}ec('div');
ec('div');
component.recordAudio = this._lc('cJFWqgO9z', {parent:component,parentTop:flkModal,props:{data:component.data}});
let elrESNO = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });