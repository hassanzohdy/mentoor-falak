_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','tasksService','isSending'],
                children: {cL7dQnjIG:'flk-dropdown-list',cfnY1oMOp:'flk-dropdown-list',cs1WaYQKa:'flk-dropdown-list',c0p4NA_76:'flk-dropdown-list',c36s8ZC59:'flk-dropdown-list',crVBAHE5U:'flk-dropdown-list',ctFQzBT92:'flk-dropdown-list',cDR18ZbBc:'flk-datepicker',clXQN25Ys:'flk-dropdown-list',cetkc76nq:'flk-dropdown-list',cVA0mHcG9:'record-audio-input',cuElf7_mo:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cuElf7_mo', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elIoUSR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elIoUSR.formHandler) {
                    window.cfrmdlr = elIoUSR.formHandler = new FormHandler(elIoUSR, component);
                } else {
                    window.cfrmdlr = elIoUSR.formHandler;
                }
            let el1dYkL = eo('div',null,null,`class`,`row`);
let eluZlhF = eo('div',null,null,`class`,`col`);
let cndX97J = component.project;
this.setState('stG60yB', cndX97J);
let cndltMO = !(cndX97J);
this.setState('stKfRWa', cndltMO);
if (cndX97J) { 
let elUPoEC = ev('input','O9Of',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elUPoEC.value = fval(component.project.id);
}let cndZ5UQ = ! Is.empty(component.participants);
this.setState('stHv0Zq', cndZ5UQ);
let cndem_L = !(cndZ5UQ);
this.setState('stdfyMj', cndem_L);
if (cndZ5UQ) { 
let cmpOwBq = this._lc('cL7dQnjIG', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'stHv0Zq'});
}else { 
let cmpbl_a = this._lc('cfnY1oMOp', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'stdfyMj'});
}ec('div');
let elx_ui6 = eo('div',null,null,`class`,`col`);
let cndXiKf = ! Is.empty(component.supervisors);
this.setState('stBndPl', cndXiKf);
let cndoMHd = !(cndXiKf);
this.setState('stXHqO_', cndoMHd);
if (cndXiKf) { 
let cmpv6eg = this._lc('cs1WaYQKa', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'stBndPl'});
}else { 
let cmpgITw = this._lc('c0p4NA_76', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'stXHqO_'});
}ec('div');
let cndz3a2 = component.statuses;
this.setState('starVZV', cndz3a2);
if (cndz3a2) { 
let elK8AkH = eo('div','aJ1f',null,`class`,`col`);
let cmpMloh = this._lc('c36s8ZC59', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'starVZV'});
ec('div');
}ec('div');
let cnd6IHp = component.project;
this.setState('stN8b2S', cnd6IHp);
if (cnd6IHp) { 
let elG3CZX = eo('div','o9Af',null,`class`,`row m-y-1`);
let elmvjEk = eo('div','M_Tf',null,`class`,`col`);
let cmpIHT8 = this._lc('crVBAHE5U', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'stN8b2S'});
ec('div');
let el6NRwU = eo('div','UkNf',null,`class`,`col`);
let cmpuNCV = this._lc('ctFQzBT92', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stN8b2S'});
ec('div');
ec('div');
}let el6gTGl = eo('div',null,null,`class`,`form-group`);
el6gTGl.cls = {'group-error': !!elIoUSR.formHandler.getError(`title`) };

            for (let className in el6gTGl.cls) {
                el6gTGl.classList.toggle(className, el6gTGl.cls[className]);
            }  
            let elufyPt = eo('label',null,null,`for`,`title`);
text(trans('title'));
let el_Qjce = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elPCqEa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIoUSR.formHandler.addError(`title`, 'required', trans('validation.required'));}return elIoUSR.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elPCqEa.value = fval(component.data.title);
let cndI_eG = elIoUSR.formHandler.getError(`title`);
this.setState('steN_F3', cndI_eG);
if (cndI_eG) { 
let elKeIXH = eo('div','AzJf',null,`class`,`alert alert-danger`);
text(elIoUSR.formHandler.getError(`title`));
ec('div');
}ec('div');
let el1NVBJ = eo('div',null,null,`class`,`form-group`);
el1NVBJ.cls = {'group-error': !!elIoUSR.formHandler.getError(`description`) };

            for (let className in el1NVBJ.cls) {
                el1NVBJ.classList.toggle(className, el1NVBJ.cls[className]);
            }  
            let el_1Pvt = eo('label',null,null,`for`,`description`);
text(trans('description'));
ec('label');
let elv4LMs = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.description = this.value;}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elv4LMs.value = fval(component.data.description);
ec('textarea');
ec('div');
let elXiiVB = eo('div',null,null,`class`,`row`);
let el5dvHH = eo('div',null,null,`class`,`col-6`);
let elc6Lud = eo('div',null,null,`class`,`form-group`);
elc6Lud.cls = {'group-error': !!elIoUSR.formHandler.getError(`reward`) };

            for (let className in elc6Lud.cls) {
                elc6Lud.classList.toggle(className, elc6Lud.cls[className]);
            }  
            let elCqREY = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let el7Y3bD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHM3oE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIoUSR.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elIoUSR.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elHM3oE.value = fval(component.data.reward);
let cnd2c5g = elIoUSR.formHandler.getError(`reward`);
this.setState('st_kF2C', cnd2c5g);
if (cnd2c5g) { 
let elvf4kA = eo('div','Wqrf',null,`class`,`alert alert-danger`);
text(elIoUSR.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let elF0K9U = eo('div',null,null,`class`,`col-6`);
let elagpb1 = eo('div',null,null,`class`,`form-group`);
elagpb1.cls = {'group-error': !!elIoUSR.formHandler.getError(`penaltyRatio`) };

            for (let className in elagpb1.cls) {
                elagpb1.classList.toggle(className, elagpb1.cls[className]);
            }  
            let el88WwK = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let elYKnEH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleIPQG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIoUSR.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return elIoUSR.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
eleIPQG.value = fval(component.data.penaltyRatio);
let cndLF37 = elIoUSR.formHandler.getError(`penaltyRatio`);
this.setState('stuKo2s', cndLF37);
if (cndLF37) { 
let elvC34n = eo('div','xE3f',null,`class`,`alert alert-danger`);
text(elIoUSR.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elQcE3d = eo('div',null,null,`class`,`row m-t-1`);
let elFdJZ2 = eo('div',null,null,`class`,`col-sm-6`);
let elvjcOc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
elvjcOc.value = fval(component.data.startsAt);
let eloUmkk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
eloUmkk.value = fval(component.data.endsAt);
let cmp2OaT = this._lc('cDR18ZbBc', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let elakxRL = eo('div',null,null,`class`,`col-sm-6`);
let cndw478 = ! component.project;
this.setState('stT5BJA', cndw478);
let cndexRa = !(cndw478);
this.setState('stLoNlf', cndexRa);
if (cndw478) { 
let cmp9U8P = this._lc('clXQN25Ys', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'stT5BJA'});
}else { 
let cmp1A7G = this._lc('cetkc76nq', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'stLoNlf'});
}ec('div');
ec('div');
component.recordAudio = this._lc('cVA0mHcG9', {parent:component,parentTop:flkModal,props:{data:component.data}});
let eltFgGB = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });