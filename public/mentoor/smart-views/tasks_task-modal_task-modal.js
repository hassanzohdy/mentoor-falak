_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','tasksService','isSending'],
                children: {cxve_G4Fo:'flk-dropdown-list',cZezIc8JN:'flk-dropdown-list',c9Jd_N0mM:'flk-dropdown-list',cx43DCq2N:'flk-dropdown-list',chY_6p37N:'flk-dropdown-list',cWaG0SvX6:'flk-dropdown-list',cuweUZK3b:'flk-dropdown-list',cISfPgTsa:'flk-datepicker',cTBXJwQW7:'flk-dropdown-list',crMLYE6l0:'flk-dropdown-list',cIqBVTLDj:'record-audio-input',cZ86UWWCX:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cZ86UWWCX', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elslJ4M = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elslJ4M.formHandler) {
                    window.cfrmdlr = elslJ4M.formHandler = new FormHandler(elslJ4M, component);
                } else {
                    window.cfrmdlr = elslJ4M.formHandler;
                }
            let elM_ATT = eo('div',null,null,`class`,`row`);
let el73NAY = eo('div',null,null,`class`,`col`);
let cndR8Vj = component.project;
this.setState('st0a0mg', cndR8Vj);
let cnd2rv1 = !(cndR8Vj);
this.setState('stDEKnK', cnd2rv1);
if (cndR8Vj) { 
let elSy6h4 = ev('input','QSFf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elSy6h4.value = fval(component.project.id);
}let cnd5WFJ = ! Is.empty(component.participants);
this.setState('stS_41Z', cnd5WFJ);
let cnd8LvK = !(cnd5WFJ);
this.setState('sttwKC8', cnd8LvK);
if (cnd5WFJ) { 
let cmpNTLv = this._lc('cxve_G4Fo', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'stS_41Z'});
}else { 
let cmpScNb = this._lc('cZezIc8JN', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'sttwKC8'});
}ec('div');
let elS4CiZ = eo('div',null,null,`class`,`col`);
let cnd03hn = ! Is.empty(component.supervisors);
this.setState('stD6sfS', cnd03hn);
let cndtY11 = !(cnd03hn);
this.setState('st1bGXD', cndtY11);
if (cnd03hn) { 
let cmpbZKp = this._lc('c9Jd_N0mM', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'stD6sfS'});
}else { 
let cmppPp6 = this._lc('cx43DCq2N', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'st1bGXD'});
}ec('div');
let cndzUPF = component.statuses;
this.setState('stTTGVK', cndzUPF);
if (cndzUPF) { 
let elJTbuh = eo('div','646f',null,`class`,`col`);
let cmpGgMQ = this._lc('chY_6p37N', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'stTTGVK'});
ec('div');
}ec('div');
let cndt4Jn = component.project;
this.setState('stohd19', cndt4Jn);
if (cndt4Jn) { 
let elEG2Ae = eo('div','QgTf',null,`class`,`row m-y-1`);
let elcfAmV = eo('div','Oe4f',null,`class`,`col`);
let cmpE3rm = this._lc('cWaG0SvX6', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'stohd19'});
ec('div');
let elD58iR = eo('div','GnRf',null,`class`,`col`);
let cmppaAY = this._lc('cuweUZK3b', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stohd19'});
ec('div');
ec('div');
}let elsY2yk = eo('div',null,null,`class`,`form-group`);
elsY2yk.cls = {'group-error': !!elslJ4M.formHandler.getError(`title`) };

            for (let className in elsY2yk.cls) {
                elsY2yk.classList.toggle(className, elsY2yk.cls[className]);
            }  
            let eltRodV = eo('label',null,null,`for`,`title`);
text(trans('title'));
let elpc309 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1ZFrw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elslJ4M.formHandler.addError(`title`, 'required', trans('validation.required'));}return elslJ4M.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el1ZFrw.value = fval(component.data.title);
let cndnGoO = elslJ4M.formHandler.getError(`title`);
this.setState('st_TFKL', cndnGoO);
if (cndnGoO) { 
let elMnKnQ = eo('div','jTNf',null,`class`,`alert alert-danger`);
text(elslJ4M.formHandler.getError(`title`));
ec('div');
}ec('div');
let elwFP38 = eo('div',null,null,`class`,`form-group`);
elwFP38.cls = {'group-error': !!elslJ4M.formHandler.getError(`description`) };

            for (let className in elwFP38.cls) {
                elwFP38.classList.toggle(className, elwFP38.cls[className]);
            }  
            let elnuQj5 = eo('label',null,null,`for`,`description`);
text(trans('description'));
ec('label');
let el3cOv3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.description = this.value;}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el3cOv3.value = fval(component.data.description);
ec('textarea');
ec('div');
let elfOole = eo('div',null,null,`class`,`row`);
let elEyfHy = eo('div',null,null,`class`,`col-6`);
let el08Uvc = eo('div',null,null,`class`,`form-group`);
el08Uvc.cls = {'group-error': !!elslJ4M.formHandler.getError(`reward`) };

            for (let className in el08Uvc.cls) {
                el08Uvc.classList.toggle(className, el08Uvc.cls[className]);
            }  
            let ellDqJ8 = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let el5QA4A = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKdmy_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elslJ4M.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elslJ4M.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elKdmy_.value = fval(component.data.reward);
let cnde8GJ = elslJ4M.formHandler.getError(`reward`);
this.setState('stKDFdj', cnde8GJ);
if (cnde8GJ) { 
let elMoivs = eo('div','3qef',null,`class`,`alert alert-danger`);
text(elslJ4M.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let elAD22J = eo('div',null,null,`class`,`col-6`);
let el0b88C = eo('div',null,null,`class`,`form-group`);
el0b88C.cls = {'group-error': !!elslJ4M.formHandler.getError(`penaltyRatio`) };

            for (let className in el0b88C.cls) {
                el0b88C.classList.toggle(className, el0b88C.cls[className]);
            }  
            let elHWEfe = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let el3AYwr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljQ4Us = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elslJ4M.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return elslJ4M.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
eljQ4Us.value = fval(component.data.penaltyRatio);
let cnddnQg = elslJ4M.formHandler.getError(`penaltyRatio`);
this.setState('stPsdgu', cnddnQg);
if (cnddnQg) { 
let el0K2lZ = eo('div','mAXf',null,`class`,`alert alert-danger`);
text(elslJ4M.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elBnIOF = eo('div',null,null,`class`,`row m-t-1`);
let elFONt_ = eo('div',null,null,`class`,`col-sm-6`);
let elqsVfM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
elqsVfM.value = fval(component.data.startsAt);
let elTCfaH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
elTCfaH.value = fval(component.data.endsAt);
let cmpCVDR = this._lc('cISfPgTsa', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let eldfl6M = eo('div',null,null,`class`,`col-sm-6`);
let cndxYBT = ! component.project;
this.setState('std8WgH', cndxYBT);
let cndlQem = !(cndxYBT);
this.setState('stTwabd', cndlQem);
if (cndxYBT) { 
let cmpt_02 = this._lc('cTBXJwQW7', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'std8WgH'});
}else { 
let cmpjwdb = this._lc('crMLYE6l0', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'stTwabd'});
}ec('div');
ec('div');
component.recordAudio = this._lc('cIqBVTLDj', {parent:component,parentTop:flkModal,props:{data:component.data}});
let elz8K9D = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });