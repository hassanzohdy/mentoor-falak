_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','taskLevels','tasksService','isSending'],
                children: {ciqDoxAqs:'flk-dropdown-list',czHlhqhtG:'flk-dropdown-list',cLKLXObhj:'flk-dropdown-list',comW6UDXI:'flk-dropdown-list',cmb48dac5:'flk-dropdown-list',cK6lJJmPs:'flk-dropdown-list',c2Sygjx1N:'flk-dropdown-list',cBPUctrLS:'flk-dropdown-list',cqq8XAmgs:'markdown-input',cvbn0MKct:'flk-datepicker',c18ITJsy9:'flk-dropdown-list',c0_X0Rk6i:'flk-dropdown-list',caRmRJuqx:'record-audio-input',cVd1AzkX1:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cVd1AzkX1', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let el0A7yu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el0A7yu.formHandler) {
                    window.cfrmdlr = el0A7yu.formHandler = new FormHandler(el0A7yu, component);
                } else {
                    window.cfrmdlr = el0A7yu.formHandler;
                }
            let elAXGF8 = eo('div',null,null,`class`,`row`);
let elMRKNb = eo('div',null,null,`class`,`col`);
let cndhLI5 = component.project;
this.setState('st_RGor', cndhLI5);
let cndlsDQ = !(cndhLI5);
this.setState('stX5ycC', cndlsDQ);
if (cndhLI5) { 
let el_JkSr = ev('input','a7gf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el_JkSr.value = fval(component.project.id);
}let cndEXQ1 = ! Is.empty(component.participants);
this.setState('stcNhFG', cndEXQ1);
let cnd3Ne4 = !(cndEXQ1);
this.setState('stV0MpT', cnd3Ne4);
if (cndEXQ1) { 
let cmpCdga = this._lc('ciqDoxAqs', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'stcNhFG'});
}else { 
let cmpzgL6 = this._lc('czHlhqhtG', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'stV0MpT'});
}ec('div');
let elOsdCL = eo('div',null,null,`class`,`col`);
let cnd7xwU = ! Is.empty(component.supervisors);
this.setState('stQeexZ', cnd7xwU);
let cndk68A = !(cnd7xwU);
this.setState('stqUIJg', cndk68A);
if (cnd7xwU) { 
let cmpK3oy = this._lc('cLKLXObhj', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'stQeexZ'});
}else { 
let cmp3d8y = this._lc('comW6UDXI', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'stqUIJg'});
}ec('div');
let cndgUDZ = component.statuses;
this.setState('stJxHgr', cndgUDZ);
if (cndgUDZ) { 
let elwP3J5 = eo('div','AK7f',null,`class`,`col`);
let cmp6rWt = this._lc('cmb48dac5', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'stJxHgr'});
ec('div');
}ec('div');
let cndOKmN = component.project;
this.setState('stc5ptU', cndOKmN);
if (cndOKmN) { 
let el45oWc = eo('div','jOff',null,`class`,`row m-y-1`);
let elarZrn = eo('div','Bkqf',null,`class`,`col`);
let cmpMjIg = this._lc('cK6lJJmPs', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'stc5ptU'});
ec('div');
let elVEW_H = eo('div','Oouf',null,`class`,`col`);
let cmpoyo4 = this._lc('c2Sygjx1N', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stc5ptU'});
ec('div');
let el7T_mP = eo('div','LwGf',null,`class`,`col`);
let cmpoYbh = this._lc('cBPUctrLS', {parent:component,parentTop:flkModal,props:{required:true,items:component.taskLevels},attrs:{name:`${(`priority`).toInputName()}`,label:'Task priority',required:''},state:'stc5ptU'});
ec('div');
ec('div');
}let elf_COo = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el0A7yu.formHandler.getError(`title`) })}`);
let el8vqVV = eo('label',null,null,`for`,`title`);
text(trans('title'));
let elaDiwc = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elekC9_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0A7yu.formHandler.addError(`title`, 'required', trans('validation.required'));}return el0A7yu.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elekC9_.value = fval(component.data.title);
let cndIgI6 = el0A7yu.formHandler.getError(`title`);
this.setState('stQjpWC', cndIgI6);
if (cndIgI6) { 
let elfhD8C = eo('div','HEkf',null,`class`,`alert alert-danger`);
text(el0A7yu.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmptAGr = this._lc('cqq8XAmgs', {parent:component,parentTop:flkModal,props:{value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,placeholder:`${trans(`Description`)}`,label:'Description'}});
let elWYIle = eo('div',null,null,`class`,`row`);
let elEBXD6 = eo('div',null,null,`class`,`col-6`);
let eldyFbX = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el0A7yu.formHandler.getError(`reward`) })}`);
let elXZFni = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let elbbOqI = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqltLR = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0A7yu.formHandler.addError(`reward`, 'required', trans('validation.required'));}return el0A7yu.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elqltLR.value = fval(component.data.reward);
let cndRdto = el0A7yu.formHandler.getError(`reward`);
this.setState('sthBWcB', cndRdto);
if (cndRdto) { 
let el3TC9i = eo('div','7Brf',null,`class`,`alert alert-danger`);
text(el0A7yu.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let elMT3AX = eo('div',null,null,`class`,`col-6`);
let elAY7WS = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el0A7yu.formHandler.getError(`penaltyRatio`) })}`);
let elDGzPW = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let eljqkxL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elfXPY1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0A7yu.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return el0A7yu.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
elfXPY1.value = fval(component.data.penaltyRatio);
let cndXtxR = el0A7yu.formHandler.getError(`penaltyRatio`);
this.setState('ste49ya', cndXtxR);
if (cndXtxR) { 
let elADYFy = eo('div','rmAf',null,`class`,`alert alert-danger`);
text(el0A7yu.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elYlheH = eo('div',null,null,`class`,`row m-t-1`);
let elhmpLq = eo('div',null,null,`class`,`col-sm-6`);
let elCgK5o = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
elCgK5o.value = fval(component.data.startsAt);
let elKUm83 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
elKUm83.value = fval(component.data.endsAt);
let cmpsGJ4 = this._lc('cvbn0MKct', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let elqB4Tv = eo('div',null,null,`class`,`col-sm-6`);
let cndO7XH = ! component.project;
this.setState('stTU6mZ', cndO7XH);
let cndVn8M = !(cndO7XH);
this.setState('stGwVsx', cndVn8M);
if (cndO7XH) { 
let cmp0Vb_ = this._lc('c18ITJsy9', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'stTU6mZ'});
}else { 
let cmpyMff = this._lc('c0_X0Rk6i', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'stGwVsx'});
}ec('div');
ec('div');
component.recordAudio = this._lc('caRmRJuqx', {parent:component,parentTop:flkModal,props:{data:component.data}});
let elZpW2T = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });