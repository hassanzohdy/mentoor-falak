_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','taskLevels','tasksService','isSending'],
                children: {cMQI5_ujk:'flk-dropdown-list',cw59NYuaI:'flk-dropdown-list',cjU_OynxK:'flk-dropdown-list',ckqT6XUID:'flk-dropdown-list',cIXdXabXH:'flk-dropdown-list',cB4IrSBA1:'flk-dropdown-list',c7LGsUd5r:'flk-dropdown-list',c8RoDHSyA:'flk-dropdown-list',coKBZD7xi:'flk-datepicker',c6mZBTUe0:'flk-dropdown-list',cobttAR6M:'flk-dropdown-list',clQNQPe9_:'record-audio-input',cHYMcyOFO:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cHYMcyOFO', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let el6kHIl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el6kHIl.formHandler) {
                    window.cfrmdlr = el6kHIl.formHandler = new FormHandler(el6kHIl, component);
                } else {
                    window.cfrmdlr = el6kHIl.formHandler;
                }
            let elYPQnn = eo('div',null,null,`class`,`row`);
let elBmzTx = eo('div',null,null,`class`,`col`);
let cndWWgf = component.project;
this.setState('stoFODC', cndWWgf);
let cndHydK = !(cndWWgf);
this.setState('stpw8gX', cndHydK);
if (cndWWgf) { 
let elkQNEh = ev('input','ZWnf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elkQNEh.value = fval(component.project.id);
}let cndItRt = ! Is.empty(component.participants);
this.setState('stGwfCM', cndItRt);
let cndTfwG = !(cndItRt);
this.setState('st9CZk6', cndTfwG);
if (cndItRt) { 
let cmpKGPN = this._lc('cMQI5_ujk', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'stGwfCM'});
}else { 
let cmpBp2Q = this._lc('cw59NYuaI', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'st9CZk6'});
}ec('div');
let eld9NeT = eo('div',null,null,`class`,`col`);
let cndTqeV = ! Is.empty(component.supervisors);
this.setState('stFxeMT', cndTqeV);
let cnds5gr = !(cndTqeV);
this.setState('stQ4zUj', cnds5gr);
if (cndTqeV) { 
let cmpHxSq = this._lc('cjU_OynxK', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'stFxeMT'});
}else { 
let cmpOeDx = this._lc('ckqT6XUID', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'stQ4zUj'});
}ec('div');
let cndiVgB = component.statuses;
this.setState('stErVkJ', cndiVgB);
if (cndiVgB) { 
let elB87KJ = eo('div','RIhf',null,`class`,`col`);
let cmpfdOq = this._lc('cIXdXabXH', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'stErVkJ'});
ec('div');
}ec('div');
let cndaeHN = component.project;
this.setState('st2Vi6x', cndaeHN);
if (cndaeHN) { 
let elSD4f7 = eo('div','Xsmf',null,`class`,`row m-y-1`);
let elWys7d = eo('div','nssf',null,`class`,`col`);
let cmpb5bt = this._lc('cB4IrSBA1', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'st2Vi6x'});
ec('div');
let elB9Cp3 = eo('div','gHRf',null,`class`,`col`);
let cmpzArM = this._lc('c7LGsUd5r', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'st2Vi6x'});
ec('div');
let elDxOe_ = eo('div','xWCf',null,`class`,`col`);
let cmpcCYq = this._lc('c8RoDHSyA', {parent:component,parentTop:flkModal,props:{items:component.taskLevels},attrs:{name:`${(`priority`).toInputName()}`,label:'Task priority',required:''},state:'st2Vi6x'});
ec('div');
ec('div');
}let elYXkn4 = eo('div',null,null,`class`,`form-group`);
elYXkn4.cls = {'group-error': !!el6kHIl.formHandler.getError(`title`) };

            for (let className in elYXkn4.cls) {
                elYXkn4.classList.toggle(className, elYXkn4.cls[className]);
            }  
            let eledr9j = eo('label',null,null,`for`,`title`);
text(trans('title'));
let el6WYpK = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elenmOw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6kHIl.formHandler.addError(`title`, 'required', trans('validation.required'));}return el6kHIl.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elenmOw.value = fval(component.data.title);
let cndf49O = el6kHIl.formHandler.getError(`title`);
this.setState('stfjVzS', cndf49O);
if (cndf49O) { 
let eloKb02 = eo('div','A4df',null,`class`,`alert alert-danger`);
text(el6kHIl.formHandler.getError(`title`));
ec('div');
}ec('div');
let elPtlcG = eo('div',null,null,`class`,`form-group`);
elPtlcG.cls = {'group-error': !!el6kHIl.formHandler.getError(`description`) };

            for (let className in elPtlcG.cls) {
                elPtlcG.classList.toggle(className, elPtlcG.cls[className]);
            }  
            let elfxPhI = eo('label',null,null,`for`,`description`);
text(trans('description'));
ec('label');
let ela1mEi = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.description = this.value;}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ela1mEi.value = fval(component.data.description);
ec('textarea');
ec('div');
let eldbbAv = eo('div',null,null,`class`,`row`);
let elU6Yzn = eo('div',null,null,`class`,`col-6`);
let elIwXXk = eo('div',null,null,`class`,`form-group`);
elIwXXk.cls = {'group-error': !!el6kHIl.formHandler.getError(`reward`) };

            for (let className in elIwXXk.cls) {
                elIwXXk.classList.toggle(className, elIwXXk.cls[className]);
            }  
            let elsO3Il = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let eli0TpF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltOzii = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6kHIl.formHandler.addError(`reward`, 'required', trans('validation.required'));}return el6kHIl.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
eltOzii.value = fval(component.data.reward);
let cndl1Mi = el6kHIl.formHandler.getError(`reward`);
this.setState('stma0_L', cndl1Mi);
if (cndl1Mi) { 
let elOvCNa = eo('div','nC9f',null,`class`,`alert alert-danger`);
text(el6kHIl.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let elAav1K = eo('div',null,null,`class`,`col-6`);
let elD2wKk = eo('div',null,null,`class`,`form-group`);
elD2wKk.cls = {'group-error': !!el6kHIl.formHandler.getError(`penaltyRatio`) };

            for (let className in elD2wKk.cls) {
                elD2wKk.classList.toggle(className, elD2wKk.cls[className]);
            }  
            let elXb11s = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let elOMJu6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el0Faua = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6kHIl.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return el6kHIl.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
el0Faua.value = fval(component.data.penaltyRatio);
let cndsbHO = el6kHIl.formHandler.getError(`penaltyRatio`);
this.setState('st0Q7cx', cndsbHO);
if (cndsbHO) { 
let elQdNdL = eo('div','2akf',null,`class`,`alert alert-danger`);
text(el6kHIl.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elzCHxe = eo('div',null,null,`class`,`row m-t-1`);
let elH8IMy = eo('div',null,null,`class`,`col-sm-6`);
let el0L4S5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
el0L4S5.value = fval(component.data.startsAt);
let elU0p8w = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
elU0p8w.value = fval(component.data.endsAt);
let cmpq08t = this._lc('coKBZD7xi', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let el_I2rG = eo('div',null,null,`class`,`col-sm-6`);
let cndfeBw = ! component.project;
this.setState('starYtH', cndfeBw);
let cndmnrE = !(cndfeBw);
this.setState('stNXnj6', cndmnrE);
if (cndfeBw) { 
let cmpT3Bo = this._lc('c6mZBTUe0', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'starYtH'});
}else { 
let cmpBPYb = this._lc('cobttAR6M', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'stNXnj6'});
}ec('div');
ec('div');
component.recordAudio = this._lc('clQNQPe9_', {parent:component,parentTop:flkModal,props:{data:component.data}});
let el0OGrD = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });