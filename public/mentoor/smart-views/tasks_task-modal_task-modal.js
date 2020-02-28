_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','taskLevels','tasksService','isSending'],
                children: {ckyx2F3a9:'flk-dropdown-list',ce3kVRM1J:'flk-dropdown-list',cLEL2ZadW:'flk-dropdown-list',cJb65bjev:'flk-dropdown-list',cyShG2_cv:'flk-dropdown-list',cbq7qdWMP:'flk-dropdown-list',cS5k9DFUg:'flk-dropdown-list',c9wrMsw3D:'flk-dropdown-list',cI47VJF3b:'markdown-input',cfTEUzO7r:'flk-datepicker',cbGHwk0Ur:'flk-dropdown-list',cmvh1pYtS:'flk-dropdown-list',cuc2gQ8AZ:'record-audio-input',cQPAcVhjD:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cQPAcVhjD', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elaBLIh = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elaBLIh.formHandler) {
                    window.cfrmdlr = elaBLIh.formHandler = new FormHandler(elaBLIh, component);
                } else {
                    window.cfrmdlr = elaBLIh.formHandler;
                }
            let elCvBJk = eo('div',null,null,`class`,`row`);
let elbfCGg = eo('div',null,null,`class`,`col`);
let cndNCX1 = component.project;
this.setState('st9Shp9', cndNCX1);
let cnd6MbO = !(cndNCX1);
this.setState('stmagbP', cnd6MbO);
if (cndNCX1) { 
let elLkj1j = ev('input','Qsef',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elLkj1j.value = fval(component.project.id);
}let cndLBaH = ! Is.empty(component.participants);
this.setState('stnm1nZ', cndLBaH);
let cndKjQn = !(cndLBaH);
this.setState('stguYpu', cndKjQn);
if (cndLBaH) { 
let cmpABs2 = this._lc('ckyx2F3a9', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'stnm1nZ'});
}else { 
let cmpnDZB = this._lc('ce3kVRM1J', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'stguYpu'});
}ec('div');
let ele45oZ = eo('div',null,null,`class`,`col`);
let cndeQFA = ! Is.empty(component.supervisors);
this.setState('st00ery', cndeQFA);
let cndnA2b = !(cndeQFA);
this.setState('stXNSMe', cndnA2b);
if (cndeQFA) { 
let cmpgfgd = this._lc('cLEL2ZadW', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'st00ery'});
}else { 
let cmp0XD9 = this._lc('cJb65bjev', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'stXNSMe'});
}ec('div');
let cnd3Ukb = component.statuses;
this.setState('strLN4h', cnd3Ukb);
if (cnd3Ukb) { 
let elC3vnv = eo('div','mREf',null,`class`,`col`);
let cmpnlv9 = this._lc('cyShG2_cv', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'strLN4h'});
ec('div');
}ec('div');
let cndjx2S = component.project;
this.setState('st58fjJ', cndjx2S);
if (cndjx2S) { 
let elsfdOT = eo('div','Ohmf',null,`class`,`row m-y-1`);
let elDBe0R = eo('div','hc6f',null,`class`,`col`);
let cmpDChh = this._lc('cbq7qdWMP', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'st58fjJ'});
ec('div');
let eln3KbP = eo('div','rhwf',null,`class`,`col`);
let cmpmBxr = this._lc('cS5k9DFUg', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'st58fjJ'});
ec('div');
let el9zaq9 = eo('div','uw8f',null,`class`,`col`);
let cmpDcuX = this._lc('c9wrMsw3D', {parent:component,parentTop:flkModal,props:{required:true,items:component.taskLevels},attrs:{name:`${(`priority`).toInputName()}`,label:'Task priority',required:''},state:'st58fjJ'});
ec('div');
ec('div');
}let elLGsDZ = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elaBLIh.formHandler.getError(`title`) })}`);
let elh1SPz = eo('label',null,null,`for`,`title`);
text(trans('title'));
let el_IkJq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elOkh1C = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elaBLIh.formHandler.addError(`title`, 'required', trans('validation.required'));}return elaBLIh.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elOkh1C.value = fval(component.data.title);
let cndgDXl = elaBLIh.formHandler.getError(`title`);
this.setState('str8QFz', cndgDXl);
if (cndgDXl) { 
let elhCodp = eo('div','tjVf',null,`class`,`alert alert-danger`);
text(elaBLIh.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpCG0V = this._lc('cI47VJF3b', {parent:component,parentTop:flkModal,props:{value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,placeholder:`${trans(`Description`)}`,label:'Description'}});
let elHcaDB = eo('div',null,null,`class`,`row`);
let elRslEx = eo('div',null,null,`class`,`col-6`);
let elmWF_v = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elaBLIh.formHandler.getError(`reward`) })}`);
let elz_zs4 = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let elDR8_3 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhfsL6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elaBLIh.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elaBLIh.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elhfsL6.value = fval(component.data.reward);
let cndeIXZ = elaBLIh.formHandler.getError(`reward`);
this.setState('stBl4Ni', cndeIXZ);
if (cndeIXZ) { 
let elh5IeL = eo('div','CWNf',null,`class`,`alert alert-danger`);
text(elaBLIh.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let elDs6BG = eo('div',null,null,`class`,`col-6`);
let el12dTs = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elaBLIh.formHandler.getError(`penaltyRatio`) })}`);
let elPcgg_ = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let el0pHiY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZf2zM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elaBLIh.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return elaBLIh.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
elZf2zM.value = fval(component.data.penaltyRatio);
let cndj03h = elaBLIh.formHandler.getError(`penaltyRatio`);
this.setState('stqwvbT', cndj03h);
if (cndj03h) { 
let elBze6d = eo('div','1Jzf',null,`class`,`alert alert-danger`);
text(elaBLIh.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elgyKne = eo('div',null,null,`class`,`row m-t-1`);
let eld4oEo = eo('div',null,null,`class`,`col-sm-6`);
let elvp7oc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
elvp7oc.value = fval(component.data.startsAt);
let elordYE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
elordYE.value = fval(component.data.endsAt);
let cmppoLr = this._lc('cfTEUzO7r', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let ell5FJt = eo('div',null,null,`class`,`col-sm-6`);
let cnd8JjJ = ! component.project;
this.setState('stwgO9X', cnd8JjJ);
let cnd9lYU = !(cnd8JjJ);
this.setState('st2JVbs', cnd9lYU);
if (cnd8JjJ) { 
let cmp2eIC = this._lc('cbGHwk0Ur', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'stwgO9X'});
}else { 
let cmpWyYs = this._lc('cmvh1pYtS', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'st2JVbs'});
}ec('div');
ec('div');
component.recordAudio = this._lc('cuc2gQ8AZ', {parent:component,parentTop:flkModal,props:{data:component.data}});
let elwGfBL = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });